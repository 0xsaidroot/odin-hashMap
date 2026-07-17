import { linkedList } from "./linkedList.js";

class HashMap {

    constructor() {
        this.capacity = 16;
        this.bucketSize = new Array(this.capacity);
        // this.loadFactor = 0.75;
    }

    countFilledElement() {
        let count = 0;
        for (let i = 0; i <= this.bucketSize.length; i++) {
            if (this.bucketSize[i] !== undefined) count++;
        }
        return count;
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }
        return hashCode;
    }
    set(key, value) {
        const hashedValue = this.hash(key);
        if (this.bucketSize[hashedValue] instanceof linkedList) {
            this.bucketSize[hashedValue].append(value);
        } else {
            this.bucketSize[hashedValue] = new linkedList(value)
        }  
    }
}

let hashMap = new HashMap();


debugger
hashMap.set('nouredine','1234');
debugger
console.log(JSON.stringify(hashMap, null));
hashMap.set('noured','12');
console.log(JSON.stringify(hashMap, null));
hashMap.set('nouredine','456');
console.log(JSON.stringify(hashMap, null));
hashMap.set('nouredine','1234');
console.log(JSON.stringify(hashMap, null));
