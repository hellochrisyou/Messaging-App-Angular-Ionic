import { Message } from '../../shared/interface/models';

export const ORDER_MESSAGES = (messages: any[]): any[] => {
    const returnMessageArr = messages.sort((n1: any, n2: any) => +new Date(n1.messages.date) - +new Date(n2.messages.date));
    return returnMessageArr;
};

export const GET_DATE = (): string => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
};

// export const FILTER_MESSAGES = (email: string, messages: Message[]): Message[] => {
//     const returnMessages = [];
//     messages.forEach((item, index) => {
//         if (item.receiver === email || item.sender === email) {
//             returnMessages.push(messages.splice(index, 1));
//         }
//     });
//     return returnMessages;
// };

export const GET_TODAY_DATE = (): string => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return (yyyy + '-' + mm + '-' + dd);
};
