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
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function insert(num) {
    document.calculator.display.value += num 
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
        document.calculator.display.value = eval(expr).toFixed(7)
    }
    else
        alert('Input is blank!')
}