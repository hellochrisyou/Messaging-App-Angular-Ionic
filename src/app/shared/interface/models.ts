export interface User {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    title?: string;
    age?: number;
    religion?: string;
    haveKids?: string;
    hobbies?: string;
    description?: string;
    images?: string[];
    messageCount?: number;
    proposalCount?: number;
}

export interface Proposal {
    select?: string;
    reject?: string;
    street?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    proposalDate?: Date;
    status?: string;
}

export interface Message {
    email?: string;
    date?: string;
    sender?: string;
    receiver?: string;
    message?: string[];
    photoURL?: string;
    lat?: number;
    lgn?: number;
    count?: number;
}

export interface MessageList {
    messages?: Message;
}

export interface Image {
    photoName?: string;
}
