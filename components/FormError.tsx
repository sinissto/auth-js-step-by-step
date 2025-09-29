import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div
      className={
        "bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive p-3"
      }
    >
      <ExclamationTriangleIcon className={"h-5 w-5"} />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
