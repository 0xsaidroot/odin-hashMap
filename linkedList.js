class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class linkedList {
    constructor(value) {
        this.head = new Node(value);
    }
    append(element) {
        if (this.head.value === null) this.head.value = element;
        else {
            let tmp = this.head;
            while (tmp.nextNode !== null) tmp = tmp.nextNode;
            tmp.nextNode = element instanceof Node ? element : new Node(element);
        }
    }
    prepend(element) {
        if (this.head.value === null) this.head.value = element;
        else {
            let tmp = this.head;
            this.head = element instanceof Node ? element : new Node(element);
            this.head.nextNode = tmp;
        }
    }
    size() {
        if (this.head.value === null) return 0;
        else {
            let tmp = this.head;
            let count = 1;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode; count++;
            }
            return count;
        }
    }
    header() {
        if (this.head.value === null) return undefined;
        return this.head.value;
    }
    tail() {
        let tmp = this.head;
        while (tmp.nextNode !== null) tmp = tmp.nextNode;

        return tmp.value;
    }
    at(index) {
        const length = this.size();
        if (index < 0 || index > length - 1) return undefined;

        let tmp = this.head;
        let count = 1;
        while (count <= index) {
            tmp = tmp.nextNode;
            count++;
        }
        return tmp.value;

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
    contains(value) {
        let tmp = this.head;
        const length = this.size();

        for (let i = 0; i < length; i++) {
            if (tmp.value === value) return true;
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
        if (this.head.value === null) return "( ) ->  null";
        else {
            let tmp = this.head;
            let formatedString = "";

            while (tmp.nextNode !== null) {
                formatedString += `(${tmp.value}) -> `;
                tmp = tmp.nextNode;
            }
            formatedString += `(${tmp.value}) -> null`;
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


const list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(40);
list.append(50);


// console.log(JSON.stringify(list, null, 2));
export { list, linkedList };