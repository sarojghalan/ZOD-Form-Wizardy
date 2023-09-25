import { ComponentProps, forwardRef, useId } from "react";
import { Slot } from "@radix-ui/react-slot";

interface InputTextFieldProps extends Omit<ComponentProps<"input">, "ref"> {
  asChild?: boolean;
  required?:boolean;
  label?: string;
  labelProps?: ComponentProps<"label">;
}
export const InputTextField = forwardRef(
  (
    {
      asChild,
      label,
      required,
      labelProps: rawLabelProps = {},
      ...inputProps
    }: InputTextFieldProps,
    ref
  ) => {
    const Comp = asChild ? Slot : "input";

    const { className, ...labelProps } = rawLabelProps;
    const id = useId();

    return (
      <div>
        <label
          htmlFor={id}
          className={"font-medium" + className}
          {...labelProps}
        >
          {label} {required ? <span className="text-error">*</span> : "(optional)"}
        </label>
        {/* <br /> */}
        <Comp
          id={id}
          className="w-full rounded-md focus:outline-none border-2 py-2 px-3 my-3 border-offWhite"
          {...inputProps}
          ref={ref as never}
        />
      </div>
    );
  }
);

export const MainInput = () => {
  return (
    <div>
      <InputTextField placeholder="Hello"/>
      <InputTextField asChild>
        <textarea />
      </InputTextField>
      <InputTextField  asChild>
        <select className="bg-secondary">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </InputTextField>
    </div>
  );
};

