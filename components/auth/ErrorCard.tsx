import CardWrapper from "@/components/auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel={"Ooops! Something went wrong."}
      backButtonLabel={"Back to login"}
      backButtonHref={"/auth/login"}
    >
      <div className={"w-full flex items-center justify-center"}>
        <ExclamationTriangleIcon className={"h-10 w-10 text-destructive"} />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
