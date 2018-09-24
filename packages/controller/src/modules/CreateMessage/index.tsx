import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";
import {
  CreateaMessageMutation,
  CreateaMessageMutationVariables
} from "../RegisterController/__generated__/CreateaMessageMutation";

export const createaMessageMutation = gql`
  mutation CreateaMessageMutation($messsge: MessageInput!){
    createMessage(message:$messsge)
  }
`;

export interface WithCreateMessages {
  createMessage: MutationFn<CreateaMessageMutation,CreateaMessageMutationVariables>;
}

interface Props {
  children: (data: WithCreateMessages) => JSX.Element | null;
}

export class CreateMessages extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<CreateaMessageMutation, CreateaMessageMutationVariables>
        mutation={createaMessageMutation} 
      >
        {(mutate) => {
          return children({
            createMessage:mutate
          });
        }}
      </Mutation>
    );
  }
}