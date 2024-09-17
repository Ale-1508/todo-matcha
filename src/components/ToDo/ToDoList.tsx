import { Flex, VStack } from "@chakra-ui/react";
//import { useToDoContext } from '../../context/toDoContext';
import ToDoContainer from "./ToDoContainer";

interface ToDo {
  name: string,
  due: Date,
  important: boolean,
}

const toDoList : ToDo[] = [
  {
    name: "To-Do 1",
    due: new Date(2024, 8, 10),
    important: true,
  },
  {
    name: "To-Do 2",
    due: new Date(2024, 8, 15),
    important: false,
  },
  {
    name: "To-Do 3",
    due: new Date(2024, 6, 15),
    important: false,
  },
]

const toDoListComponents = toDoList.map((item, index) => (
  <ToDoContainer toDo={item}/>
))

const ToDoList = () => {
  //const context = useToDoContext();
  return (
    <Flex 
      flex="1"
      bg="transparent"
      height="100%"
      width="100%"
      padding="16px"
    >
      <VStack width="100%" spacing="16px">
        {toDoListComponents}
      </VStack>
    </Flex>
  );
}

export default ToDoList;