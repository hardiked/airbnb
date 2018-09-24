import * as React from 'react';
import {RouteComponentProps,Link} from 'react-router-dom';
import {Form as AntForm,Button} from "antd";
import { Form, Formik,FormikActions } from "formik";
import {createListingController,NewPropsCreateListing} from '@airbnb/controller';
// import ImageFile from "react-dropzone";

import {Page1} from './ui/Page1';
import {Page2} from './ui/Page2';
import {Page3} from './ui/Page3';

const FormItem = AntForm.Item;

interface FormValues{
	picture:  null;
	name: string;
	category: string;
	description: string;
	price: number;
	beds: number;
	guests: number;
	latitude: number;
	longitude: number;
	amenities: string[];
}

const pages=[<Page1 />, <Page2 />, <Page3 />];

class C extends React.PureComponent<RouteComponentProps<{}> & NewPropsCreateListing>{

	state={
		page: 0
	};

	submit=async(values:FormValues, {setSubmitting}:FormikActions<FormValues>)=>{
		await this.props.createListing(values);
		setSubmitting(false);
	};

	nextPage=()=>{
		this.setState({
			...this.state,
			page: this.state.page+1
		})
	}

	render(){
		return (
			<Formik<{}, FormValues> initialValues={{
				picture: null,
				name: "",
				category: "",
				description: "",
				price: 0,
				beds: 0,
				guests: 0,
				latitude: 0,
				longitude: 0,
				amenities: []
			}} onSubmit={this.submit}>
			{
				({isSubmitting,values}) => (
						<div>
							<Form style={{ display: "flex" }}>
							<Link to="/logout">Logout</Link>
				                <div style={{ width: 400, margin: "auto" }}>
									{pages[this.state.page]}
				                    <FormItem>
				                    	<div style={{
				                    		display: 'flex',
				                    		justifyContent: 'flex-end'
				                    	}}>
					                    	{this.state.page===pages.length-1 ? 
					                    		<div>
							                        <Button
							                        	disabled={isSubmitting}
							                            type="primary"
							                            htmlType="submit"
							                        >
							                            Create Listing
							                        </Button>
							                    </div> :
						                        <Button
						                        	onClick={this.nextPage}
						                            type="primary"
						                        >
						                            Next Page
						                        </Button>
						                    }
					                    </div>
				                    </FormItem>
				                </div>
				            </Form>
						</div>
					)
			}
			</Formik>
		);
	}
}

export const CreateListingConnector=createListingController(C);