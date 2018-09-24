// @ts-ignore
import * as React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import {FindListingsQuery_findListings,FindListingsQuery} from '../RegisterController/__generated__/FindListingsQuery';

const findListingsQuery=gql`
	query FindListingsQuery{
		findListings{
			id
			name
			pictureUrl
			owner{
				id
				email
			}
		}
	}
`;

export interface withFindListings{
	listings: FindListingsQuery_findListings[];
	loading: boolean;
}

export const findListingsController=graphql<
	any,
	FindListingsQuery,
	{},
	withFindListings
>(findListingsQuery,{
	props:({data})=>{
		let listings:FindListingsQuery_findListings[]=[];
		if(data && !data.loading && data.findListings){
			console.log(data);
			listings=data.findListings;
		}
		return {
			listings,
			loading: data ? data.loading : false
		}
	}
});