import * as React from 'react';
import gql from 'graphql-tag';
import {Subscription} from 'react-apollo';

const SUB=gql`
subscription{
  newMessage(listingId:"2c43d41b-32cc-434e-a970-ded9be7e23b2"){
  	listingId
    text
    user{
      id
      email
    }
  }
}	
`;

export class TestSub extends React.PureComponent{
	render(){
		return(
			<Subscription subscription={SUB}>
				{(data)=>{
					console.log(data);
					return null;
				}}
			</Subscription>
		);
	}
}