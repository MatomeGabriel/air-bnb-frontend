import { useForm } from "react-hook-form";
import ListingFormRow from "../../ui/ListingFormRow";
import Form from "../../ui/Form";

import styled from "styled-components";
import { FlexRow } from "../../ui/Flex";
import { ButtonOutlineDarkForm, ButtonPrimaryFormFull } from "../../ui/Buttons";
import { spacing } from "../../design-system";
import CreateMultiImageUpload from "./CreateMultiImageUpload";
import { useEffect, useMemo, useState } from "react";
import { useListings } from "../../context/ListingsContext";
import toast from "react-hot-toast";

const ListingsButtonBox = styled(FlexRow)`
  justify-content: end;
  gap: ${spacing.lg};
  & button {
    width: auto;
  }
`;

/**
 *
 *
 *
 *
 *
 */

// What should this form accept , it can edit and create things
// make it reusable
// 1. mode edit or create
// edit receives from data e.g listingData, and location cannot change

const ListingForm = ({ mode, listing = [] }) => {
  // State to store images
  const [images, setImages] = useState([]);
  const listingId = listing?._id;

  const listingData = useMemo(() => {
    return {
      title: listing?.title || "",
      type: listing?.type || "",
      location: listing?.location || "",
      maxGuests: listing?.maxGuests || 1,
      bedrooms: listing?.bedrooms || 1,
      beds: listing?.beds || 1,
      bathrooms: listing?.bathrooms || 1,
      price: listing?.price || 1,
      description: listing?.description || "",
    };
  }, [listing]);

  //   This is our react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  //   Populate our form
  useEffect(() => {
    if (mode === "edit" && listing) {
      reset(listingData);
    }
  }, [listing, mode, reset, listingData]);

  //   context to export
  const {
    createHostListing,
    isCreatingHostListing,
    uploadHostListingImage,
    isUploadingHostListingImages,
    updateHostListing,
    isUpdatingHostListing,
    updateHostListingImages,
  } = useListings();

  //   locations data to export
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

  const resetImages = (e = {}) => {
    images.forEach((file) => URL.revokeObjectURL(file.preview));
    setImages([]);
    /**
     * runs for edit mode
     */
    if (mode === "edit") {
      /**
       *  check if we have even object and if it is not empty
       * */
      if (Object.keys(e).length > 0) e.preventDefault();

      reset(listingData);
    }
  };

  //   Submission we still do it on the form
  const sendFormData = (formContent) => {
    if (mode === "edit") {
      updateHostListing(
        { listingId, data: formContent },
        {
          onSuccess: () => {
            if (images.length > 0) {
              updateHostListingImages(
                { images, listingId },
                {
                  onSuccess: () => {
                    toast.success("Images updated Successfully");
                    resetImages();
                  },
                  onError: () => {
                    toast.error("Failed to upload images");
                  },
                }
              );
            }
          },
        }
      );
    } else {
      createHostListing(formContent, {
        onSuccess: (res) => {
          const listingId = res?.data?.data?.data._id;
          uploadHostListingImage(
            { images, listingId },
            {
              onSuccess: () => {
                // Reset the form
                reset();
                // Reset the image previews
                resetImages();
                toast.success(
                  <span>
                    View your listings! 👉
                    <a target="_blank" href={`/listings`}>
                      View Listing
                    </a>
                  </span>
                );
              },
            }
          );
        },
      });
    }
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
          disabled={mode == "edit"}
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

      <CreateMultiImageUpload
        images={images}
        setImages={setImages}
        listingImages={listing?.images}
        mode={mode}
        listingId={listing._id}
      />

      <ListingsButtonBox>
        <ButtonOutlineDarkForm
          type={mode === "edit" ? "button" : "reset"}
          disabled={isCreatingHostListing || isUploadingHostListingImages}
          onClick={(e) => resetImages(e)}
        >
          {mode === "edit" ? "Reset to default" : "Cancel"}
        </ButtonOutlineDarkForm>
        <ButtonPrimaryFormFull
          type="submit"
          disabled={
            isCreatingHostListing ||
            isUploadingHostListingImages ||
            isUpdatingHostListing
          }
        >
          {mode === "edit" ? "Update " : "Add "}
          Listing
        </ButtonPrimaryFormFull>
      </ListingsButtonBox>
    </Form>
  );
};

export default ListingForm;
