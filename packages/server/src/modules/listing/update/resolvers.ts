import * as shortid from 'shortid';
import {createWriteStream} from 'fs';
import { getConnection } from "typeorm";

import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

const storeUpload = async (stream :any, mimetype: string): Promise<any> => {
	const extension = mimetype.split("/")[1];
  	const id = `${shortid.generate()}.${extension}`;
  	const path = `images/${id}`

  	return new Promise((resolve, reject) =>
	    stream
	      .pipe(createWriteStream(path))
	      .on('finish', () => resolve({ id, path }))
	      .on('error', reject),
	)
}

const processUpload = async (upload:any) => {
  const { stream, mimetype } = await upload
  const { id } = await storeUpload( stream, mimetype );
  return id;
}


export const resolvers: ResolverMap = {
	Mutation:{
		updateListing: async (_, {listingId,input: {picture, ...data}},{redis}) => {
			// console.log(session.userId);
			// if(!session.userId){
			// 	throw new Error("Not authenticated!");
			// }
			// const pictureUrl=picture ? await processUpload(picture) : null;
			if(picture){
				data.pictureUrl=await processUpload(picture);
			}
			// await Listing.update({
			// 	id: listingId
			// },{
			// 	...data
			// });


			const {raw:[newListing]}=await getConnection()
	        .createQueryBuilder()
	        .update(Listing)
	        .set(data)
	        .where("id = :id", { id: listingId })
	        .returning("*")
	        .execute();
	        const listings = await redis.lrange("ListingCache", 0, -1);
	     	const idx = listings.findIndex(
	        	(x: string) => JSON.parse(x).id === listingId
	      	);
	        await redis.lset("ListingCache",idx,JSON.stringify(newListing));
			return true;
		}
	}
};