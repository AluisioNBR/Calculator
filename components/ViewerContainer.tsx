import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

export function ViewerContainer({
  children,
  cleanViewer
}: {
  children: string,
  cleanViewer: VoidFunction
}){
  const buttonBg = useColorModeValue('#ececec', '#535353;')
  const buttonBorder = useColorModeValue('#01010122', "#fdfdfd22")

  return (
    <FormControl>
      <Flex 
        direction={["column", 'row']}
        align="center" justify="center" gap=".5rem"
      >
        <Viewer>
          {children}
        </Viewer>

        <Button
          onClick={cleanViewer}
          fontSize={['1.2rem', '1.5rem']} bg={buttonBg}
          padding={['.5rem', '.8rem', '1.1rem']}
          border={`1px solid ${buttonBorder}`}
        >
          Limpar
        </Button>
      </Flex>
    </FormControl>
  )
}

function Viewer({ children }: { children: string }){
  const viewerBg = useColorModeValue('#e9e9e9', '#343434')
  const viewerBorder = useColorModeValue('#01010122', "#fdfdfd22")

  return (
    <Box>
      <FormLabel htmlFor="viewer" hidden >Visor</FormLabel>
        <Input
          maxW={[300, 400, 500, 600]} name="viewer" readOnly
          variant='outline' bg={viewerBg} p="1.5rem"
          border={`.2rem solid ${viewerBorder}`}
          borderRadius="2rem" fontSize={26}
          value={children}
        />
    </Box>
  )
}