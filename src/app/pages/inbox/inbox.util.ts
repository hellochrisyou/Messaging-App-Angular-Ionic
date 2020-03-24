import { Message } from '../../shared/models';

export const ORDER_MESSAGES = (messages: any[]): any[] => {
    const returnMessageArr = messages.sort((n1: any, n2: any) => +new Date(n1.messages[0].date) - +new Date(n2.messages[0].date));
    console.log('returnMessageArr', returnMessageArr);
    return returnMessageArr;
};

export const GET_DATE = (): string => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
};

export const FILTER_MESSAGES = (email: string, messages: Message[]): Message[] => {
    const returnMessages = [];
    messages.forEach((item, index) => {
        if (item.receiver === email || item.sender === email) {
            returnMessages.push(messages.splice(index, 1));
        }
    });
    return returnMessages;
};
