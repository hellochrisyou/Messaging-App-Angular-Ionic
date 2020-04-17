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

    set inboxUsers(val) {
        this._inboxUsers.next(val)
    }

    set peopleUsers(val) {
        this._peopleUsers.next(val);
    }

    private readonly _users = new BehaviorSubject<User[]>([]);
    private readonly _messages = new BehaviorSubject<Message[]>([]);
    private readonly _images = new BehaviorSubject<Image[]>([]);
    private readonly _proposals = new BehaviorSubject<Proposal[]>([]);
    private readonly _inboxUsers = new BehaviorSubject<User[]>([]);
    private readonly _peopleUsers = new BehaviorSubject<User[]>([]);


    readonly users$ = this._users.asObservable();
    readonly inboxUsers$ = this._inboxUsers.asObservable();
    readonly peopleUsers$ = this._peopleUsers.asObservable();

    readonly messages$ = this._messages.asObservable();
    readonly images$ = this._images.asObservable();
    readonly proposals$ = this._proposals.asObservable();

    //  = this.users$.pipe(
    //     map(users => users.filter(user => user.messageCount > 0 && user.email !== this.authService.authState.email))
    // );

    //  = this.users$.pipe(
    //     map(users => users.filter(user => user.messageCount === 0 && user.email !== this.authService.authState.email))
    // );


    public setUser(userEmail: string) {
        this._users.forEach((users: any) => {
            this.selectedUser = users.find(user => userEmail === user.email);
        });
        console.log('selecteduser', this.selectedUser);
    }

    public setPartitionedUsers() {
        this.inboxUsers = [];
        this.peopleUsers = [];
        const tmpInboxArr = [];
        const tmpPeopleArr = [];
        this._users.forEach(users => users.forEach(user => {
            this.messagingService.getUserMessages(this.authService.authState.email, user.email).subscribe(userDocuments => {
                if (user.photoURL === undefined || user.photoURL === '' || user.photoURL === null) {
                    user.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
                }
                if (user.email !== this.authService.authState.email) {
                    if (userDocuments.length !== 0) {
                        tmpInboxArr.push(user);
                    } else {
                        tmpPeopleArr.push(user);
                    }
                }
            });
        }));
        this.inboxUsers = tmpInboxArr;
        this.peopleUsers = tmpPeopleArr;
    }

    public setMessageUser(userEmail: string) {
        this.messagingService.getMessages(userEmail).subscribe((messagesData: any[]) => {
            this.messages = messagesData;
        });
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
            this.users = usersData;
            this.setPartitionedUsers();
        });
    }
}
