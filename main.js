// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}
// 	append(value) {
// 		const newNode = new Node(value);

// 		if (!this.head) {
// 			this.head = newNode;
// 			return;
// 		}
// 		let current = this.head;
// 		while (current.nextNode !== null) {
// 			current = current.nextNode;
// 		}

// 		current.nextNode = newNode;
// 	}
// 	prepend(value) {
// 		const newNode = new Node(value);

// 		if (!this.head) {
// 			this.head = newNode;
// 			return;
// 		}

// 		newNode.nextNode = this.head;

// 		this.head = newNode;
// 		return;
// 	}
// 	size() {
// 		let count = 0;
// 		let current = this.head;

// 		while (current !== null) {
// 			count++;
// 			current = current.nextNode;
// 		}

// 		return count;
// 	}
// 	getHead() {
// 		return this.head.value;
// 	}
// 	tail() {
// 		if (!this.head) return null;
// 		let current = this.head;

// 		while (current.nextNode !== null) {
// 			current = current.nextNode;
// 		}
// 		return current;
// 	}
// 	at(index) {
// 		if (!this.head) return null;

// 		let current = this.head;
// 		let currentIndex = 0;

// 		while (current !== null && currentIndex < index) {
// 			current = current.nextNode;
// 			currentIndex++;
// 		}
// 		return current;
// 	}
// 	pop() {}
// 	contains(value) {
// 		if (!this.head) return null;

// 		let current = this.head;

// 		while (current.value !== value) {
// 			current = current.nextNode;
// 			if (current.value === value) return true;
// 		}

// 		return false;
// 	}
// 	findIndex(value) {}
// 	toString() {}
// }
// class Node {
// 	constructor(value = null) {
// 		this.value = value;
// 		this.nextNode = null;
// 	}
// }

// const list = new LinkedList();

// list.append(1);
// list.append(15);

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}
		current.nextNode = newNode;
	}

	prepend(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}

		newNode.nextNode = this.head;
		this.head = newNode;
	}

	size() {
		let count = 0;
		let current = this.head;

		while (current !== null) {
			current = current.nextNode;
			count++;
		}
		return count;
	}

	getHead() {
		if (!this.head) return undefined;
		return this.head;
	}

	tail() {
		if (!this.head) return undefined;
		let current = this.head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}
		return current;
	}
	at(index) {
		if (!this.head) return undefined;
		let current = this.head;
		let indexCount = 0;
		while (current !== null) {
			if (index === indexCount) return current;
			current = current.nextNode;
			indexCount++;
		}
		return current;
	}
	pop() {
		if (!this.head) return undefined;
		const size = this.size();
		if (size === 1) {
			this.head = null;
			return;
		}
		const secondToTheLastIndex = size - 2;

		const nodeToPop = this.at(secondToTheLastIndex);
		nodeToPop.nextNode = null;
	}
	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (value === current.value) return true;
			current = current.nextNode;
		}
		return false;
	}
	findIndex(value) {
		let current = this.head;
		let count = 0;
		while (current !== null) {
			if (value === current.value) return count;
			current = current.nextNode;
			count++;
		}
		return -1;
	}
	toString() {
		let current = this.head;
		let nodeOfString = '';
		while (current !== null) {
			nodeOfString += `( ${current.value} ) -> `;
			current = current.nextNode;
		}
		return nodeOfString + 'null';
	}
	insertAt(index, ...value) {
		let idx = index;
		value.forEach((item) => {
			let newNode = new Node(item);
			if (!this.head) return undefined;
			if (idx === 0) {
				this.prepend(item);
				return;
			}
			if (idx > this.size() - 1) return RangeError;
			if (idx < 0) return RangeError;

			const prevNode = this.at(idx - 1);
			const nextNode = prevNode.nextNode;

			prevNode.nextNode = newNode;
			newNode.nextNode = nextNode;
			idx++;
		});
	}
	removeAt(index) {
		if (!this.head) return undefined;
		if (idx > this.size() - 1) return RangeError;
		if (idx < 0) return RangeError;

		const prevNode = this.at(idx - 1);
		const nextNode = prevNode.nextNode;

		prevNode.nextNode = newNode;
		newNode.nextNode = nextNode;
	}
}

class Node {
	constructor(value = null) {
		this.value = value;
		this.nextNode = null;
	}
}

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
console.log(list);
// console.log(list.at(6));
console.log(list.at(1));
console.log(list.size());
console.log(list.toString());
// console.log(list.at(0));
