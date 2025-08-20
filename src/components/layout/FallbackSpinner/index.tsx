import Spinner from "../../ui/Spinner";
import FallbackContainer from "../FallbackContainer";

function FallbackSpinner() {
  return (
    <FallbackContainer className="w-screen h-screen flex items-center justify-center">
      <Spinner />
    </FallbackContainer>
  );
}

export default FallbackSpinner;
