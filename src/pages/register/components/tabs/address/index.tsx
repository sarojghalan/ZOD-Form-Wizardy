import React from "react";
import {
  DISTRICT_DATA,
  PALIKA_DATA,
  PROVINCE_DATA,
  CommonI,
  PalikaI,
  DistrictI,
} from "../../../../../constants";
import CommonButton from "../../../../../components/button/commonButton";
import { useForm } from "react-hook-form";
import { AddressArrSchema, AddressArrSchemaExtractInput } from "../../../schema";
import { InputTextField } from "../../../../../components/InputFieldText";
interface AddressProps {
  setTabValue: (data: number) => void;
}

const Address = ({ setTabValue }: AddressProps) => {
  return (
    <div>
      <h2>Address Information</h2>
      <h3>Permanent Address</h3>
      <InputTextField
        labelText="State"
        inputType="select"
        placeHolderText="Enter Your State ..."
        required
        arr={PROVINCE_DATA}
        value="sCode"
      />
      <InputTextField
        labelText="District"
        inputType="select"
        placeHolderText="Enter Your District ..."
        required
        arr={DISTRICT_DATA[0].data}
        value="dCode"
      />
      <InputTextField
        labelText="Palika"
        inputType="select"
        placeHolderText="Enter Your Palika ..."
        required
        arr={PALIKA_DATA[0].data}
        value="pCode"
      />
      <InputTextField
        labelText="City"
        inputType="text"
        placeHolderText="Enter Your City ..."
        required
        value="city"
      />
      <InputTextField
        labelText="Street "
        value="street"
        inputType="text"
        placeHolderText="Enter Your Street ..."
        required
      />
      <InputTextField
        labelText="Contact No."
        value="contactNo"
        inputType="number"
        placeHolderText="Enter Your Contact No ..."
        required
      />
      <div className="flex items-center justify-between my-4">
        <h3>Temporary Address</h3>
        <h3 className="underline cursor-pointer">Set as permanent</h3>
      </div>
      <InputTextField
        labelText="State"
        inputType="select"
        placeHolderText="Enter Your State ..."
        required
        arr={PROVINCE_DATA}
      />
      <InputTextField
        labelText="District"
        inputType="select"
        placeHolderText="Enter Your District ..."
        required
        arr={DISTRICT_DATA[0].data}
      />
      <InputTextField
        labelText="Palika"
        inputType="select"
        placeHolderText="Enter Your Palika ..."
        required
        arr={PALIKA_DATA[0].data}
      />
      <InputTextField
        labelText="City"
        inputType="text"
        placeHolderText="Enter Your City ..."
        required
      />
      <InputTextField
        labelText="Street "
        inputType="text"
        placeHolderText="Enter Your Street ..."
        required
      />
      <InputTextField
        labelText="Contact No."
        inputType="number"
        placeHolderText="Enter Your Contact No ..."
        required
      />
      <CommonButton name="Submit" handler={handleSubmit(submitHandler)} />
    </div>
  );
};

export default Address;

