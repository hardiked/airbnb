import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {AuthRoute} from '@airbnb/controller';

import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { ForgotPasswordConnector } from "../modules/forgotPassword/ForgotPasswordConnector";
import { ChangePasswordConnector } from "../modules/changePassword/ChangePasswordConnector";
import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
import { EditListingConnector } from "../modules/listing/edit/EditListingConnector";
import { MessageConnector } from "../modules/listing/messages/MessageConnector";
import { FindListingsConnector } from "../modules/listing/find/FindListingsConnector";
import { ViewListingConnector } from "../modules/view/ViewListingConnector";
import { Logout } from "../modules/logout";
import { TextPage } from "../modules/TextPage/index";
import {TestSub} from '../modules/TestSub';

export const Routes = () => (
  	<BrowserRouter>
    	<Switch>
      		<Route exact={true} path="/register" component={RegisterConnector} />
      		<Route exact={true} path="/login" component={LoginConnector} />
      		<Route exact={true} path="/forgot-password" component={ForgotPasswordConnector} />
      		<Route exact={true} path="/change-password/:key" component={ChangePasswordConnector} />
      		<AuthRoute exact={true} path="/create-list" component={CreateListingConnector} />
          <Route path="/m/" component={TextPage} />
          <Route path="/testing/" component={TestSub} />
          <Route path="/logout/" component={Logout} />
          <Route exact={true} path="/listing/:listingId" component={ViewListingConnector} />
          <Route path="/listing/chat/:listingId" component={MessageConnector} />
          <Route path="/listing/edit/:listingId" component={EditListingConnector} />
      		<Route path="/listings/" component={FindListingsConnector} />
    	</Switch>
  	</BrowserRouter>
);