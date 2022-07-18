import {
  Container,
  Flex,
  Spacer,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

export function AppHeader() {
  const containerBg = useColorModeValue('#f5f5f5', '#212121')

  return (
    <header style={{ marginBottom: '2rem' }}>
      <Container
        bg={containerBg}
        minWidth="100%"
        p="1rem"
        borderBottom="solid 1px #c0c0c086"
      >
        <Flex>
          <Heading as='h1'>Calculadora</Heading>

          <Spacer />
          
          <ThemeButton />
        </Flex>
      </Container>
    </header>
  )
}

function ThemeButton(){
  const { colorMode, toggleColorMode } = useColorMode()
  const buttonBg = useColorModeValue('#ececec', '#535353;')

  return (
    <Button
      bg={buttonBg}
      border="1px solid #22222233"
      width={["7rem", "9rem", "11rem"]}
      fontSize={["1rem", "1.2rem", "1.5rem"]}
      onClick={toggleColorMode}
    >
      Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}
    </Button>
  )
}