class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class linkedList {
    constructor() {
        this.head = new Node();
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
        return (tmp.key === key ) ?`(${tmp.key},${tmp.value})` : undefined;
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
        const length = this.size();

        for (let i = 0; i < length; i++) {
            if (tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }
    containsKey(keyValue) {
        let tmp = this.head;
        const length = this.size();

        for (let i = 0; i < length; i++) {
            if (tmp.key === keyValue) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }
    findIndex(value) {
        let tmp = this.head;
        let index = 0;
        const length = this.size();

        for (let i = 0; i < length; i++) {
            if (tmp.value === value) return index;
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
    insertAt(index, ...values) {
        if (index < 0 || index > this.size() - 1) return "RangeError";

        let tmp = this.head;
        let newNodes = values.map(item => new Node(item));
        const newNodesSize = newNodes.length;

        if (index === 0) {
            this.head = newNodes[0];
            for (let i = 1; i < newNodesSize; i++) {
                let tmpHead = newNodes[i];
                this.append(tmpHead);
            }
            this.append(tmp);
        }
        else {
            let count = 1;
            while (count < index) {
                tmp = tmp.nextNode;
                count++;
            }
            let tmpNextNode = tmp.nextNode;
            for (let i = 0; i < newNodesSize; i++) {
                tmp.nextNode = newNodes[i];
                tmp = tmp.nextNode;
            }
            tmp.nextNode = tmpNextNode;

        }

    }
    removeAt(index) {
        if (index < 0 || index > this.size() - 1) return "RangeError";

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
export {linkedList };