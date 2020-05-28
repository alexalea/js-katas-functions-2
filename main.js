//Kata 1: Add

function add(a, b) {
    return a + b
  }
console.log('Kata 1:',add(2, 4))

//Kata 2: Multiply

function multiply(a, b) {
    let answer = 0
    for (let i = 0; i < b; i++){
       //answer = answer+a
       answer = add(answer, a)
    }
    return answer
}
console.log('Kata 2:',multiply(2, 5))


// Kata 3: Power/Exponentiation

//function power(a, b) {
  //power = Math.pow
  //return power
//}
//console.log('Kata 3:', Math.pow(2, 8))

//Kata 3: Power

function power(num, n) {
    results = 1;
    for (let x = 0; x < n; x +=1) {
       results = multiply(num, results) 
    }
    return results
  }
  console.log('Kata 3', power(5, 2));



// Kata 4: Factorial

    function factorial(num) {
        results = 1;
        for (let x = num; x > 0; x -= 1) {
           results = multiply(x, results) 
        }
        return results
      }
      console.log('Kata 4', factorial(5))


// Kata 5: Fibonacci

function fibonacci(number) {

	let sequence = [0, 1];

	for (let i = 2; i < number; i++) {
		sequence[i] = add(sequence[add(i,-1)], sequence[add(i,-2)]);
	}

	return sequence[add(number,-1)];
}

console.log('Kata 5', fibonacci(8))