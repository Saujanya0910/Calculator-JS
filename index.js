function validate(evt) {
    var theEvent = evt || window.event
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain')
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which
        key = String.fromCharCode(key)
    }
    var regex = /[0-9]|\.|\n/
    if( !regex.test(key) ) {
        theEvent.returnValue = false
        if(theEvent.preventDefault) {
            theEvent.preventDefault()
        }
    }
}

function insert(input) {
    document.calculator.display.value += input 
}

function clean() {
    document.calculator.display.value = ""
}

function cleanEntry() {
    var expr = document.calculator.display.value
    expr = expr.slice(0, expr.length - 1)
    document.calculator.display.value = expr
}

function res() {
    var expr = document.calculator.display.value
    if(expr)
    {
        document.calculator.display.value = eval(expr)
    }
    else
        alert('Input is blank!')
}

window.addEventListener('keydown', (e) => {

    // for operators
    if( e.key == '/' || e.key == '*' || e.key == '+' || e.key == '-' || e.key == '%'
        || e.key == '(' || e.key == ')' ) {
        insert(e.key)
    }
    if( e.key == '^' ) {
        insert('**')
    }

    // for numbers & decimal
    if( e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 
        || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == '.' ) {
            insert(e.key)
    }

    // for 'enter' and '=' button (res)
    if(e.which == 13 || e.which == 187) {
        res()
    }

    // for delete(clear) and backspace(clearEntry)
    if(e.which == 46) {
        clean()
    }
    if(e.which == 8) {
        cleanEntry()
    }
})
