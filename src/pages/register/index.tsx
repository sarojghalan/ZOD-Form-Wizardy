import React from "react";
import PersonalInformation from "./components/tabs/personal-information";
import Contact from "./components/tabs/contact";
import Address from "./components/tabs/address";
import Relationship from "./components/tabs/relationship";
import { FormProvider } from "react-hook-form";
import { useZodForm } from "../../hooks/requestMethod/useZodForm";
import { REGISTER_DEFAULT_VALUES } from "./constant";
import { registerSchema, RegisterSchemaInput, RegisterSchemaOutput } from "./schema";
const Register = () => {
  const [tabValue, setTabValue] = React.useState<number>(1);
  const tabValues: number[] = [1, 2, 3, 4];
  const methods = useZodForm<RegisterSchemaInput>({
    schema: registerSchema,
    defaultValues: REGISTER_DEFAULT_VALUES,
    mode: "onChange",
  });
  const Tabs = () => (
    <ul className="flex gap-5 items-center justify-center">
      {tabValues.map((item) => (
        <li onClick={() => setTabValue(item)} key={item}>
          <span
            className={`${
              tabValue === item
                ? `bg-tertiary text-secondary`
                : `bg-secondary text-tertiary`
            } cursor-pointer px-4 py-2 rounded-full hover:bg-tertiary hover:text-[#000] duration-150`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );

  const submitHandler = (data: RegisterSchemaInput) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-primary py-6 fixed top-0 left-0 w-full ">
        <div>
          <h3 className="text-tertiary text-3xl text-center mb-6">
            Welcome to the HRMS :{" "}
          </h3>
          <Tabs />
        </div>
      </div>
      <div className="p-4 mt-32">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            {tabValue === 1 && (
              <PersonalInformation setTabValue={setTabValue} />
            )}
            {tabValue === 2 && <Contact setTabValue={setTabValue} />}
            {/* {tabValue === 3 && <Address setTabValue={setTabValue} />}
            {tabValue === 4 && <Relationship setTabValue={setTabValue} />} */}
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Register;

