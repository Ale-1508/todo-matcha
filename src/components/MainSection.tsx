import { Box, Text, HStack, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const MainSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={true}
    backgroundColor="#2A4365"
  >
    <Flex 
      gap="10px" 
      padding="64px 16px 16px 16px"
      height="100vh"
      width="100vw"
      overflow="auto"
    >
      <Box
        backgroundColor="black" 
        borderRadius="24px"
        flex="1"
        >
        <Text>Box 1</Text>
      </Box>
      <Box
        backgroundColor="black" 
        borderRadius="24px"
        flex="1"
        >
        <Text>Box 1</Text>
      </Box>
    </Flex>
  </FullScreenSection>
);

export default MainSection;
