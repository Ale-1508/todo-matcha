import { VStack } from "@chakra-ui/react";
import React from "react";

interface FullScreenSectionProps {
  children?: string | React.JSX.Element;
  isDarkBackground: boolean;
  backgroundColor?: string;
  justifyContent?: string;
  alignItems?: string;
}

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }: FullScreenSectionProps) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
