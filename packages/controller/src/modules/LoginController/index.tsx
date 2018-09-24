import gql from 'graphql-tag';
import {graphql,ChildMutateProps,withApollo,WithApolloClient} from 'react-apollo';
import * as React from 'react';
import {Login,LoginVariables} from '../RegisterController/__generated__/Login';
import {normalizeErrors} from '../../utils/NoramlizeErrors';

interface Props{
	children: (data: {submit: (values:LoginVariables)=>Promise<any>}) => JSX.Element | null
}

class C extends React.PureComponent<ChildMutateProps<WithApolloClient<Props>,Login,LoginVariables>>{
	
	submit = async(values:LoginVariables)=>{
		console.log(values);
		const {data:{login}}=await this.props.mutate({
			variables: values
		})
		console.log(login);
		if(login){
			console.log(login);
			return normalizeErrors(login);
		}
		await this.props.client.resetStore();
		return null;
	}

	render(){
		return this.props.children({submit:this.submit});
	}
}

const loginMutation=gql`
	mutation Login($email:String!,$password:String!){
  		login(email:$email,password:$password){
    		path
    		message
  		}	
	}
`

export const LoginController=graphql<Props,Login,LoginVariables>(loginMutation)(withApollo<Props>(C as any));