var calc = document.querySelector('body')
var answer = document.querySelector('.result')
var select = document.querySelectorAll('.inputBox')



function handleSnoopCalc(clickEvent){
		var inputNum = clickEvent.target.innerHTML

	if(inputNum === "C") {
	answer.innerHTML = ''
	}

	else if (inputNum !== "="){
		answer.innerHTML += inputNum
	}

	else if (inputNum === "=") {
		quest = answer.innerHTML
		var result = eval(quest)

		answer.innerHTML = result + '~izzle ma nizzle' //make this random ordered
	}												
}



function handleBinaryCalc(clickEvent){
	var inputNum = clickEvent.target.innerHTML
		if(inputNum === "C") {
	answer.innerHTML = ''
	}
	else if (inputNum !== "="){
		answer.innerHTML += inputNum
	}
	else if (inputNum === "=") {
		quest  = answer.innerHTML
		var n = eval(quest)
		var binaryNumArray = []
		var binDigit = ''
		var newN = n
		for (var i = n; newN>1; i--) {
			newN = Math.floor(n)
			// console.log(newN)
			binDigit = newN % 2
			if (binDigit === 0) {
				binaryNumArray.push(binDigit)
			}
			else {binaryNumArray.push('1')
			}
			n =  n/2
		}
		answer.innerHTML = binaryNumArray.reverse().toString()  + '~izzle ma nizzle' 
	}
}




// calc.addEventListener('click', handleSnoopCalc)
calc.addEventListener('click', handleBinaryCalc)
answer.addEventListener
//chnage opacity of bkgrnd