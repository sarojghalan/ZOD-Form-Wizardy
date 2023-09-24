interface CommonButtonProps {
  name: string;
  handler: () => void;
  backgroundColor?: "bg-secondary" | "bg-tertiary";
  borderColor?: "border-secondary" | "border-tertiary";
  textColor?: "text-secondary" | "text-tertiary";
}

const CommonButton = ({
  name,
  handler,
  backgroundColor = "bg-secondary",
  borderColor = "border-tertiary",
  textColor = "text-tertiary",
}: CommonButtonProps) => {
  return (
    <button
      className={`${backgroundColor} border-2 ${borderColor} rounded-md ${textColor} py-2 w-full`}
      onClick={handler}
    >
      {name}
    </button>
  );
};

export default CommonButton;

