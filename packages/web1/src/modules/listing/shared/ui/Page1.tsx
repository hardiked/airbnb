import * as React from 'react';
import { Field } from "formik";

import {InputField} from '../../../shared/InputField';
import {DropzoneField} from '../../../shared/DropZoneField';
// import {LocationField} from '../../../shared/LocationField';

export const Page1=()=>(
	<React.Fragment>
		<Field 
			label="Name"
            name="name"
            placeholder="Name"
            component={InputField} />

        <Field 
        	label="Category"
            name="category"
            placeholder="Category"
            component={InputField} />

        <Field 
        	label="Description"
            name="description"
            placeholder="Description"
            component={InputField} />

        <Field 
            name="picture"
            component={DropzoneField} />
	</React.Fragment>
);