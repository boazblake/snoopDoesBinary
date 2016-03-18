console.log($)
var calc = document.querySelector('body')
var answer = document.querySelector('.result')
var select = document.querySelectorAll('.inputBox')



function handleSnoopCalc(clickEvent){
		var inputNum = clickEvent.target.innerHTML
		console.log(inputNum)

	if(inputNum === "C") {
	answer.innerHTML = ''
	}

	else if (inputNum !== "="){
		answer.innerHTML += inputNum
	}

	else if (inputNum === "=") {
		quest = answer.innerHTML
		var result = eval(quest)

		console.log(result)
		answer.innerHTML = result + '~izzle ma nizzle' //make this random ordered
	}												
}



function handleBinaryCalc(clickEvent){
	var inputNum = clickEvent.target.innerHTML
	console.log(inputNum)
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
			console.log(newN)
			if (binDigit === 0) {
				binaryNumArray.push(binDigit)
			}
			else {binaryNumArray.push('1')
			}
			n =  n/2
			console.log(binaryNumArray)
		}
			
		answer.innerHTML = binaryNumArray.reverse()  + '~izzle ma nizzle' 
	}
}




// calc.addEventListener('click', handleSnoopCalc)
calc.addEventListener('click', handleBinaryCalc)
answer.addEventListener
//chnage opacity of bkgrnd