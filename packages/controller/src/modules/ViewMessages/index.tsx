import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  ViewMessagesQuery_messages,
  ViewMessagesQueryVariables,
  ViewMessagesQuery
} from "../RegisterController/__generated__/ViewMessagesQuery";

export const viewMessagesQuery = gql`
  query ViewMessagesQuery($listingId: String!) {
    messages(listingId: $listingId) {
      text
      user {
        id
        email
      }
      listingId
    }
  }
`;

export const newMessageSubscription=gql`
subscription NewMessageSubscription($listingId: String!){
  newMessage(listingId: $listingId){
    text
    user{
      id
      email
    }
    listingId
  }
}
`;

export interface WithViewMessages {
  messages: ViewMessagesQuery_messages[];
  loading: boolean;
  subscribe: ()=>()=>void;
}

interface Props {
  listingId: string;
  children: (data: WithViewMessages) => JSX.Element | undefined;
}

export class ViewMessages extends React.PureComponent<Props> {
    render() {
        const { children, listingId } = this.props;
        return (
            <Query<ViewMessagesQuery, ViewMessagesQueryVariables>
                query={viewMessagesQuery}
                variables={{ listingId }}
            >
                {({ data, loading, subscribeToMore }) => {
                    let messages: ViewMessagesQuery_messages[] = [];

                    if (data && data.messages) {
                        messages = data.messages;
                    }
                    return children({
                        messages,
                        loading,
                        subscribe: ()=>subscribeToMore({
                            document: newMessageSubscription,
                            variables: {listingId},
                            updateQuery: (prev,{subscriptionData})=>{
                                if(!subscriptionData.data){
                                    return prev;
                                }
                                return{
                                    ...prev,
                                    messages:[
                                        ...prev.messages,
                                        (subscriptionData.data as any).newMessage
                                    ]
                                }
                            }
                        })
                    });
                }}
            </Query>
        );
    }
}