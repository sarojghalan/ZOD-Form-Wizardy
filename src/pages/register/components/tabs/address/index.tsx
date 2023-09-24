import React from "react";
import {
  DISTRICT_DATA,
  PALIKA_DATA,
  PROVINCE_DATA,
} from "../../../../../constants";
import CommonButton from "../../../../../components/button/commonButton";
import { InputFieldText } from "../../../../../components/InputFieldText";
interface AddressProps {
  setTabValue: (data: number) => void;
}

const Address = ({ setTabValue }: AddressProps) => {
  const nextHandler = () => {
    setTabValue(4);
  };
  const prevHandler = () => {
    setTabValue(2);
  };
  return (
    <div>
      <h2>Address Information</h2>
      <h3>Permanent Address</h3>
      <InputFieldText
        labelText="State"
        inputType="select"
        placeHolderText="Enter Your State ..."
        required
        arr={PROVINCE_DATA}
      />
      <InputFieldText
        labelText="District"
        inputType="select"
        placeHolderText="Enter Your District ..."
        required
        arr={DISTRICT_DATA[0].data}
      />
      <InputFieldText
        labelText="Palika"
        inputType="select"
        placeHolderText="Enter Your Palika ..."
        required
        arr={PALIKA_DATA[0].data}
      />
      <InputFieldText
        labelText="City"
        inputType="text"
        placeHolderText="Enter Your City ..."
        required
      />
      <InputFieldText
        labelText="Street "
        inputType="text"
        placeHolderText="Enter Your Street ..."
        required
      />
      <InputFieldText
        labelText="Contact No."
        inputType="number"
        placeHolderText="Enter Your Contact No ..."
        required
      />
      <div className="flex items-center justify-between my-4">
        <h3>Temporary Address</h3>
        <h3 className="underline cursor-pointer">Set as permanent</h3>
      </div>
      <InputFieldText
        labelText="State"
        inputType="select"
        placeHolderText="Enter Your State ..."
        required
        arr={PROVINCE_DATA}
      />
      <InputFieldText
        labelText="District"
        inputType="select"
        placeHolderText="Enter Your District ..."
        required
        arr={DISTRICT_DATA[0].data}
      />
      <InputFieldText
        labelText="Palika"
        inputType="select"
        placeHolderText="Enter Your Palika ..."
        required
        arr={PALIKA_DATA[0].data}
      />
      <InputFieldText
        labelText="City"
        inputType="text"
        placeHolderText="Enter Your City ..."
        required
      />
      <InputFieldText
        labelText="Street "
        inputType="text"
        placeHolderText="Enter Your Street ..."
        required
      />
      <InputFieldText
        labelText="Contact No."
        inputType="number"
        placeHolderText="Enter Your Contact No ..."
        required
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

export default Address;

