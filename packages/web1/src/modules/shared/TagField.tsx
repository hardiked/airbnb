import {Form,Select} from 'antd';
import {FieldProps} from 'formik';
import * as React from 'react';

const FormItem=Form.Item;

export const TagField:React.SFC<FieldProps<any> & {prefix: React.ReactNode, label?:string}>=({
	field: {onChange, onBlur: _, ...field}, // {name,value,onChange,onBlur}
	form: {touched, errors, setFieldValue}, // with values,setXXXX,handleXXX,dirty,isValid etc
	label,
	...props
})=> {
	const errorMsg=touched[field.name] && errors[field.name];

	return(
		<FormItem
			label={label}
		    help={errorMsg}
		    validateStatus={errorMsg ? "error" : undefined}
		>

	    <Select 
	    	{...field}
	    	{...props}
	    	mode="tags"
	    	style={{width:"100%"}}
	    	onChange={(newValue:any)=>setFieldValue(field.name, newValue)}
	    />
		</FormItem>
	);
}