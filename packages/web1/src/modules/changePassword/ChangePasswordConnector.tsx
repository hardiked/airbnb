import * as React from "react";
import {RouteComponentProps} from 'react-router-dom';
import {ChangePasswordController} from '@airbnb/controller';

import { ChangePasswordView } from "./ui/ChangePasswordView"; 

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class ChangePasswordConnector extends React.PureComponent<RouteComponentProps<{
	key: string;
}>> {

	submit=async(values:any)=>{
		console.log(values);
		return null;
	}

	onFinish=()=>{
		this.props.history.push("/login");
	}

  	public render() {
  		const {match:{params:{key}}}=this.props;
  		console.log(key);
    	return (
    		<ChangePasswordController>
                {({submit})=><ChangePasswordView onFinish={this.onFinish} token={key} submit={submit} />}
    		</ChangePasswordController>
        );
    }
}