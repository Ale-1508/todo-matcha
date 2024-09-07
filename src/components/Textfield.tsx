import { Input } from '@chakra-ui/react'

interface Props {
  hint:string
}

const Textfield = ( props:Props ) => {
  return (
    <Input placeholder={props.hint} />
  );
}

export default Textfield;