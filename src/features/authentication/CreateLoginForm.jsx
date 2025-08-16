import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { ButtonPrimaryFormFull } from "../../ui/Buttons";

import FormHeader from "../../ui/FormHeader";
import FormContainer from "../../ui/FormContainer";
import FormNote from "../../ui/FormNote";
import { useAuth } from "../../context/AuthContext";

const CreateLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, isLoggingIn } = useAuth();

  const onLogin = (data) => {
    loginUser(data);
  };

  return (
    <FormContainer>
      <FormHeader>Login</FormHeader>
      <Form onSubmit={handleSubmit(onLogin)}>
        <FormRow
          label="Username"
          error={errors?.username?.message}
          message="Login with your username"
        >
          <input
            type="text"
            id="username"
            placeholder=" "
            {...register("username", { required: "This field is required" })}
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
        <ButtonPrimaryFormFull disabled={isLoggingIn}>
          Submit
        </ButtonPrimaryFormFull>
        <FormNote link="/signup" linkText="Sign up">
          Need an account login
        </FormNote>
      </Form>
    </FormContainer>
  );
};

export default CreateLoginForm;
