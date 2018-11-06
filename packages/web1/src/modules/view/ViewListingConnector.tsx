import * as React from 'react';
import {RouteComponentProps,Link} from 'react-router-dom';

import {ViewWrapper} from './ViewWrapper';

export class ViewListingConnector extends React.PureComponent<RouteComponentProps<{
	listingId:string
}>>{
	render(){
		const {match:{params:{listingId}}}=this.props;
		return(
			<ViewWrapper listingId={listingId}>
				{(data:any)=>{
					if(data.loading){
						return <div>Loading...</div>
					}
					return (
						<div>
							<div>{data.listing.name}</div>
							<div>
								<Link to={`/listing/chat/${listingId}`}>Chat</Link>
							</div>
							<div>
								<Link to={`/listing/edit/${listingId}`}>Edit</Link>
							</div>
						</div>
					)
				}}
			</ViewWrapper>
		);
	}
}