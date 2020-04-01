import { User } from './../../../shared/interface/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, Image, Proposal } from '../../../shared/interface/models';
import { MessagingService } from '../messaging.service';
import { ImageService } from '../image.service';
import { ProposalService } from '../proposal.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class UserStateService {

    selectedUser: User;

    constructor(
        private authService: AuthService,
        public userService: UserService,
        private messagingService: MessagingService,
    ) {
        this.fetchAll();
    }


    set users(val: User[]) {
        this._users.next(val);
    }

    set messages(val: Message[]) {
        this._messages.next(val);
    }

    set images(val: Image[]) {
        this._images.next(val);
    }

    set proposals(val: Proposal[]) {
        this._proposals.next(val);
    }

    private readonly _users = new BehaviorSubject<User[]>([]);
    private readonly _messages = new BehaviorSubject<Message[]>([]);
    private readonly _images = new BehaviorSubject<Image[]>([]);
    private readonly _proposals = new BehaviorSubject<Proposal[]>([]);

    readonly users$ = this._users.asObservable();
    readonly messages$ = this._messages.asObservable();
    readonly images$ = this._images.asObservable();
    readonly proposals$ = this._proposals.asObservable();

    readonly inboxUsers$ = this.users$.pipe(
        map(users => users.filter(user => user.messageCount > 0 && user.email !== this.authService.authState.email))
    );

    readonly peopleUsers$ = this.users$.pipe(
        map(users => users.filter(user => user.messageCount === 0 && user.email !== this.authService.authState.email))
    );


    public setUser(userEmail: string) {
        console.log("UserStateService -> setUser -> userEmail", userEmail)
        this._users.forEach((users: any) => {
            console.log('user 111', users)
            this.selectedUser = users.find(user => userEmail === user.email)
        });
        console.log('selecteduser', this.selectedUser);
    }

    public setMessageUser(userEmail: string) {
        this.messagingService.getMessages(userEmail).subscribe((messagesData: any[]) => {
            this.messages = messagesData;
        })
    }

    public addUser(user: User) {
        this.users = [
            ...this.users,
            user
        ];
        this.userService.createUser(user);
    }

    public sendMessage(message: Message, senderEmail: string, receiverEmail: string) {
        this._users.forEach((user: any) => {
            user.forEach(element => {
                if (element.email === senderEmail) {
                    element.messageCount++;
                }
            });
        });
        const docRef = this.userService.getUser(senderEmail);
        docRef.get().toPromise().then(doc => {
            if (doc.exists) {
                console.log('Document data:', doc.data());
                const tmpUser: User = doc.data();
                tmpUser.messageCount = tmpUser.messageCount + 1;
                this.userService.updateUser(tmpUser);
            } else {
                console.log('No such document!');
            }
        }).catch(error => {
            console.log('Error getting document:', error);
        });
        this.messagingService.sendMessage(message, senderEmail, receiverEmail);
    }

    public addImage(image: Image, userEmail: string) {
        // this.users.forEach((user: User) => {
        //     if (user.email === userEmail) {
        //         user.images.push(image);
        //     }
        // });
        // this.imageService.addImageList(image, userEmail);
    }

    public addProposal(proposal: Proposal, userEmail: string, receiverEmail: string) {
        // this.users.forEach((user: User) => {
        //     if (user.email === userEmail) {
        //         user.proposals.push(proposal);
        //     }
        // });
        // this.proposalService.sendProposal(proposal, userEmail, receiverEmail);
    }

    async fetchAll() {
        this.userService.getUsers().subscribe((usersData: any[]) => {
            console.log('UserStateService -> fetchAll -> usersData', usersData);
            this.users = usersData;
        });
    }
}
