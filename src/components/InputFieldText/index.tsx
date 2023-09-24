import { CommonI, DistrictI, PalikaI } from "../../constants";
interface InputFieldTextProps {
  labelText: string;
  inputType: string;
  placeHolderText: string;
  required?: boolean;
  arr?: CommonI[] | DistrictI[] | PalikaI[];
}
export const InputFieldText = ({
  labelText,
  inputType,
  placeHolderText,
  required = false,
  arr,
}: InputFieldTextProps) => {
  return (
    <div>
      <label htmlFor="" className="font-medium ">
        {labelText}{" "}
        {required ? (
          <span className="text-error font-medium">*</span>
        ) : (
          "(optional)"
        )}{" "}
      </label>
      <br />
      {inputType === "select" ? (
        <select className="w-full rounded-md focus:outline-none border-2 py-2 px-3 my-3 border-offWhite">
          <option value="">Select {labelText}</option>
          {arr?.map((item) => (
            <option key={item?.id}>{item?.name}</option>
          ))}
        </select>
      ) : (
        <input
          className="w-full rounded-md focus:outline-none border-2 py-2 px-3 my-3 border-offWhite"
          type={inputType}
          placeholder={placeHolderText}
        />
      )}
    </div>
  );
};
