import { MessagingService } from '../messaging.service';
import { Injectable } from '@angular/core';
import { Message, MessageList } from '../../../shared/interface/models';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ORDER_MESSAGES } from '../../../pages/inbox/inbox.util';
@Injectable({ providedIn: 'root' })
export class MessagingStateService {

    private readonly _messages = new BehaviorSubject<MessageList>([]);

    set messages(val: MessageList) {
        this._messages.next(val);
    }

    readonly messages$ = this._messages.asObservable();

    constructor(private messagingService: MessagingService) { }

    public setMessageUser(thisEmail: string, userEmail: string) {
        this.messagingService.getUserMessages(thisEmail, userEmail).subscribe((messagesData: any[]) => {
            this.messages = ORDER_MESSAGES(messagesData);
        });
    }
}
