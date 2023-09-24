import CommonButton from "../../../../../components/button/commonButton";
import {
  GENDER_DATA,
  MARITAL_STATUS_DATA,
  BLOOD_GROUP_DATA,
} from "../../../../../constants";
import { InputFieldText } from "../../../../../components/InputFieldText";

interface PersonalInformationProps {
  setTabValue: (value: number) => void;
}

const PersonalInformation = ({ setTabValue }: PersonalInformationProps) => {
  const nextHandler = () => {
    setTabValue(2);
  };
  return (
    <div>
      <h2>Personal Information</h2>
      <InputFieldText
        labelText="First Name"
        inputType="text"
        placeHolderText="Enter Your First Name ..."
        required
      />
      <InputFieldText
        labelText="Middle Name"
        inputType="text"
        placeHolderText="Enter Your Middle Name ..."
      />
      <InputFieldText
        labelText="Last Name"
        inputType="text"
        placeHolderText="Enter Your Last Name ..."
        required
      />
      <InputFieldText
        labelText="Gender"
        inputType="select"
        placeHolderText="Enter Your Gender ..."
        required
        arr={GENDER_DATA}
      />
      <InputFieldText
        labelText="Marital Status"
        inputType="select"
        placeHolderText="Enter Your Marital Status ..."
        required
        arr={MARITAL_STATUS_DATA}
      />
      <InputFieldText
        labelText="Blood Group"
        inputType="select"
        placeHolderText="Enter Your Blood Group ..."
        required
        arr={BLOOD_GROUP_DATA}
      />
      <InputFieldText
        labelText="Date of BIrth"
        inputType="date"
        placeHolderText="Enter Your D.O.B ..."
        required
      />
      <InputFieldText
        labelText="National ID"
        inputType="number"
        placeHolderText="Enter Your National ID ..."
        required
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

