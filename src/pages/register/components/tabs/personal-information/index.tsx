import { useFormContext } from "react-hook-form";
import { InputTextField } from "../../../../../components/InputFieldText";
import CommonButton from "../../../../../components/button/commonButton";
import {
  BLOOD_GROUP_DATA,
  GENDER_DATA,
  MARITAL_STATUS_DATA,
} from "../../../../../constants";
import { RegisterSchemaInput } from "../../../schema";
interface PersonalInformationProps {
  setTabValue: (value: number) => void;
}

const PersonalInformation = ({ setTabValue }: PersonalInformationProps) => {
  const {
    register,
    formState: { errors},
  } = useFormContext<RegisterSchemaInput>();

  const nextHandler = () => {
    setTabValue(2);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <InputTextField
        label="First Name"
        type="text"
        placeholder="Enter Your First Name ..."
        required
        errorMessage={errors?.firstName?.message}
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
        errorMessage={errors?.lastName?.message}
        {...register("lastName")}
      />
      <InputTextField
        label="Gender"
        placeholder="select"
        {...register("genderId")}
        errorMessage={errors?.genderId?.message}
        required
        asChild
      >
        <select>
          <option value="">--select gender--</option>
          {GENDER_DATA.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Marital Status"
        placeholder="select"
        {...register("mStatusId")}
        required
        errorMessage={errors?.mStatusId?.message}
        asChild
      >
        <select> 
          <option value="">--select marital status--</option>
          {MARITAL_STATUS_DATA.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Blood Group"
        placeholder="select"
        {...register("bloodGrpId")}
        required
        asChild
        errorMessage={errors?.bloodGrpId?.message}
      >
        <select>
          <option value="">--select blood group--</option>
          {BLOOD_GROUP_DATA.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
      <InputTextField
        label="Date od Birth"
        type="date"
        placeholder="Enter Your Last Name ..."
        required
        {...register("dateOfBirth")}
        errorMessage={errors?.dateOfBirth?.message}
      />
      <InputTextField
        label="National Id"
        type="text"
        placeholder="Enter Your Last Name ..."
        required
        {...register("nationalId")}
        errorMessage={errors?.nationalId?.message}
      />
      <CommonButton name="Next" handler={nextHandler} />
    </div>
  );
};

export default PersonalInformation;

