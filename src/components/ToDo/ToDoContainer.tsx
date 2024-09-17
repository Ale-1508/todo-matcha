import { Box, Text, IconButton, HStack, VStack } from "@chakra-ui/react";
import colors from "../../context/colors";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  toDo: ToDo,
}

interface ToDo {
  name: string,
  due: Date,
  important: boolean,
}

const ToDoContainer = ( props:Props ) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Box 
      width="100%"
      bg={ colors.lightBackground }
      color={ colors.text() }
      padding="8px 12px 12px 12px"
      borderRadius="12px"
    >
      <HStack gap="16px" align="center" >
        <IconButton
          isRound={ true }
          variant='solid'
          colorScheme={ isChecked ? "teal" : "brand" }
          aria-label='Done'
          fontSize='20px'
          icon={ isChecked ? <FontAwesomeIcon icon={faCheck} /> : undefined }
          onClick={ () => setIsChecked(!isChecked)}
          />
        <VStack align="left" justify="center" gap="0px">
          <HStack gap="12px">
            {props.toDo.important ? <Text fontSize="30px" fontWeight="500" color={colors.important}>!</Text> : null }
            <Text fontSize="28px" fontWeight="500">{props.toDo.name}</Text>
          </HStack>
          <Text fontSize="16px">{props.toDo.due.toDateString()}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default ToDoContainer;