import * as React from 'react';
import {viewListingController,WithViewListing} from '@airbnb/controller';

interface Props{
	children:(data:WithViewListing)=>JSX.Element | null;
}

export class C extends React.PureComponent<Props & WithViewListing>{
	render(){
			const {children,loading,listing}=this.props;
			return children({loading,listing});
	}
}

export const ViewWrapper=viewListingController(C as any);