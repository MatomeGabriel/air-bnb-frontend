import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

import { ButtonPrimaryFormFull } from "../../ui/Buttons";
import FormHeader from "../../ui/FormHeader";
import FormNote from "../../ui/FormNote";
import FormContainer from "../../ui/FormContainer";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const CreateSignupForm = ({ message }) => {
  const { signupUser, isSigningUp } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSignUp = (data) => {
    signupUser(data, {
      onSuccess: () => {
        reset();
        navigate(ROUTES.uploadProfileImg);
      },
    });
  };

  return (
    <FormContainer>
      <FormHeader>{message || "Signup for a new account"}</FormHeader>
      <Form onSubmit={handleSubmit(onSignUp)}>
        <FormRow
          label="Full name"
          error={errors?.name?.message}
          message="Enter your full name"
        >
          <input
            type="text"
            id="name"
            placeholder=" "
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow
          label="Username"
          error={errors?.username?.message}
          message="Please insert a unique username"
        >
          {/* custom validator to validate from the server */}
          <input
            type="text"
            id="username"
            placeholder=" "
            {...register("username", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow
          label="Email"
          error={errors?.email?.message}
          message="Please insert a unique email"
        >
          {/* custom validator to validate from the server */}
          <input
            type="email`"
            id="email"
            placeholder=" "
            {...register("email", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <input
            type="password"
            id="username"
            placeholder=" "
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Password confirm"
          error={errors?.passwordConfirm?.message}
          message="Please confirm your password"
        >
          <input
            type="password"
            id="passwordConfirm"
            placeholder=" "
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password ||
                "Passwords don’t match. Please try again.",
            })}
          />
        </FormRow>
        <ButtonPrimaryFormFull disabled={isSigningUp}>
          Sign up
        </ButtonPrimaryFormFull>
        <FormNote link="/login" linkText="Login">
          Have an account login
        </FormNote>
      </Form>
    </FormContainer>
  );
};

export default CreateSignupForm;
