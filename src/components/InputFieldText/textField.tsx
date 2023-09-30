import { ComponentProps, forwardRef, useId } from "react";
import { Slot } from "@radix-ui/react-slot";

interface InputTextFieldProps extends Omit<ComponentProps<"input">, "ref"> {
  asChild?: boolean;
}
export const TextField = forwardRef(
  (
    {
      asChild,
      ...inputProps
    }: InputTextFieldProps,
    ref
  ) => {
    const Comp = asChild ? Slot : "input";

    const id = useId();

    return (
<>
<Comp
  id={id}
  className="w-full rounded-md focus:outline-none border-2 py-2 px-3 my-3 border-offWhite"
  {...inputProps}
  ref={ref as never}
/>
</>
    );
  }
);
