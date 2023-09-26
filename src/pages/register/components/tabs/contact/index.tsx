import { InputTextField } from "../../../../../components/InputFieldText";
import CommonButton from "../../../../../components/button/commonButton";
import { RELATION_DATA } from "../../../../../constants";
import { useFormContext } from "react-hook-form";
import { RegisterSchemaInput } from "../../../schema";

interface ContactProps {
  setTabValue: (value: number) => void;
}

const Contact = ({ setTabValue }: ContactProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterSchemaInput>();

  const nextHandler = () => {
    setTabValue(3);
  };
  const prevHandler = () => {
    setTabValue(1);
  };
  return (
    <div>
      <h2>Contact Information</h2>
      <InputTextField
        label="Mobile Number"
        type="number"
        placeholder="Enter Your Mobile Number ..."
        required
        {...register("mobileNo")}
        errorMessage={errors?.mobileNo?.message}
      />
      <InputTextField
        label="Email"
        type="email"
        placeholder="Enter Your Email ..."
        required
        {...register("mobileNo")}
        errorMessage={errors?.mobileNo?.message}
      />
      <InputTextField
        label="Alternate Email"
        type="email"
        placeholder="Enter Your ALternate Email ..."
        {...register("altEmail")}
      />
      <InputTextField
        label="Alternate Contact Person"
        type="text"
        placeholder="Enter Your ALternate Contact Person ..."
        {...register("eContPerson")}
      />
      <InputTextField
        label="Alternate Contact No."
        type="text"
        placeholder="Enter Your ALternate Contact No ..."
        {...register("eContNo")}
      />
      <InputTextField
        label="Relation"
        placeholder="select"
        {...register("relationId")}
        errorMessage={errors?.relationId?.message}
        required
        asChild
      >
        <select>
          <option value="">--select relation--</option>
          {RELATION_DATA.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </InputTextField>
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

