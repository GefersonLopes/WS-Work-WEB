import React from "react";

import Spinner from "../../ui/Spinner";
import FallbackContainer from "../FallbackContainer";
import type { AsyncFallbackProps } from "./types";

const AsyncFallback: React.FC<AsyncFallbackProps> = ({
  isLoading,
  isError,
  isLength,
  errorContent = "Ocorreu um erro",
  loadingContent = <Spinner />,
  children,
  className,
}) => {
  if (isLoading) {
    return (
      <FallbackContainer className={className}>
        {loadingContent}
      </FallbackContainer>
    );
  }

  if (isError) {
    return (
      <FallbackContainer className={className}>
        {errorContent}
      </FallbackContainer>
    );
  }

  if (isLength !== undefined && isLength === false) {
    return (
      <FallbackContainer className={"flex flex-col " + className}>
        Está vazio, parece que nenhuma informação foi encontrada :(
      </FallbackContainer>
    );
  }

  return <>{children}</>;
};

export default AsyncFallback;
