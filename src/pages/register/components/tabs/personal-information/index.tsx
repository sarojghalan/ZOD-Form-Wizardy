import CommonButton from "../../../../../components/button/commonButton";
import {
  GENDER_DATA,
  MARITAL_STATUS_DATA,
  BLOOD_GROUP_DATA,
} from "../../../../../constants";
import { InputTextField } from "../../../../../components/InputFieldText";
import { useFormContext } from "react-hook-form";
import React from "react";
import { RegisterSchemaInput } from "../../../schema";
interface PersonalInformationProps {
  setTabValue: (value: number) => void;
}

const PersonalInformation = ({ setTabValue }: PersonalInformationProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValidating, isDirty },
  } = useFormContext<RegisterSchemaInput>();

  const nextHandler = () => {
    setTabValue(2);
  };

  const submitHandler = () => {
    console.log(getValues("firstName"));
    console.log("hahah");
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <InputTextField
        label="First Name"
        type="text"
        placeholder="Enter Your First Name ..."
        required
        {...register("firstName")}
      />
      <InputTextField
        label="Middle Name"
        type="text"
        placeholder="Enter Your Middle Name ..."
        {...register("middleName")}
      />
      <InputTextField
        label="Last Name"
        type="text"
        placeholder="Enter Your Last Name ..."
        required
        {...register("lastName")}
      />
      <InputTextField
        label="Gender"
        placeholder="select"
        {...register("genderId")}
        required
        asChild
      >
        <select>
          {GENDER_DATA.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Marital Status"
        placeholder="select"
        {...register("mStatusId")}
        required
        asChild
      >
        <select>
          {MARITAL_STATUS_DATA.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Blood Group"
        placeholder="select"
        {...register("bloodGrpId")}
        required
        asChild
      >
        <select>
          {BLOOD_GROUP_DATA.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Date od Birth"
        type="date"
        placeholder="Enter Your Last Name ..."
        required
        {...register("dateOfBirth")}
      />
      <InputTextField
        label="National Id"
        type="text"
        placeholder="Enter Your Last Name ..."
        required
        {...register("nationalId")}
      />
      <CommonButton name="Next" handler={nextHandler} />
      {/* <CommonButton
        name="Back"
        handler={nextHandler}
        backgroundColor="bg-tertiary"
        textColor="text-secondary"
        borderColor="border-secondary"
      /> */}
    </div>
  );
};

export default PersonalInformation;

