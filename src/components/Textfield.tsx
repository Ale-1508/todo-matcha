import { Input } from '@chakra-ui/react'
import colors from '../context/colors'

interface Props {
  placeoholder?:string
  width?:string
}

const focusStyle: React.CSSProperties = {
  borderColor: colors.primary_300(0.2),
}

const Textfield = ( props:Props ) => {
  return (
    <Input
      color={colors.text()}
      bg="#f8f8f8"
      borderColor="transparent"
      _focus={ focusStyle }
      {...props}
    />
  );
}

export default Textfield;