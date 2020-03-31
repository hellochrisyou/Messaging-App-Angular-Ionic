import { User } from './../../../shared/interface/models';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, Image, Proposal } from '../../../shared/interface/models';
import { MessagingService } from '../messaging.service';
import { ImageService } from '../image.service';
import { ProposalService } from '../proposal.service';

@Injectable({ providedIn: 'root' })
export class UserStateService {

    constructor(
        private userService: UserService,
        private messagingService: MessagingService,
        private imageService: ImageService,
        private proposalService: ProposalService
    ) {
        this.fetchAll();
    }

    private readonly _users = new BehaviorSubject<User[]>([]);
    private readonly _images = new BehaviorSubject<Image[]>([]);
    private readonly _proposals = new BehaviorSubject<Proposal[]>([]);

    readonly users$ = this._users.asObservable();
    readonly images$ = this._images.asObservable();
    readonly proposals$ = this._proposals.asObservable();


    set users(val: User[]) {
        this._users.next(val);
    }

    set images(val: Image[]) {
        this._images.next(val);
    }

    set proposals(val: Proposal[]) {
        this._proposals.next(val);
    }

    public addUser(user: User) {
        this.users = [
            ...this.users,
            user
        ];
        this.userService.createUser(user);
    }

    public sendMessage(message: Message, senderEmail: string, receiverEmail: string) {
        this.users.forEach((user: User) => {
            if (user.email === senderEmail) {
                user.messages.push(message);
            }
        });
        this.messagingService.sendMessage(message, senderEmail, receiverEmail);
    }

    public addImage(image: Image, userEmail: string) {
        this.users.forEach((user: User) => {
            if (user.email === userEmail) {
                user.images.push(image);
            }
        });
        this.imageService.addImageList(image, userEmail);
    }

    public addProposal(proposal: Proposal, userEmail: string, receiverEmail: string) {
        this.users.forEach((user: User) => {
            if (user.email === userEmail) {
                user.proposals.push(proposal);
            }
        });
        this.proposalService.sendProposal(proposal, userEmail, receiverEmail);
    }

    async fetchAll() {
        this.userService.getUsers().subscribe((usersData: User[]) => {
            this.users = usersData;
        });
    }
}
