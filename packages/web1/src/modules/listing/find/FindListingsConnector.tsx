import * as React from 'react';
import {Card} from 'antd';
import {findListingsController,withFindListings} from '@airbnb/controller';
import {Link} from 'react-router-dom';

const {Meta}=Card;

class C extends React.PureComponent<withFindListings>{
	render(){
		const {listings,loading}=this.props;
		return (
			<div>
				{loading && <div>Loading...</div>}
				{listings.map(l=>(
				<Card
					key={`${l.id}-card`}
					hoverable={true}
					style={{width:240}}
					cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
				>
				<Link to={`/listing/${l.id}`}>
					<Meta 
						title={l.name}
						description={l.owner.email}
					/>
				</Link>					
				</Card>))}
			</div>
		);
	}
}

export const FindListingsConnector=findListingsController(C);