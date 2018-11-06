import {FieldProps} from 'formik';
import * as React from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'antd';

export const DropzoneField:React.SFC<FieldProps<any>>=({
	field: {name,value}, // {name,value,onChange,onBlur}
	form: {setFieldValue,values,setValues}, // with values,setXXXX,handleXXX,dirty,isValid etc
	...props
})=> {
	const pUrl=(value ? value.preview: null) || values.pictureUrl;
	return(
		<div>
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
			{pUrl && <img src={pUrl} style={{maxHeight:200}} />}
			<Button onClick={()=>setValues({
				...values,
				pictureUrl: null,
				picture:null
			})}>Remove</Button>
		</div>
	);
}