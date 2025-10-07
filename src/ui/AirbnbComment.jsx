import styled from "styled-components";
import { flexColumnStart, spacing } from "../design-system";
import { TextBase, TextSm } from "./Paragraphs";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.lg};
`;

const UserRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.lg};
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 5.6rem;
  height: 5.6rem;
  flex: none;
`;

const AvatarBase = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1000px;
  background-color: #f0f0f0;
`;

const AvatarImage = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1000px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const TextBlock = styled.div`
  ${flexColumnStart}
`;
/**
 * AirbnbComment
 * Displays a user comment with avatar, name, subtitle, and message.
 *
 * @param {Object} props
 * @param {string} props.avatarUrl - URL of the user's avatar image.
 * @param {string} props.title - User's name or title.
 * @param {string} props.subtitle - Additional user info (e.g. location or role).
 * @param {string} props.comment - The comment text.
 *
 * @returns {JSX.Element}
 */
const AirbnbComment = ({ avatarUrl, title, subtitle, comment }) => {
  return (
    <CommentContainer>
      <UserRow>
        <AvatarWrapper>
          <AvatarBase />
          <AvatarImage src={avatarUrl} />
        </AvatarWrapper>
        <TextBlock>
          <TextBase $weight="medium" as="h3">
            {title}
          </TextBase>
          <TextSm $color="muted">{subtitle}</TextSm>
        </TextBlock>
      </UserRow>
      <TextBase>{comment}</TextBase>
    </CommentContainer>
  );
};

export default AirbnbComment;
