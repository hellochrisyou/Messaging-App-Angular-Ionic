import { Message } from '../../shared/models';

export const REMOVE_ME_FROM_PLAYERS = (email: string, players: any[]): any[] => {
    players.forEach((item, index) => {
        if (email === players[index].payload.doc.data().email) {
            players.splice(index, 1);
        }

    });
    return players;
};

export const REMOVE_EMPTY_MESSAGES = (players: any[]): any[] => {
    players.forEach((item, index) => {
        if (players[index].payload.doc.data().length === undefined) {
            players.splice(index, 1);
        }
    });
    return players;
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
