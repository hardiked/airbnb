// @ts-ignore
import * as React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import {ViewListingQuery,ViewListingQuery_viewListing,ViewListingQueryVariables} from '../RegisterController/__generated__/ViewListingQuery';

const viewListingQuery=gql`
	query ViewListingQuery($id: String!){
		viewListing(id:$id){
			id
			name
			category
			description
			price
			beds
			guests
			longitude
			latitude
			amenities
			pictureUrl
			owner{
				id
				email
			}
		}
	}
`;

export interface WithViewListing{
	listing: ViewListingQuery_viewListing | null;
	loading: boolean;
}

export const viewListingController=graphql<
	any,
	ViewListingQuery,
	ViewListingQueryVariables,
	WithViewListing
>(viewListingQuery,{
	props:({data})=>{
		let listing:ViewListingQuery_viewListing | null = null;
		if(data && !data.loading && data.viewListing){
			console.log(data);
			listing=data.viewListing;
		}
		return {
			listing,
			loading: data ? data.loading : false
		}
	},
	options: (props)=>({variables:{id:props.listingId}})
});