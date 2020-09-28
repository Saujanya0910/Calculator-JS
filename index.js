function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /^[0-9]+([,.][0-9]+)?$/g;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) {
            theEvent.preventDefault();
        }
    }
}

function insert(input) {
    document.calculator.display.value += input 
}

function clean() {
    document.calculator.display.value = "";
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
        document.calculator.display.value = eval(expr).toFixed(6)
    }
    else
        alert('Input is blank!')
}

window.addEventListener('keydown', (e) => {
    // for operators
    if(e.which == 107 || e.which == 109 || e.which == 111 || e.which == 106
        || e.which == 191 || e.key == '%' || e.key == '(' || e.key == ')') {
        insert(e.key)
    }
    
    if(  e.key == '^' ) {
        insert('**')
    }

    // for numbers(numpad) & decimal
    if(e.which == 110 || e.which == 96 || e.which == 97 || e.which == 98
        || e.which == 99 || e.which == 100 || e.which == 101 || e.which == 102
        || e.which == 103 || e.which == 104 || e.which == 105 || e.which == 190) {
        insert(e.key)
    }

    // for enter and = buttons (res)
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
