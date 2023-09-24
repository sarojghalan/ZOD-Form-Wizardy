import React from "react";
import { RELATION_DATA } from "../../../../../constants";
import CommonButton from "../../../../../components/button/commonButton";
import { InputFieldText } from "../../../../../components/InputFieldText";
interface RelationShipProps {
  setTabValue: (value: number) => void;
}

const Relationship = ({ setTabValue }: RelationShipProps) => {
  const prevHandler = () => {
    setTabValue(3);
  };

  return (
    <div>
      <h2>Relational Information</h2>
      <InputFieldText
        labelText="Name "
        inputType="text"
        placeHolderText="Enter Your Name ..."
        required
      />
      <InputFieldText
        labelText="Relation"
        inputType="select"
        placeHolderText="Enter Your Relation. ..."
        required
        arr={RELATION_DATA}
      />
      <InputFieldText
        labelText="Occupation"
        inputType="text"
        placeHolderText="Enter Your Occupation ..."
        required
      />
      <InputFieldText
        labelText="Date of Birth"
        inputType="date"
        placeHolderText="Enter Your ALternate Email ..."
        required
      />

      <InputFieldText
        labelText=" Contact No."
        inputType="number"
        placeHolderText="Enter Your  Contact No ..."
        required
      />
      <InputFieldText
        labelText=" Nominee Order."
        inputType="number"
        placeHolderText="Enter Your  Nominee Order ..."
        required
      />
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

export default Relationship;

