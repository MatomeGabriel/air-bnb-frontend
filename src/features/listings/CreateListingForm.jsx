import { useForm } from "react-hook-form";

import ListingFormRow from "../../ui/ListingFormRow";
import Form from "../../ui/Form";

import styled from "styled-components";
import { FlexRow } from "../../ui/Flex";
import { ButtonOutlineDarkForm, ButtonPrimaryFormFull } from "../../ui/Buttons";
import { spacing } from "../../design-system";
import CreateMultiImageUpload from "./CreateMultiImageUpload";
import { useState } from "react";

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

  const sendFormData = (data) => {
    console.log(data);
    const formData = { ...data, images };
    console.log(formData);
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
      <ListingFormRow label="Maximum guest" error={errors?.maxGuests?.message}>
        <input
          type="number"
          id="maxGuests"
          {...register("maxGuests", {
            required: "Please provide the maximum guests for your listing",
            min: { value: 1, message: "Maximum guest should be at least 1" },
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
