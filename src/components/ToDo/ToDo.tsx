import { Box, Flex, VStack, Heading } from "@chakra-ui/react";
import { useToDoContext } from '../../context/toDoContext';
import colors from "../../context/colors";

import AddToDo from "./AddToDo";

interface Props {
  boxStyle: object,
}


const ToDo = ( props:Props ) => {
  const context = useToDoContext();
  console.log(context) //placeholder
  return (
    <Box flex="1" { ...props.boxStyle } >
      <Flex 
      width="100%"
      height="100%"
      bg={colors.primary}
      justifyContent="center"
      align="center"
      overflow="auto"
      padding="20px"
      gap="10px" 
      >
        <VStack height="100%" width="100%" justifyContent="space-between">
          <Heading as="h2">To-Do List</Heading>
          <Flex 
            flex="1"
            bg="transparent"
            height="100%"
            width="100%"
          />
          <AddToDo />
        </VStack>
      </Flex>
    </Box>
  );
}

export default ToDo;