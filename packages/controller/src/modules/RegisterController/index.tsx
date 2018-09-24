import gql from 'graphql-tag';
import {graphql,ChildMutateProps} from 'react-apollo';
import * as React from 'react';
import {RegisterMutation,RegisterMutationVariables} from './__generated__/RegisterMutation';
import {normalizeErrors} from '../../utils/NoramlizeErrors';

interface Props{
	children: (data: {submit: (values:RegisterMutationVariables)=>Promise<any>}) => JSX.Element | null
}

class C extends React.PureComponent<ChildMutateProps<Props,RegisterMutation,RegisterMutationVariables>>{
	
	submit = async(values:RegisterMutationVariables)=>{
		console.log(values);
		const {data:{register}}=await this.props.mutate({
			variables: values
		})
		console.log(register);
		if(register){
			return normalizeErrors(register);
		}
		return null;
	}

	render(){
		return this.props.children({submit:this.submit});
	}
}

const registerMutation=gql`
	mutation RegisterMutation($email: String!, $password: String!){
		register(email: $email, password: $password){
			path
			message
		}
	}
`

export const RegisterController=graphql<Props,RegisterMutation,RegisterMutationVariables>(registerMutation)(C);