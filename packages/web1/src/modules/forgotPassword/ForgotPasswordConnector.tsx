import * as React from "react";
import {ForgotPasswordController} from '@airbnb/controller';
import {RouteComponentProps} from 'react-router-dom';

import { ForgotPasswordView } from "./ui/ForgotPasswordView"; 

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class ForgotPasswordConnector extends React.PureComponent<RouteComponentProps<{}>> {

	onFinish=()=>{
		this.props.history.push('/m/reset-password',{message:"Follow the instructions in mail!"});
	}

  	public render() {
    	return (
    		<ForgotPasswordController>
    			{({submit})=><ForgotPasswordView onFinish={this.onFinish} submit={submit} />}
    		</ForgotPasswordController>
        );
    }
}