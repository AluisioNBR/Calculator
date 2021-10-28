const Viewer = {
    viewer: document.getElementById('viewer'),
    result: document.getElementById('resultMsg'),
    
    updateViewer(char){
        this.viewer.value = this.viewer.value + char
    },
    
    getExpression(){
        let chars = this.viewer.value.split(''), tempNumber = [], expression = []
        chars.push('')

        chars.forEach((char) => {
            if (char == "+" || char == "-" || char == "x" || char == "/" || char == ''){
                
                let number = ""
                tempNumber.forEach(num => {
                    number = number + num
                })

                number = Number(number)
                expression.push(number)
                expression.push(char)

                tempNumber = []
            }
            else { tempNumber.push(char) }    
        });

        expression.pop()
        return expression
    },

    operation(){
        const expression = this.getExpression()
        console.log(expression)

        let total = 0
        for (let index = 0; index < expression.length; index++) {
            let char = expression[index]
            
            if(char == "+" || char == "-" || char == "x" || char == "/"){
                let anIndex = index - 1, suIndex = index + 1, result = 0

                if(char == '+') result = expression[anIndex] + expression[suIndex]

                else if(char == '-') result = expression[anIndex] - expression[suIndex]

                else if(char == 'x') result = expression[anIndex] * expression[suIndex]

                else if(char == '/') result = expression[anIndex] / expression[suIndex]

                total = result
                expression[suIndex] = total
            }
        }

        return total
    },

    showResults(){
        const result = this.operation()

        Viewer.viewer.value = ""
        Viewer.result.innerText = `O resultado é:\n${result}`
        ResultPopUp.open()
    }
}

const Theme = {
    themes(){
        const themeList = document.getElementById('theme-list').classList
        
        if (themeList.contains('active')){
            themeList.remove('active')
        }
        else {
            themeList.add('active')
        }
    },

    whiteTheme(){
        const bodyBlack = document.body.classList

        if (bodyBlack.contains('black-theme') || localStorage.getItem('theme') == 'black'){
            const themeButton = document.getElementsByClassName('theme-button'), button = document.getElementsByClassName('button')

            // Body, header, open-themes and theme-list theme black
            bodyBlack.remove('black-theme')
            document.getElementById('header').classList.remove('black-theme')
            document.getElementById('open-themes').classList.remove('black-theme')
            document.getElementById('theme-list').classList.remove('black-theme')
            
            // Theme button and viewer theme black
            themeButton.item(0).classList.remove('black-theme')
            themeButton.item(1).classList.remove('black-theme')
            Viewer.viewer.classList.remove('black-theme')
            
            // Keyboard theme black
            button.item(0).classList.remove('black-theme')
            button.item(1).classList.remove('black-theme')
            button.item(2).classList.remove('black-theme')
            button.item(3).classList.remove('black-theme')
            button.item(4).classList.remove('black-theme')
            button.item(5).classList.remove('black-theme')
            button.item(6).classList.remove('black-theme')
            button.item(7).classList.remove('black-theme')
            button.item(8).classList.remove('black-theme')
            button.item(9).classList.remove('black-theme')
            button.item(10).classList.remove('black-theme')
            button.item(11).classList.remove('black-theme')
            button.item(12).classList.remove('black-theme')
            button.item(13).classList.remove('black-theme')
            button.item(14).classList.remove('black-theme')
            button.item(15).classList.remove('black-theme')
            button.item(16).classList.remove('black-theme')

            localStorage.setItem('theme', 'white')
        }
    },

    blackTheme(){
        const bodyBlack = document.body.classList

        if (!bodyBlack.contains('black-theme') || localStorage.getItem('theme') == 'white'){
            const themeButton = document.getElementsByClassName('theme-button'), button = document.getElementsByClassName('button')

            // Body, header, open-themes and theme-list theme black
            bodyBlack.add('black-theme')
            document.getElementById('header').classList.add('black-theme')
            document.getElementById('open-themes').classList.add('black-theme')
            document.getElementById('theme-list').classList.add('black-theme')
            
            // Theme button and viewer theme black
            themeButton.item(0).classList.add('black-theme')
            themeButton.item(1).classList.add('black-theme')
            Viewer.viewer.classList.add('black-theme')
            
            // Keyboard theme black
            button.item(0).classList.add('black-theme')
            button.item(1).classList.add('black-theme')
            button.item(2).classList.add('black-theme')
            button.item(3).classList.add('black-theme')
            button.item(4).classList.add('black-theme')
            button.item(5).classList.add('black-theme')
            button.item(6).classList.add('black-theme')
            button.item(7).classList.add('black-theme')
            button.item(8).classList.add('black-theme')
            button.item(9).classList.add('black-theme')
            button.item(10).classList.add('black-theme')
            button.item(11).classList.add('black-theme')
            button.item(12).classList.add('black-theme')
            button.item(13).classList.add('black-theme')
            button.item(14).classList.add('black-theme')
            button.item(15).classList.add('black-theme')
            button.item(16).classList.add('black-theme')

            localStorage.setItem('theme', 'black')
        }
    },
}

