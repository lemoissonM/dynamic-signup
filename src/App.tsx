import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

const colors = {
  primary: {
    200: '#F6FAFF',
    300: '#DFEDFF',
    400: '#A0C9FE',
    500: '#88BCFD',
    600: '#71AEFD',
    700: '#59A0FC',
    800: '#3F8AFB',
    900: '#1278FB',
  },
  secondary: {
    100: '#F7F0E7',
    200: '#F7E6D0',
    300: '#F8DCB8',
    400: '#F8D2A0',
    500: '#F9C788',
    600: '#F9BD71',
    700: '#F9B359',
    800: '#FAA941',
    900: '#FB9512',
  },
  blue: '#001344',
}

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

export const App = () => (
  <ChakraProvider theme={extendTheme({colors, styles})}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
