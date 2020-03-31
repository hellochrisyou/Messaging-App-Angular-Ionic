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
    images?: Image[];
    messages?: Message[];
    proposals?: Proposal[];
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
    date?: string;
    email?: string;
    message?: string[];
    lat?: number;
    lgn?: number;
    count?: number;
}

export interface Image {
    photoName?: string;
}
