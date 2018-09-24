import * as React from 'react';
import {Formik,Form,Field} from 'formik';
import {CreateMessages} from '@airbnb/controller';

import {InputField} from '../../shared/InputField';

interface FormValues{
	text: string;
}

interface Props {
	listingId: string;
}

export class InputBar extends React.PureComponent<Props>{
	render(){
		const {listingId}=this.props;
		return(
			<CreateMessages>
				{({createMessage})=>(
					<Formik<{},FormValues> initialValues={{text:''}} onSubmit={async ({text},{resetForm})=>{
						await createMessage({
							variables:{
								messsge:{
									text,
									listingId
								}
							}
						});
						resetForm();
					}}>
						{()=><Form>
							<Field name="text" component={InputField} />
							<button type="submit">Send Message</button>	
						</Form>}
					</Formik>
				)}
			</CreateMessages>
		);
	}
}