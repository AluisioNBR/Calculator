import {
  SimpleGrid,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ViewerContext } from './AppMain'
import { calculate } from './calculate'

type updateViewerCallback = (key: string) => void

export type { updateViewerCallback }

export function Keyboard(){
  const keys = [
  '7', '8', '9', '/',
  '4', '5', '6', 'x',
  '1', '2', '3', '-',
  ',', '0', 'Enter', '+'
  ]
  const buttons = keys.map((key) => 
    <KeyboardKey key={key}>{key}</KeyboardKey>)

  return (
    <SimpleGrid columns={4} spacing={1}>
      {buttons}
    </SimpleGrid>
  )
}

function KeyboardKey({ children }: { children: string }){
  const viewerContent = useContext(ViewerContext)
  const viewer = viewerContent[0] as string
  const cleanViewer = viewerContent[1] as VoidFunction
  const updateViewer = viewerContent[2] as updateViewerCallback

  const buttonBg = useColorModeValue('#ececec', '#535353;')
  const buttonBorder = useColorModeValue('#01010122', "#fdfdfd22")
  
  const notEnterKey = children != 'Enter'
  let onClickFunction = notEnterKey ?
    () => updateViewer(children):
    () => calculate(viewer, updateViewer, cleanViewer)

  return (
    <Button
      onClick={onClickFunction}
      border={`1px solid ${buttonBorder}`}
      bg={buttonBg}
      fontSize={['1.2rem', '1.5rem', '1.8rem']}
      padding={['.5rem', '.8rem', '1.1rem']}
    >
     {children}
    </Button>
  )
}