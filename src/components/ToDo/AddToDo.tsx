import { IconButton, Flex, VStack, HStack } from "@chakra-ui/react";
//import { useToDoContext } from '../../context/toDoContext';
import Textfield from "../Textfield";
import colors from "../../context/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock, faExclamation } from "@fortawesome/free-solid-svg-icons";

interface IconStyle {
  color:string
  className:string
}

const iconStyle:IconStyle = {
  color: "white",
  className: "fa-lg"
}

const hoverStyle: React.CSSProperties = {
  background: colors.primary_300(0.2),
  color: "white",
}

const AddToDo = () => {
  //const context = useToDoContext();
  return (
    <Flex 
      width="100%"
      gap="10px" 
      padding="32px"
      borderRadius="16px"
      align="center"
      justifyContent="center"
      bg={colors.primary_700}
    >
      <form style={{width:"100%"}}>
        <VStack spacing="16px" width="100%">
          <Textfield placeoholder="To-Do" width="100%"/>
          <HStack justifyContent="start" width="100%">
            <HStack justifyContent="start" width="100%">
              <IconButton
                colorScheme=''
                aria-label='Search database'
                icon={<FontAwesomeIcon icon={faClock} { ...iconStyle }/>}
                _hover={ hoverStyle }
                />
              <IconButton
                colorScheme=''
                aria-label='Search database'
                icon={<FontAwesomeIcon icon={faExclamation} { ...iconStyle }/>}
                _hover={ hoverStyle }
                />
            </HStack>   
              <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<FontAwesomeIcon icon={faChevronRight} { ...iconStyle }/>}
                />
          </HStack>
        </VStack>
      </form>
    </Flex>
  );
}

export default AddToDo;