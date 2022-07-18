import type { updateViewerCallback } from './Keyboard'

export function calculate(
  viewer: string,
  updateViewer: updateViewerCallback,
  cleanViewer: VoidFunction
){
  const operation = getOperationArray(viewer)
  const result = expressionResolve(operation)

  cleanViewer()
  updateViewer(`${result}`)
}

function getOperationArray(viewer: string){
  const operation = []
  let partialNumber = '', characterCounter = 0

  for (const character of viewer) {
    characterCounter++
    const characterIsOperator = character == '+' || character == '-' || character == 'x' || character == '/'
    const isFinalCharacter = viewer.length == characterCounter, characterIsComma = character == ','
    
    if(characterIsOperator){
      operation.push(Number(partialNumber))
      operation.push(character)
      partialNumber = ''
    }
    else if(isFinalCharacter){
      partialNumber += character
      operation.push(Number(partialNumber))
    }
    else if(characterIsComma)
      partialNumber += '.'
    else
      partialNumber += character
  }
  return operation
}

function expressionResolve(operation: (string | number)[]){
  let result = 0
  const operatorsFunctions = {
    '+': (number1: number, number2: number) => number1 + number2,
    '-': (number1: number, number2: number) => number1 - number2,
    'x': (number1: number, number2: number) => number1 * number2,
    '/': (number1: number, number2: number) => number1 / number2,
  }
  for(let index = 0; index < operation.length; index++){
    const character = operation[index]
    const characterIsOperator = character == '+' || character == '-' || character == 'x' || character == '/'
    const characterPredecessor = index - 1, characterSuccessor = index + 1
    let oneOperationHasMaded = false

    if(characterIsOperator){
      const num1 = operation[characterPredecessor], num2 = operation[characterSuccessor]
      result = operatorsFunctions[character](num1 as number, num2 as number)
      oneOperationHasMaded = true
    }

    const hasOtherCharacters = (characterSuccessor + 1) < operation.length
    if(hasOtherCharacters && oneOperationHasMaded)
      operation[characterSuccessor] = result
  }
  return result
}