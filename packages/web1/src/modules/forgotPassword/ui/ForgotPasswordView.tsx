import {Form as AntForm,Icon,Button} from "antd";
import { Field ,Form, FormikErrors, FormikProps, withFormik } from "formik";
import * as React from "react";

import {InputField} from '../../shared/InputField';

// const {Button,Form:AntForm,Icon}=Antd;
const FormItem = AntForm.Item;

interface IFormValues {
  email: string;
}

interface IProps {
    onFinish: ()=>void;
    submit: (values: IFormValues) => Promise<FormikErrors<IFormValues> | null>;
}

class C extends React.PureComponent<FormikProps<IFormValues> & IProps> {
    public render() {

        return (
            <Form style={{ display: "flex" }}>
                <div style={{ width: 400, margin: "auto" }}>
                    <Field 
                        name="email"
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        placeholder="Email"
                        component={InputField} />

                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Reset Password
                        </Button>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const ForgotPasswordView = withFormik<IProps, IFormValues>({
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
        else{
            props.onFinish();
        }
    },
    mapPropsToValues: () => ({ email: "" })
})(C);