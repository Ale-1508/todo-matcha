import { Box, Text, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ToDo from "./ToDo/ToDo";
import colors from "../context/colors";
import useWindowDimensions from "../hooks/useWindowDimensions";

const boxStyle = {
  borderRadius:"24px",
  overflow:"hidden",
}

const MainSection = () => {
  const { width } = useWindowDimensions();
  
  return(
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
        { width > 950 
          ? <Box
            { ...boxStyle }
            flex={width > 1400 ? "2" : "1" }
            background="transparent"
            justifyContent="center"
            alignContent="center"
            >
            <Text>Box 1</Text>
          </Box>
          : null
        }
        
      </Flex>
    </FullScreenSection>
  );
};

export default MainSection;
