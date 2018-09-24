import {Form as AntForm,Icon,Button} from "antd";
import { Field ,Form, FormikErrors, FormikProps, withFormik } from "formik";
import * as React from "react";
import {Link} from 'react-router-dom';
import * as yup from "yup";

import {InputField} from '../../shared/InputField';

// const {Button,Form:AntForm,Icon}=Antd;
const FormItem = AntForm.Item;

interface IFormValues {
  email: string;
  password: string;
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

                    <Field 
                        type="password"
                        name="password"
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        placeholder="Password"
                        component={InputField} />
                    <FormItem>
                        <Link to="/forgot-password">
                            Forgot password
                        </Link>
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Register
                        </Button>
                    </FormItem>
                    <FormItem>
                        Or <Link to="/login">Login</Link>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const registerPasswordValidation=yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required()

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, emailNotLongEnough)
        .max(255)
        .email(invalidEmail)
        .required(),
    password: registerPasswordValidation
});

export const RegisterView = withFormik<IProps, IFormValues>({
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
        else{
            props.onFinish();
        }
    },
    mapPropsToValues: () => ({ email: "", password: "" }),
    validationSchema
})(C);