

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessageSubscription
// ====================================================

export interface NewMessageSubscription_newMessage_user {
  id: string;
  email: string;
}

export interface NewMessageSubscription_newMessage {
  text: string;
  user: NewMessageSubscription_newMessage_user;
  listingId: string;
}

export interface NewMessageSubscription {
  newMessage: NewMessageSubscription_newMessage;
}

export interface NewMessageSubscriptionVariables {
  listingId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// 
export interface MessageInput {
  text: string;
  listingId: string;
}

// 
export interface UpdateListingInput {
  name?: string | null;
  picture?: any | null;
  pictureUrl?: string | null;
  category?: string | null;
  description?: string | null;
  price?: number | null;
  beds?: number | null;
  guests?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  amenities?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================