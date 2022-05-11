import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import SignUp from "./features/signup"

const styles = {
  global: {
    'html, body': {
      fontFamily: 'Poppins, system-ui, sans-serif',
      color: 'gray.600',
      lineHeight: 'tall',
    },
    a: {
      color: 'teal.500',
    },
  },
};

type Props = {
  configFileName?: string
}

export const App: React.FC<Props> = ({configFileName}) => (
  <ChakraProvider theme={extendTheme({styles})}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <SignUp configFileName={configFileName} />
    </React.Suspense>
  </ChakraProvider>

)