const ResultPopUp = {
    pop: document.getElementById('resultContent').classList,
    button: document.getElementById('msgClose'),
    
    open(){
        this.pop.add('active')
    },

    close(){
        ResultPopUp.pop.remove('active')
    }
}

const Keyboard = {
    reset(){ Viewer.viewer.value = "" },
    
    button1(){ Viewer.updateViewer("1") },
    
    button2(){ Viewer.updateViewer("2") },
    
    button3(){ Viewer.updateViewer("3") },
    
    button4(){ Viewer.updateViewer("4") },
    
    button5(){ Viewer.updateViewer("5") },
    
    button6(){ Viewer.updateViewer("6") },
    
    button7(){ Viewer.updateViewer("7") },
    
    button8(){ Viewer.updateViewer("8") },
    
    button9(){ Viewer.updateViewer("9") },
    
    button0(){ Viewer.updateViewer("0") },
    
    buttonFloat(){ Viewer.updateViewer(".") },
    
    buttonEnter(){ Viewer.showResults() },
    
    buttonPlus(){ Viewer.updateViewer("+") },
    
    buttonMinus(){ Viewer.updateViewer("-") },
    
    buttonMultiply(){ Viewer.updateViewer("x") },
    
    buttonDivide(){ Viewer.updateViewer("/") }
}

const Buttons = {
    openThemes: document.getElementById('open-themes'),
    whiteTheme: document.getElementById('whiteButton'),
    blackTheme: document.getElementById('blackButton'),
    clean: document.getElementById('clean'),
    
    keyboard: {
        button0: document.getElementById('button0'),
        button1: document.getElementById('button1'),
        button2: document.getElementById('button2'),
        button3: document.getElementById('button3'),
        button4: document.getElementById('button4'),
        button5: document.getElementById('button5'),
        button6: document.getElementById('button6'),
        button7: document.getElementById('button7'),
        button8: document.getElementById('button8'),
        button9: document.getElementById('button9'),
        buttonFloat: document.getElementById('buttonFloat'),
        buttonPlus: document.getElementById('buttonPlus'),
        buttonMinus: document.getElementById('buttonMinus'),
        buttonMultiply: document.getElementById('buttonMultiply'),
        buttonDivide: document.getElementById('buttonDivide'),
        buttonEnter: document.getElementById('buttonEnter')
    }
}

{
    if(localStorage.getItem('theme') == 'black') Theme.blackTheme()
    
    else Theme.whiteTheme()
}

// Escopo para os eventos de click nos botões
{
    Buttons.openThemes.addEventListener('click', Theme.themes)
    Buttons.whiteTheme.addEventListener('click', Theme.whiteTheme)
    Buttons.blackTheme.addEventListener('click', Theme.blackTheme)
    Buttons.clean.addEventListener('click', Keyboard.reset)
    ResultPopUp.button.addEventListener('click', ResultPopUp.close)
    
    {
        Buttons.keyboard.button0.addEventListener('click', Keyboard.button0)
        Buttons.keyboard.button1.addEventListener('click', Keyboard.button1)
        Buttons.keyboard.button2.addEventListener('click', Keyboard.button2)
        Buttons.keyboard.button3.addEventListener('click', Keyboard.button3)
        Buttons.keyboard.button4.addEventListener('click', Keyboard.button4)
        Buttons.keyboard.button5.addEventListener('click', Keyboard.button5)
        Buttons.keyboard.button6.addEventListener('click', Keyboard.button6)
        Buttons.keyboard.button7.addEventListener('click', Keyboard.button7)
        Buttons.keyboard.button8.addEventListener('click', Keyboard.button8)
        Buttons.keyboard.button9.addEventListener('click', Keyboard.button9)
        Buttons.keyboard.buttonFloat.addEventListener('click', Keyboard.buttonFloat)
        Buttons.keyboard.buttonPlus.addEventListener('click', Keyboard.buttonPlus)
        Buttons.keyboard.buttonMinus.addEventListener('click', Keyboard.buttonMinus)
        Buttons.keyboard.buttonMultiply.addEventListener('click', Keyboard.buttonMultiply)
        Buttons.keyboard.buttonDivide.addEventListener('click', Keyboard.buttonDivide)
        Buttons.keyboard.buttonEnter.addEventListener('click', Keyboard.buttonEnter)
    }
}