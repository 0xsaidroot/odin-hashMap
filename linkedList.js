class Node {
    constructor(key, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class linkedList {
    constructor(key, value = null) {
        this.head = new Node(key, value);
    }
    append(key, element) {
        if (this.head.key === null) {
            this.head.key = key;
            this.head.value = element;
        }
        else {
            let tmp = this.head;
            while (tmp.nextNode !== null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(key, element);
        }
    }
    prepend(key, element) {
        if (this.head.key === null) {
            this.head.key = key;
            this.head.value = element;
        }
        else {
            let tmp = this.head;
            this.head = new Node(key, element);
            this.head.nextNode = tmp;
        }
    }
    listSize() {
        if (this.head.key === null) return 0;
        else {
            let tmp = this.head;
            let count = 1;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode; count++;
            }
            return count;
        }
    }
    listHead() {
        if (this.head.key === null) return undefined;
        return `(${this.head.key},${this.head.value})`;
    }
    listTail() {
        let tmp = this.head;
        while (tmp.nextNode !== null) tmp = tmp.nextNode;

        return `(${tmp.key},${tmp.value})`;
    }
    at(key) {
        let tmp = this.head;
        while (tmp.key !== key) {
            tmp = tmp.nextNode;
        }
        return (tmp.key === key) ? `(${tmp.key},${tmp.value})` : undefined;
    }
    pop() {
        if (this.head.value === null) return undefined;

        if (this.head.nextNode === null) {
            let firstValue = this.head.value;
            this.head = new Node();
            return firstValue;
        } else {
            let firstValue = this.head.value;
            let tmp = this.head.nextNode;
            this.head = tmp;
            return firstValue;
        }
    }
    containsValue(value) {
        let tmp = this.head;
        const length = this.listSize();

        for (let i = 0; i < length; i++) {
            if (tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }
    containsKey(keyValue) {
        let tmp = this.head;
        const length = this.listSize();

        for (let i = 0; i < length; i++) {
            if (tmp.key === keyValue) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }
    findIndex(key) {
        let tmp = this.head;
        let index = 0;
        const length = this.listSize();

        for (let i = 0; i < length; i++) {
            if (tmp.key === key) return index;
            tmp = tmp.nextNode;
            index++;
        }
        return -1;
    }
    toString() {
        if (this.head.key === null) return "( )";
        else {
            let tmp = this.head;
            let formatedString = "";

            while (tmp.nextNode !== null) {
                formatedString += `(${tmp.key},${tmp.value}) -> `;
                tmp = tmp.nextNode;
            }
            formatedString += `(${tmp.key},${tmp.value}) `;
            return formatedString;
        }
    }
    insertAt(index, key, value) {
        if (index < 0 || index > this.listSize() - 1) return "RangeError";

        let tmp = this.head;
        let newNode = new Node(key, value);
        if (index === 0) {
            this.head = newNode;
        }
        else {
            let count = 1;
            while (count < index) {
                tmp = tmp.nextNode;
                count++;
            }
            let tmpNextNode = tmp.nextNode.nextNode; 
            tmp.nextNode = newNode;
            tmp = tmp.nextNode;
            tmp.nextNode = tmpNextNode;

        }

    }
    removeAt(index) {
        if (index < 0 || index > this.listSize() - 1) return "RangeError";
 
        let tmp = this.head;
        if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            let count = 1;
            while (count < index) {
                tmp = tmp.nextNode;
                count++;
            }
            let previousNode = tmp;
            tmp = tmp.nextNode;
            let nextNode = tmp.nextNode;

            previousNode.nextNode = nextNode;
        }

    }
}


// const list = new linkedList();
// list.append("FiRst", 10);
// debugger
// list.append("seCONd", 20);
// list.append("THIrd", 30);
// // list.prepend("foUrTh",40);
// list.append("FifTH", 50);


// console.log(JSON.stringify(list, null));
export { linkedList };