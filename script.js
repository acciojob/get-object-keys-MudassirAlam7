//your JS code here. If required.
let student = {
	name : "Mudassir alam"
}
function getKeys(obj) {
	return Object.keys(obj)
}
let keys = getKeys(student)
console.log(keys)

if(keys.includes('name')){
	console.log('yes the name key exit in the object')
}
else{
	console.log('No the name does not exit in the object')
}

