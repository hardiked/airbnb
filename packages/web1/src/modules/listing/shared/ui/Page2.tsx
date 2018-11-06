import * as React from 'react';
import { Field } from "formik";

import {InputField} from '../../../shared/InputField';

export const Page2=()=>(
	<React.Fragment>
		<Field 
            useNumberComponent={true}
            label="Price"
            name="price"
            placeholder="Price"
            component={InputField} />

        <Field 
            useNumberComponent={true}
            label="Beds"
            name="beds"
            placeholder="Beds"
            component={InputField} />

        <Field 
            useNumberComponent={true}
            label="Guests"
            name="guests"
            placeholder="Guests"
            component={InputField} />
	</React.Fragment>
);