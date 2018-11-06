import * as React from 'react';
import { Field } from "formik";

import {InputField} from '../../../shared/InputField';
import {TagField} from '../../../shared/TagField';

export const Page3=()=>(
	<React.Fragment>
		<Field 
			label="Latitude"
	        name="latitude"
	        placeholder="Latitude"
	        useNumberComponent={true}
	        component={InputField} />

	    <Field 
	    	label="Longitude"
	        name="longitude"
	        useNumberComponent={true}
	        placeholder="Longitude"
	        component={InputField} />

	    <Field 
	    	label="Amenities"
	        name="amenities"
	        placeholder="Amenities"
	        component={TagField} />
	</React.Fragment>
);