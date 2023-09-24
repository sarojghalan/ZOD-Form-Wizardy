import React from "react";
import { RELATION_DATA } from "../../../../../constants";
import CommonButton from "../../../../../components/button/commonButton";
import { InputFieldText } from "../../../../../components/InputFieldText";
interface ContactProps {
  setTabValue: (value: number) => void;
}

const Contact = ({ setTabValue }: ContactProps) => {
  const nextHandler = () => {
    setTabValue(3);
  };
  const prevHandler = () => {
    setTabValue(1);
  };
  return (
    <div>
      <h2>Contact Information</h2>
      <InputFieldText
        labelText="Mobile Number"
        inputType="number"
        placeHolderText="Enter Your Mobile Number ..."
        required
      />
      <InputFieldText
        labelText="Email"
        inputType="email"
        placeHolderText="Enter Your Email ..."
        required
      />
      <InputFieldText
        labelText="Alternate Email"
        inputType="email"
        placeHolderText="Enter Your ALternate Email ..."
      />
      <InputFieldText
        labelText="Alternate Contact Person"
        inputType="text"
        placeHolderText="Enter Your ALternate Contact Person ..."
      />
      <InputFieldText
        labelText="Alternate Contact No."
        inputType="text"
        placeHolderText="Enter Your ALternate Contact No ..."
      />
      <InputFieldText
        labelText="Relation"
        inputType="select"
        placeHolderText="Enter Your Relation. ..."
        required
        arr={RELATION_DATA}
      />
      <CommonButton name="Next" handler={nextHandler} />
      <CommonButton
        name="Back"
        handler={prevHandler}
        backgroundColor="bg-tertiary"
        textColor="text-secondary"
        borderColor="border-secondary"
      />
    </div>
  );
};

export default Contact;

