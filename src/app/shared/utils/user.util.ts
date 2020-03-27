import { MessageCount } from '../interface/interface';

export const GET_USERS = (email: string, message: any[], index: number, messageCount: MessageCount): MessageCount => {
    if (message.length > 0) {
        messageCount[index] = message.length;
        messageCount.userName = email;
        console.log('thismessagecout', this.messageCount);
    } else {
        messageCount[index] = 0;
        console.log('thismessagecout', this.messageCount);
    }
    return messageCount;
};