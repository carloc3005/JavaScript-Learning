//let i = 1;

//while (i <= 5) {
//	console.log(i);
//	i++;
//}

////a loop has three parts:
//// 1. initialization: let i = 1;
//// 2. condition: i <= 5;
//// 3. increment: i++;
//for (let i = 1; i <= 5; i++) {
//	console.log(i);
//}

//let randomNumber = 0;

//while(randomNumber < 0.5) {
//	randomNumber = Math.random();
//}

//const todoList =  ['make breakfast', 'go to work', 'go to gym'];

//for (let i = 0; i < todoList.length; i++) {
//	console.log(todoList[i]);
//}

//let nums = [1, 1, 3];

//const total = 0;
//for(let i = 0; i < nums.length; i++) {
//	total += nums[i];
//}

//console.log(total);

//const numsDouble = [];
//for(let i = 0; i < nums.length; i++) {
//	numsDouble.push(nums[i] * 2);
//}

const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3];

for(let i = 1; i <= 10; i++) {
	if(i % 3 === 0) {
		continue;
	}
	console.log(i);
	if(i === 5) {
		break;
	}
}

let i = 1;

while(i <= 10) {
	if(i % 3 === 0) {
		i++;
		continue;
	}
	console.log(i);
	i++;
}


function doubleArray(nums) {
	const numsDoubled = [];

	for(let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if(num === 0) {
			return numsDoubled;
		}

		numsDoubled.push(num * 2);
	}
	return numsDoubled;

}
console.log(doubleArray([1,2,3,4,5]));
console.log(doubleArray([1,2,3,4,0,6]));