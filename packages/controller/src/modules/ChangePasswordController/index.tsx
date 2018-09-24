import gql from 'graphql-tag';
import {graphql,ChildMutateProps} from 'react-apollo';
import * as React from 'react';
import {ForgotPasswordChange,ForgotPasswordChangeVariables} from '../RegisterController/__generated__/ForgotPasswordChange';
import {normalizeErrors} from '../../utils/NoramlizeErrors';

interface Props{
	children: (data: {submit: (values:ForgotPasswordChangeVariables)=>Promise<any>}) => JSX.Element | null
}

class C extends React.PureComponent<ChildMutateProps<Props,ForgotPasswordChange,ForgotPasswordChangeVariables>>{
	
	submit = async(values:ForgotPasswordChangeVariables)=>{
		console.log(values);
		const {data:{forgotPasswordChange}}=await this.props.mutate({
			variables: values
		})
		console.log(forgotPasswordChange);
		if(forgotPasswordChange){
			return normalizeErrors(forgotPasswordChange);
		}
		return null;
	}

	render(){
		return this.props.children({submit:this.submit});
	}
}

const forgotPasswordChangeMutation=gql`
	mutation ForgotPasswordChange($newPassword: String!, $key: String!){
		forgotPasswordChange(newPassword: $newPassword, key: $key){
			path
			message
		}
	}
`

export const ChangePasswordController=graphql<Props,ForgotPasswordChange,ForgotPasswordChangeVariables>(forgotPasswordChangeMutation)(C);