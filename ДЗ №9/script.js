// Task #1

const numFirst = prompt('Enter the number');
console.log( numFirst , typeof numFirst );
if( numFirst === null || numFirst.trim() === '' || isNaN( +numFirst ) ) {
    alert('Error');
} else {
    console.log('Good');
}

// Task #2

const numSecond = prompt('Enter the number');
console.log ( numSecond, typeof numSecond );
switch (true) {
    case numSecond === null:
        alert('You canceled an action!');
        break;
    case numSecond.trim() === '':
        alert('Fill in an empty line!');
        break;
    case isNaN(+numSecond):
        alert('Enter the number!');
        break;
    default:
        alert('You entered a number!');
        break;
}