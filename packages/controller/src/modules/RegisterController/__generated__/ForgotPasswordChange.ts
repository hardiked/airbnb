

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChange
// ====================================================

export interface ForgotPasswordChange_forgotPasswordChange {
  path: string;
  message: string;
}

export interface ForgotPasswordChange {
  forgotPasswordChange: ForgotPasswordChange_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeVariables {
  newPassword: string;
  key: string;
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