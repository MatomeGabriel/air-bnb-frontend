import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { TextSm } from "../../ui/Paragraphs";
import {
  applyBackgroundColor,
  colors,
  flexColumnCenter,
  spacing,
} from "../../design-system";
import {
  CloudSolidFullIcon,
  DatabaseFullIcon,
  TrashCanRegularIcon,
  XMarkFullFullIcon,
} from "../../ui/Icons";
import { IconButton } from "../../ui/Buttons";
import { useListings } from "../../context/ListingsContext";
import { useConfirm } from "../../context/ConfirmContext";

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
const RemotePreviewBox = styled(LocalPreviewBox)`
  margin-top: 2.4rem;
`;

const ImgBox = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 6px;
`;

const ImgBadge = styled.div`
  ${flexColumnCenter};
  position: absolute;
  top: 0;
  background-color: ${colors.yellow};
  ${applyBackgroundColor};
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
    & path {
      fill: ${colors.white};
    }
  }
`;

/**
 * CreateMultiImageUpload
 *
 * Renders a drag-and-drop image uploader with local preview and cloud image management.
 * Supports both creation and edit modes, allowing users to upload, preview, and delete images.
 *
 * Features:
 * - Drag & drop or click-to-select image upload
 * - Local image previews with memory-safe cleanup
 * - Remote image display in edit mode with cloud deletion
 * - Confirmation modal before deleting cloud images
 * - Visual badges for local (database) and cloud (uploaded) images
 *
 * @param {Object} props
 * @param {Array} props.images - Array of local image objects with preview URLs
 * @param {Function} props.setImages - State setter for local image array
 * @param {Array} [props.listingImages=[]] - Array of remote image objects with `url` and `path`
 * @param {string} props.mode - Either "create" or "edit"
 * @param {string|null} [props.listingId=null] - Listing ID used for cloud image deletion
 *
 * @returns {JSX.Element} Image upload and preview UI
 *
 * @example
 * <CreateMultiImageUpload
 *   images={images}
 *   setImages={setImages}
 *   listingImages={listingImages}
 *   mode="edit"
 *   listingId="abc123"
 * />
 */
const CreateMultiImageUpload = ({
  images,
  setImages,
  listingImages = [],
  mode,
  listingId = null,
}) => {
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

  // delete Listing image on the cloud
  // ude the custom context
  const { requestConfirm } = useConfirm();
  const { deleteSingleListingImage, isDeletingSingleListingImage } =
    useListings();

  const deleteCloudImage = (e, imgPath) => {
    e.preventDefault();
    const data = { imagePath: imgPath };
    deleteSingleListingImage({ listingId, data });
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
        <input
          required={mode !== "edit" || !listingImages.length > 0}
          {...getInputProps()}
        />
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
      {mode === "edit" && (
        <RemotePreviewBox>
          {listingImages.map((imgSrc) => (
            <ImgBox key={imgSrc}>
              <Img src={imgSrc.url} />
              <DeleteButton
                title="Delete listing image on the cloud"
                onClick={(e) => {
                  e.preventDefault();
                  const imgPath = imgSrc.path;
                  requestConfirm({
                    message: "Are you sure you want to delete this image?",
                    warningTitle: "Warning: Permanent Image Deletion!",
                    warningMessage:
                      "This action is irreversible. Once the image is deleted, it cannot be recovered.",
                    onConfirm: () => deleteCloudImage(e, imgPath),
                    onCancel: () => {
                      console.error("Cancelled");
                    },
                  });
                }}
              >
                <TrashCanRegularIcon $fill="border" />
              </DeleteButton>
              <ImgBadge $bgColor="blue">
                <CloudSolidFullIcon $fill="white" />
              </ImgBadge>
            </ImgBox>
          ))}
        </RemotePreviewBox>
      )}
    </div>
  );
};

export default CreateMultiImageUpload;
