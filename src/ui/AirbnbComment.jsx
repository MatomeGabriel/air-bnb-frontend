import styled from "styled-components";
import { flexColumnStart } from "../design-system";
import { TextBase, TextSm } from "./Paragraphs";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

const UserRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
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
