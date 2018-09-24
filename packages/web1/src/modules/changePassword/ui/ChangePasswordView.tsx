import {Form as AntForm,Icon,Button} from "antd";
import { Field ,Form, FormikErrors, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import * as React from "react";

import {InputField} from '../../shared/InputField';

// const {Button,Form:AntForm,Icon}=Antd;
const FormItem = AntForm.Item;

interface IFormValues {
    newPassword: string;
}

interface IProps {
    onFinish: ()=>void;
    token: string;
    submit: (values: any) => Promise<FormikErrors<IFormValues> | null>;
}

class C extends React.PureComponent<FormikProps<IFormValues> & IProps> {
    public render() {

        return (
            <Form style={{ display: "flex" }}>
                <div style={{ width: 400, margin: "auto" }}>
                    <Field 
                        type="password"
                        name="newPassword"
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        placeholder="New Password"
                        component={InputField} />

                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Change Password
                        </Button>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

const passwordNotLongEnough = "password must be at least 3 characters";

const PasswordValidation=yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required()

const validationSchema = yup.object().shape({
    newPassword: PasswordValidation
});

export const ChangePasswordView = withFormik<IProps, IFormValues>({
    handleSubmit: async ({newPassword}, { props, setErrors }) => {
        const errors = await props.submit({newPassword,key:props.token});
        if (errors) {
            setErrors(errors);
        }
        else{
            props.onFinish();
        }
    },
    mapPropsToValues: () => ({ newPassword: "" }),
    validationSchema
})(C);