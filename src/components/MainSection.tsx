import { Box, Text, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ToDo from "./ToDo/ToDo";
import colors from "../context/colors";

const boxStyle = {
  borderRadius:"24px",
  overflow:"hidden",
}

const MainSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={true}
    backgroundColor={colors.background}
  >
    <Flex 
      gap="10px" 
      padding="64px 16px 16px 16px"
      height="100vh"
      width="100vw"
      overflow="auto"
    >
      <ToDo boxStyle={boxStyle}/>
      <Box
        { ...boxStyle }
        flex="2"
        background="transparent"
        justifyContent="center"
        alignContent="center"
        >
        <Text>Box 1</Text>
      </Box>
    </Flex>
  </FullScreenSection>
);

export default MainSection;
