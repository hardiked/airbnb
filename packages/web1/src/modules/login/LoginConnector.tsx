import * as React from "react";
import {LoginController} from '@airbnb/controller';
import {RouteComponentProps} from 'react-router-dom';

import { LoginView } from "./ui/LoginView";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class LoginConnector extends React.PureComponent<RouteComponentProps<{}>> {

	onFinish=()=>{
        console.log(this.props.location);
        const {history,location:{state}}=this.props;
        if(state && state.next){
            console.log("coming");
            return history.push(state.next);
        }  
        history.push('/');
    }

    public render() {
        console.log(this.props.location);
        return (
    		<LoginController>
            	{({submit})=><LoginView onFinish={this.onFinish} submit={submit} />}
            </LoginController>
        );
    }
}