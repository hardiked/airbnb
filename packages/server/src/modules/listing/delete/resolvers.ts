import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
	Mutation:{
		deleteListing: async (_, {id}, {session}) => {
			// console.log(session.userId);
			// if(!session.userId){
			// 	throw new Error("Not authenticated!");
			// }

			const listing=await Listing.findOne({where:{id}});
			
			if(!listing){
				throw new Error("Does not exist!");
			}

			if(session.userId!==listing.userId){
				throw new Error("Not authorized!");
			}

			await Listing.remove(listing);
			return true;
		}
	}
};