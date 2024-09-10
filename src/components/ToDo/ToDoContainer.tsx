import { Box, Text } from "@chakra-ui/react";

interface Props {
  toDo: ToDo,
}

interface ToDo {
  name: string,
  due: Date,
  important: boolean,
}

const ToDoContainer = ( props:Props ) => {
  //const context = useToDoContext();
  return (
    <Text>{props.toDo.name}</Text>
  );
}

export default ToDoContainer;