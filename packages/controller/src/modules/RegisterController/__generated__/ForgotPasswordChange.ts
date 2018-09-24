

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

//==============================================================
// END Enums and Input Objects
//==============================================================