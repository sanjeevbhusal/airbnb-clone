"use client";

import { useRentModal } from "@/app/hooks/useRentModal";
import { Modal } from "./Modal";
import { ModalHeading } from "./ModalHeading";
import { useMemo, useState } from "react";
import { categories } from "../navbar/Categories";
import { CategoryInput } from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import { CountrySelect2 } from "../inputs/CountrySelect2";
import dynamic from "next/dynamic";
import { Button } from "../Button";
import { Counter } from "../inputs/Counter";
import { ImageUpload } from "../inputs/ImageUpload";

enum STEPS {
  CATEGORY = 1,
  LOCATION = 2,
  INFO = 3,
  IMAGES = 4,
  DESCRIPTION = 5,
  PRICE = 6,
}

export function RentModal() {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const { setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      info: {
        guests: 1,
        bedRooms: 1,
        bathRooms: 1,
      },
      imageUrl: null,
    },
  });

  const selectedCategory = watch("category") as string;
  const selectedLocation = watch("location") as CountrySelectValue;
  const selectedInfo = watch("info");
  const selectedImageUrl = watch("imageUrl");

  // Importing Map at the root level will cause it to not shift when the location is changed.
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedLocation]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const actionLabel = step === STEPS.PRICE ? "Finalize Listing" : "Next";
  const secondaryActionLabel = step === STEPS.CATEGORY ? undefined : "Back";

  const goOneStepBack = () => {
    setStep(step - 1);
  };
  const goOneStepForward = () => {
    setStep(step + 1);
  };

  let content = <></>;

  if (step === STEPS.CATEGORY) {
    content = (
      <div className="flex flex-col gap-8">
        <ModalHeading
          title="Which of these best describes your place?"
          subtitle="Pick a category"
        />
        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
        >
          {categories.map((category) => (
            <div key={category.label} className="col-span-1">
              <CategoryInput
                onClick={() => setCustomValue("category", category.label)}
                selected={selectedCategory === category.label}
                label={category.label}
                icon={category.icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (step === STEPS.LOCATION) {
    content = (
      <div className="flex flex-col gap-8">
        <ModalHeading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        {/* <CountrySelect
          value={selectedLocation}
          onChange={(value) => setCustomValue("location", value)}
        /> */}
        <CountrySelect2
          value={selectedLocation}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={selectedLocation?.latlng} />
      </div>
    );
  } else if (step === STEPS.INFO) {
    content = (
      // Bedrooms, Bathrooms, sqft, etc.
      <div className="flex flex-col gap-8">
        <ModalHeading
          title="Share some information about your place"
          subtitle="What ameneties do you have?"
        />
        <Counter
          onChange={(value) =>
            setCustomValue("info", { ...selectedInfo, guests: value })
          }
          value={selectedInfo.guests}
          title="Guests"
          subtitle="How many guests do you allow?"
        />
        <Counter
          onChange={(value) =>
            setCustomValue("info", { ...selectedInfo, bedRooms: value })
          }
          value={selectedInfo.bedRooms}
          title="Bedrooms"
          subtitle="How many bedrooms do you have?"
        />
        <Counter
          onChange={(value) =>
            setCustomValue("info", { ...selectedInfo, bathRooms: value })
          }
          value={selectedInfo.bathRooms}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
      </div>
    );
  } else if (step === STEPS.IMAGES) {
    content = (
      <div className="flex flex-col gap-8">
        <ModalHeading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like"
        />
        <ImageUpload
          onUpload={(url) => setCustomValue("imageUrl", url)}
          value={selectedImageUrl}
        />
      </div>
    );
  } else if (step === STEPS.DESCRIPTION) {
    content = (
      <div className="flex flex-col gap-8">
        <ModalHeading
          title="How would you describe your place?"
          subtitle="Keep it short by only including relevant information"
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Airbnb you home"
      onClose={rentModal.onClose}
      onSubmit={goOneStepForward}
      actionLabel={actionLabel}
      disabled={false}
      content={content}
      secondaryAction={goOneStepBack}
      secondaryActionLabel={secondaryActionLabel}
    />
  );
}

const getContentAccordingToCategory = (category: STEPS) => {
  switch (category) {
    case (category = STEPS.CATEGORY):
      return;
  }
};
