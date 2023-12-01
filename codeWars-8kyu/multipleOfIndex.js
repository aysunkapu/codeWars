// DESCRIPTION:
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// 
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// 
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// 
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


function multiple(array) {
	// the filter method accepts the 2 arguments that we need:
	// 1. the Elements (el)
	// 2. the index (idx)
	// and returns an filtered array by removing the elements we don't need
	return array.filter((el, idx) => el % idx === 0);
}

console.log(multiple([22, -6, 32, 82, 9, 25]))