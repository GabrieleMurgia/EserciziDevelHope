const arr = [{"type": -1,"name": "First Group"},{"type": 2,"name": "A"},{"type": 3,"name": "B"},{"type": 4,"name": "C"},{"type": -1,"name": "Second Group"},{"type": 3,"name": "B"},{"type": 4,"name": "C"},{"type": -1,"name": "Third Group"},{"type": 4,"name": "C"},{"type": 2,"name": "A"}];
const chunks = [];
let chunk = [];
arr.forEach((item) => {
	if(item.type === -1) {
		if(chunk.length) {
			chunks.push(chunk);
		}
		chunk = [];
	}
	chunk.push(item);
});
chunks.push(chunk);
console.log(chunks);