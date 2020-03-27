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
}

export interface FriendMessaging {
    messages: Message[];
}

export interface ImageList {
    images: Image[];
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
    sender?: string;
    recipient?: string;
}

export interface Message {
    date?: string;
    email?: string;
    sender?: string;
    senderPhotoUrl?: string;
    receiverPhotoURL?: string;
    receiver?: string;
    message?: string[];
    lat?: number;
    lgn?: number;
    count?: number;
}

export interface Image {
    photoName?: string;
}
