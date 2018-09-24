import {FieldProps} from 'formik';
import * as React from 'react';
import Geosuggest,{Suggest} from 'react-geosuggest';

export class LocationField extends React.PureComponent<FieldProps<any> & {}>{

	onSuggestSelect=(place:Suggest)=>{
		console.log(place);
		const {location:{lat,lng}}=place;
		const {form:{setValues,values}}=this.props;
		setValues({
			...values,
			latitude:lat,
			longitude:lng
		})
	}

	render(){
		const{
			form:{values}
		}=this.props;
		return (
			<div>
				<Geosuggest 
					placeholder="Start Typing"
					initialValue="Hamburg"
					onSuggestSelect={this.onSuggestSelect}
					location={new google.maps.LatLng(53.558572,9.9278215)}
					radius={20}
				/>
				<div>{values.longitude}</div>
				<div>{values.latitude}</div>
			</div>
		);
	}
};