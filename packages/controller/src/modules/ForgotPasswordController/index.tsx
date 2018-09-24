import gql from 'graphql-tag';
import {graphql,ChildMutateProps} from 'react-apollo';
import * as React from 'react';
import {SendForgotPasswordEmailMutation,SendForgotPasswordEmailMutationVariables} from '../RegisterController/__generated__/SendForgotPasswordEmailMutation';

interface Props{
	children: (data: {submit: (values:SendForgotPasswordEmailMutationVariables)=>Promise<null>}) => JSX.Element | null
}

class C extends React.PureComponent<ChildMutateProps<Props,SendForgotPasswordEmailMutation,SendForgotPasswordEmailMutationVariables>>{
	
	submit = async(values:SendForgotPasswordEmailMutationVariables)=>{
		console.log(values);
		const response=await this.props.mutate({
			variables: values
		})
		console.log(response);
		return null;
	}

	render(){
		return this.props.children({submit:this.submit});
	}
}

const forgotPasswordMutation=gql`
	mutation SendForgotPasswordEmailMutation($email:String!){
		sendForgotPasswordEmail(email: $email)
	}
`

export const ForgotPasswordController=graphql<Props,SendForgotPasswordEmailMutation,SendForgotPasswordEmailMutationVariables>(forgotPasswordMutation)(C);