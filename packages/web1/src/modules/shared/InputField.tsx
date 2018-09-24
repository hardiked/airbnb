import {Form,Input,InputNumber} from 'antd';
import {FieldProps} from 'formik';
import * as React from 'react';

const FormItem=Form.Item;

export const InputField:React.SFC<FieldProps<any> & {prefix: React.ReactNode, label?:string, useNumberComponent?:boolean}>=({
	field: {onChange, ...field}, // {name,value,onChange,onBlur}
	form: {touched, errors, setFieldValue}, // with values,setXXXX,handleXXX,dirty,isValid etc
	label,
	useNumberComponent=false,
	...props
})=> {
	const errorMsg=touched[field.name] && errors[field.name];

	const Comp=useNumberComponent?InputNumber:Input;

	return(
		<FormItem
			label={label}
		    help={errorMsg}
		    validateStatus={errorMsg ? "error" : undefined}
		>
		    <Comp
			    {...field}
			    {...props}
			    onChange={useNumberComponent?(newValue:any)=>setFieldValue(field.name, newValue):onChange}
		    />
		</FormItem>
	);
}