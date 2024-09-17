import { Input } from '@chakra-ui/react'
import colors from '../context/colors'

interface Props {
  placeholder?:string
  width?:string
}

const focusStyle: React.CSSProperties = {
  borderColor: colors.primary_300(0.2),
}

const Textfield = ( props:Props ) => {
  return (
    <Input
      color={colors.text()}
      bg={colors.lightBackground}
      borderColor="transparent"
      _focus={ focusStyle }
      _placeholder={{ opacity: 0.8, color: "black"  }}
      {...props}
    />
  );
}

export default Textfield;