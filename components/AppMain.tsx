import { Flex } from '@chakra-ui/react'
import { ViewerContainer } from './ViewerContainer'
import { Keyboard } from './Keyboard'
import { useState, useCallback, createContext } from 'react'

const ViewerContext = createContext([
  '',
  () => {},
  (key: string) => {}
])

export function AppMain() {
  const [viewer, setViewer] = useState('')
  const cleanViewer = useCallback(() => setViewer(''), [])
  const updateViewer = useCallback(
    (key: string) => setViewer(
      (prevState) => prevState + key
    ), []
  )

  return (
    <main>
      <Flex
        direction="column"
        align="center"
        gap="1rem"
      >
        <ViewerContainer cleanViewer={cleanViewer}>
          {viewer}
        </ViewerContainer>

        <ViewerContext.Provider value={[
          viewer,
          cleanViewer,
          updateViewer
        ]}>
          <Keyboard />
        </ViewerContext.Provider>
      </Flex>
    </main>
  )
}

export { ViewerContext }