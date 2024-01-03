document.addEventListener('keydown', (event) => {
    if (event.key != 'Backspace'
        && event.key.match('[a-zA-Z]')
        && event.key != 'Enter'
        && event.key != 'Alt'
        && event.key != 'Tab'
        && event.key != 'Shift'
        && event.key != 'Escape') {
        console.log(event.key);
        throw alert('Value is must be numaric for calculations');
       
    } else {
        console.log(event.key);
        switch (event.key) {
            case '1':
                display('1')
                break;
            case '2':
                display('2')
                break;
            case '3':
                display('3')
                break;
            case '4':
                display('4')
                break;
            case '5':
                display('5')
                break;
            case '6':
                display('6')
                break;
            case '7':
                display('7')
                break;
            case '8':
                display('8')
                break;
            case '9':
                display('9')
                break;
            case '0':
                display('0')
                break;
            case '+':
                display('+')
                break;
            case '-':
                display('-')
                break;
            case '/':
                display('/')
                break;
            case '*':
                display('*')
                break;
            case 'Enter':
                calculate()
                break;
            case 'Backspace':
                removeLastDigit()
                break;
            case 'Escape':
                clearScreen()
                break;
        }
    }
});

function removeLastDigit() {
    var data = document.getElementById('result').value;
    document.getElementById('result').value = data.slice(0, -1);
}

function clearScreen() {
    document.getElementById('result').value = "";
    document.getElementById('answer').innerHTML = "";
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var value = document.getElementById('result').value;
    if (value == "") {
        throw alert('Value is undefined for calculations');
    }
    var evaluate = eval(value);
    document.getElementById('result').value = evaluate;
    document.getElementById('answer').innerHTML = evaluate;
}