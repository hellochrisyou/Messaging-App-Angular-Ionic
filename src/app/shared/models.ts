export interface User {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    title?: string;
}

export interface FriendMessaging {
    messages: Message[];
}

export interface Message {
    date?: string;
    email?: string;
    sender?: string;
    senderPhotoUrl?: string;
    receiverPhotoURL?: string;
    receiver?: string;
    message?: string[];
    latitude?: number;
    longitude?: number;
}


export interface CoordinatePoints {
    latitude?: number;
    longitude?: number;
}