var fruit = ['', 'apple', 'orange', 'pineapple', 'mango', 'pear', 'lemon', 'plum'];

var ask_user = prompt('Welcome! want to play my guessing game of seven fruits? type 1 for yes or 0 for no ')
    
    if (ask_user == 1) {
        for (let index = 1; index < fruit.length; index++) {
            const element = fruit[index];
            
            var quiz=prompt("Fruit " + index + " is " + element + ' what is the next fruit? ')
    
            if (quiz == fruit[index+1]) {
                alert('correct!')
            } else if (quiz == null) {
                alert('See you again!')
                break
            } else {
                alert('wrong! try again later.')
                break
            }
        }
    
    } else {
        alert('See you again!')
    }


function dataProcessing() {
    var fname = document.getElementById("fname").value
    var age = document.getElementById("age").value
    var ageDifference = (18 - fname);

    if (age >= 18) {
        alert(`Congratulations ${fname}! You're old enough to own a car.`)
    } else {
        alert(`Sorry ${fname}! You're not old enough to own a car. Come back in ${ageDifference} years' time`)
    }
}