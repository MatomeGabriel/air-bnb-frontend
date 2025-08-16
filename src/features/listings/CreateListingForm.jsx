import { useForm } from "react-hook-form";

import ListingFormRow from "../../ui/ListingFormRow";
import Form from "../../ui/Form";

import styled from "styled-components";
import { FlexRow } from "../../ui/Flex";
import { ButtonOutlineDarkForm, ButtonPrimaryFormFull } from "../../ui/Buttons";
import { spacing } from "../../design-system";
import CreateMultiImageUpload from "./CreateMultiImageUpload";
import { useState } from "react";
import { useListings } from "../../context/ListingsContext";

const ListingsButtonBox = styled(FlexRow)`
  justify-content: end;
  gap: ${spacing.lg};
  & button {
    width: auto;
  }
`;

const CreateListingForm = () => {
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const {
    createHostListing,
    isCreatingHostListing,
    uploadHostListingImage,
    isUploadingHostListingImages,
  } = useListings();

  const locationData = [
    "Cape Town",
    "Paris",
    "New York",
    "Tokyo",
    "London",
    "Barcelona",
    "Rome",
    "Sydney",
    "Dubai",
    "Bangkok",
  ];

  const sendFormData = (formContent) => {
    console.log(images);
    createHostListing(formContent, {
      onSuccess: (res) => {
        const listingId = res?.data?.data?.data._id;
        uploadHostListingImage({ images, listingId });
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(sendFormData)}>
      <ListingFormRow label="Listing Title" error={errors?.title?.message}>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: "Please provide the title of your listing",
          })}
        />
      </ListingFormRow>
      <ListingFormRow
        label="Choose your property type:"
        error={errors?.type?.message}
      >
        <select
          id="type"
          defaultValue=" "
          {...register("type", {
            required: "Please select the type of your listing.",
          })}
        >
          <option value=" " disabled>
            -- Select an option --
          </option>
          <option value="Whole Villa">Whole Villa</option>
          <option value="Room">Room</option>
          <option value="Entire Unit">Entire Unit</option>
        </select>
      </ListingFormRow>
      <ListingFormRow
        label="Select your location:"
        error={errors?.location?.message}
      >
        <select
          id="location"
          defaultValue=" "
          {...register("location", {
            required: "Please select the location of your listing.",
          })}
        >
          <option value=" " disabled>
            -- Select an option --
          </option>
          {locationData.map((location, i) => (
            <>
              <option key={i} value={location}>
                {location}
              </option>
            </>
          ))}
        </select>
      </ListingFormRow>
      <ListingFormRow
        label="Number of guests"
        error={errors?.maxGuests?.message}
      >
        <input
          type="number"
          id="maxGuests"
          {...register("maxGuests", {
            required: "Please enter the number of guests for your listing.",
            min: { value: 1, message: "At least one guest is required." },
            max: {
              value: 20,
              message: "Please enter 20 or fewer guests.",
            },
          })}
        />
      </ListingFormRow>
      <ListingFormRow
        label="Number of bedrooms"
        error={errors?.bedrooms?.message}
      >
        <input
          type="number"
          id="bedrooms"
          {...register("bedrooms", {
            required: "Please provide the number of bedrooms for your listing",
            min: {
              value: 1,
              message: "Your listing should at least have one bedroom",
            },
            max: {
              value: 20,
              message: "Please enter 20 or fewer bedrooms.",
            },
          })}
        />
      </ListingFormRow>

      <ListingFormRow label="Number of beds" error={errors?.beds?.message}>
        <input
          type="number"
          id="beds"
          {...register("beds", {
            required: "Please provide the number of beds for your listing",
            min: {
              value: 1,
              message: "Your listing should at least have one bed",
            },
            max: {
              value: 20,
              message: "Please enter 20 or fewer beds.",
            },
          })}
        />
      </ListingFormRow>
      <ListingFormRow
        label="Number of bathrooms"
        error={errors?.bathrooms?.message}
      >
        <input
          type="number"
          id="bathrooms"
          {...register("bathrooms", {
            required: "Please provide the number of bathrooms for your listing",
            min: {
              value: 1,
              message: "Your listing should at least have one bathroom",
            },
            max: {
              value: 20,
              message: "Please enter 20 or fewer bathrooms.",
            },
          })}
        />
      </ListingFormRow>
      <ListingFormRow
        label="Price for your listing"
        error={errors?.price?.message}
      >
        <input
          type="number"
          id="price"
          {...register("price", {
            required: "Please provide the price for your listing",
            min: {
              value: 1,
              message: "Your listing should be above 1",
            },
          })}
        />
      </ListingFormRow>
      <ListingFormRow label="Describe your listing">
        <textarea
          type="text"
          id="description"
          {...register("description")}
          placeholder="Describe your listing..."
        />
      </ListingFormRow>

      {/* <ListingFormRow
        label="Price for your listing"
        error={errors?.cleaning?.message}
      >
        <input
          type="checkbox"
          id="cleaning"
          {...register("cleaning", {
            required: "Please provide the price for your cleaning",
          })}
        />
      </ListingFormRow> */}

      <CreateMultiImageUpload images={images} setImages={setImages} />

      <ListingsButtonBox>
        <ButtonOutlineDarkForm type="reset">Cancel</ButtonOutlineDarkForm>
        <ButtonPrimaryFormFull type="submit">Add Listing</ButtonPrimaryFormFull>
      </ListingsButtonBox>
    </Form>
  );
};

export default CreateListingForm;
