import { Box, IconButton, Flex, VStack, HStack, Heading } from "@chakra-ui/react";
import Textfield from "./Textfield";
import colors from "../context/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock, faExclamation } from "@fortawesome/free-solid-svg-icons";

interface Props {
  boxStyle: object,
}

interface IconStyle {
  color:string
  className:string
}

const iconStyle:IconStyle = {
  color: "white",
  className: "fa-lg"
}

const CreateToDo = ( props:Props ) => {
  return (
    <Box flex="1" { ...props.boxStyle } >
      <Flex 
      width="100%"
      height="100%"
      bg={colors.primary}
      justifyContent="center"
      align="center"
      overflow="auto"
      padding="32px"
      gap="10px" 
      >
        <VStack height="100%" justifyContent="space-between">
          <Heading as="h2">Add ToDo</Heading>
          <form action="">
            <VStack spacing="12px">
              <Textfield placeoholder="To-Do"/>
              <HStack justifyContent="start" width="100%">
                <HStack justifyContent="start" width="100%">
                  <FontAwesomeIcon icon={faClock} { ...iconStyle }/>
                  <FontAwesomeIcon icon={faExclamation} { ...iconStyle }/>
                </HStack>   
                  <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<FontAwesomeIcon icon={faChevronRight} { ...iconStyle }/>}
                  />
              </HStack>
            </VStack>
          </form>
          <Heading as="h2" className="placeholder"></Heading>
        </VStack>
      </Flex>
    </Box>
  );
}

export default CreateToDo;