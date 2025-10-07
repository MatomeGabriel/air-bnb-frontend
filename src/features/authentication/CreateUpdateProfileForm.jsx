import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../ui/Flex";
import Form from "../../ui/Form";
import FormContainer from "../../ui/FormContainer";
import FormHeader from "../../ui/FormHeader";
import FormRow from "../../ui/FormRow";
import { TextBase, TextSm } from "../../ui/Paragraphs";
import { useAuth } from "../../context/AuthContext";
import { radii } from "../../design-system";

const ImgContainer = styled.div`
  width: 9.6rem;
  height: 9.6rem;
  position: relative;
`;
const Img = styled.img`
  border-radius: ${radii.full};
`;

/**
 * CreateUpdateProfileForm
 * Renders a user profile update form with avatar preview and basic user info.
 * Pulls current user data from AuthContext.
 *
 * Features:
 * - Displays user's profile image inside a styled container
 * - Shows static labels for name and email (can be extended to dynamic values)
 * - Includes a form layout for future profile update fields
 *
 * @returns {JSX.Element}
 */
const CreateUpdateProfileForm = () => {
  const { user } = useAuth();
  return (
    <FormContainer>
      <FormHeader>Update your user info</FormHeader>
      <Form>
        <FlexRow $gap="md">
          <ImgContainer>
            <button>
              <Img src={user.photo} alt="" />
            </button>
          </ImgContainer>
          <FlexColumn>
            <TextBase $weight="medium">name</TextBase>
            <TextSm $color="gray-500">email</TextSm>
          </FlexColumn>
        </FlexRow>
        <FormRow></FormRow>
      </Form>
    </FormContainer>
  );
};

export default CreateUpdateProfileForm;
