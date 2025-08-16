import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { TextSm } from "../../ui/Paragraphs";
import { colors, flexColumnCenter, spacing } from "../../design-system";
import {
  DatabaseFullIcon,
  SearchIcon,
  XMarkFullFullIcon,
} from "../../ui/Icons";
import { IconButton } from "../../ui/Buttons";

const DropArea = styled.div`
  border: 2px dashed #ccc;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  background-color: ${({ isDragActive }) =>
    isDragActive ? "#f0f8ff" : "#fafafa"};
  cursor: pointer;
`;

const LocalPreviewBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing["sm-md"]};
  margin-top: 1rem;
`;

const ImgBox = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 6px;
`;

const ImgBadge = styled.div`
  ${flexColumnCenter}
  position: absolute;
  top: 0;
  background-color: ${colors.yellow};
  padding: 0.2rem;
  border-radius: 0.4rem 0 0.4rem 0;
`;

const DeleteButton = styled(IconButton)`
  position: absolute;
  top: ${spacing.xs};
  right: ${spacing.xs};
  background-color: rgba(0, 0, 0, 0.7);
  color: ${colors.white};
  border: none;
  border-radius: 50%;
  width: ${spacing.lg};
  height: ${spacing.lg};
  cursor: pointer;

  &:hover {
    background-color: ${colors.error};
  }
`;
const CreateMultiImageUpload = ({ images, setImages }) => {
  // called when a file is dropped or selected
  const onDrop = useCallback(
    (acceptedFiles) => {
      // map through our files
      // create the actual file and the preview
      const previews = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...previews]);
    },
    [setImages]
  );
  //Setup our useDropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // To remove image previews
  const removeImage = (index, e) => {
    e.preventDefault();
    setImages((prev) => {
      // this is all our images
      const update = [...prev];
      //frees up memory where the image url was stored
      URL.revokeObjectURL(update[index].preview);
      // remove the image preview from our images
      update.splice(index, 1);
      return update;
    });
  };

  // clean up the previous previews
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  return (
    <div>
      <DropArea isDragActive={isDragActive} {...getRootProps()}>
        <input required {...getInputProps()} />
        <TextSm>Drag & drop images here, or click to select</TextSm>
      </DropArea>

      <LocalPreviewBox>
        {images.map((img, index) => (
          <ImgBox key={index}>
            <Img src={img.preview} alt={`Preview ${index}`} />
            <DeleteButton
              onClick={(e) => removeImage(index, e)}
              title="Remove the image"
            >
              <XMarkFullFullIcon $fill="white" />
            </DeleteButton>
            <ImgBadge>
              <DatabaseFullIcon $fill="white" />
            </ImgBadge>
          </ImgBox>
        ))}
      </LocalPreviewBox>
    </div>
  );
};

export default CreateMultiImageUpload;
