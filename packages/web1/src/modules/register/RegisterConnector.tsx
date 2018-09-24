import {RegisterController} from '@airbnb/controller';
import * as React from "react";
import {RouteComponentProps} from 'react-router-dom';

import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class RegisterConnector extends React.PureComponent<RouteComponentProps<{}>> {

	onFinish=()=>{
		this.props.history.push('/m/confirm-email',{message:"Please check your mail box to confirm account!"});
	}

  	public render() {
    	return (
            <RegisterController>
                {({submit})=><RegisterView onFinish={this.onFinish} submit={submit} />}
      	    </RegisterController> 
        );
    }
}