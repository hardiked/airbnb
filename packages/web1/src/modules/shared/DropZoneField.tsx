import {FieldProps} from 'formik';
import * as React from 'react';
import Dropzone from 'react-dropzone';

export const DropzoneField:React.SFC<FieldProps<any>>=({
	field: {name}, // {name,value,onChange,onBlur}
	form: {setFieldValue}, // with values,setXXXX,handleXXX,dirty,isValid etc
	...props
})=> {
	return(
		<Dropzone
			accept="image/jpeg, image/png"
			multiple={false} 
			onDrop={([file])=>{
				setFieldValue(name,file);
			}}
			{...props}
		>
				<p>Try dropping file here or click to browse...</p>
		</Dropzone>
	);
}