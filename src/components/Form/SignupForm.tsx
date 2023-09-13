/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FieldHookConfig, Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { ClassAttributes, InputHTMLAttributes } from "react";

import iconError from "../../static/images/icon-error.svg";
import TryButton from "./TryButton";

type StyledTextInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>;

function StyledTextInput({ ...props }: StyledTextInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="relative basis-1/2">
      <input
        className={`text-input w-full rounded-lg border ${
          meta.touched && meta.error
            ? "border-userRed text-userRed"
            : "border-userGrayishBlue"
        } px-5 py-4 focus:outline-userBlue`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div>
          <div className="error mt-1 text-right text-xs font-medium text-userRed">
            {meta.error}
          </div>
          <img
            src={iconError}
            alt="Error icon"
            className="absolute bottom-1/2 right-2 -mb-[2px] h-[25px] w-[25px]"
          />
        </div>
      ) : null}
    </div>
  );
}

function SignupForm() {
  return (
    <div className="mb-16 flex flex-col gap-y-6 shadow-[0px_5px_4px_1px_rgba(0,0,0,0.26)] ">
      <TryButton />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First Name cannot be empty"),
          lastName: Yup.string().required("Last Name cannot be empty"),
          email: Yup.string()
            .email("Looks like this is not an email")
            .required("Email cannot be empty"),
          password: Yup.string().required("Password cannot be empty"),
        })}
        onSubmit={() => console.log("submitted")}
      >
        <div className="rounded-xl bg-white">
          <Form className="flex flex-col gap-y-4 p-6 pb-2">
            <StyledTextInput
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <StyledTextInput
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <StyledTextInput
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <StyledTextInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="rounded-md bg-userGreen py-6 text-white shadow-[-2px_-15px_0px_-9px_rgba(0,0,0,0.11)_inset] hover:opacity-80 md:py-4"
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </Form>
          <div className="px-10 pb-6">
            <p className="text-xs leading-5 text-userGrayishBlue">
              By clicking the button, you are agreeing to our{" "}
              <span className="font-bold text-userRed">Terms and Services</span>
            </p>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default SignupForm;
