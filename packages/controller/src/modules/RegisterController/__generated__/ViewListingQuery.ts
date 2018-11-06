

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewListingQuery
// ====================================================

export interface ViewListingQuery_viewListing_owner {
  id: string;
  email: string;
}

export interface ViewListingQuery_viewListing {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  longitude: number;
  latitude: number;
  amenities: string[];
  pictureUrl: string;
  owner: ViewListingQuery_viewListing_owner;
}

export interface ViewListingQuery {
  viewListing: ViewListingQuery_viewListing | null;
}

export interface ViewListingQueryVariables {
  id: string;
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