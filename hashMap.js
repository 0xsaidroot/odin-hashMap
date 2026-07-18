import { linkedList } from "./linkedList.js";

class HashMap {

    loadFactor = 0.75;
    capacity = 16;
    constructor() {
        this.bucketSize = new Array(this.capacity);
    }

    countFilledBucket() {
        let count = 0;
        for (let i = 0; i <= this.bucketSize.length; i++) {
            if (this.bucketSize[i] !== undefined) count++;
        }
        return count;
    }

    hash(key) {
        let hashCode = 0;
        const capacity = 16;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }
        return hashCode;
    }
    set(key, value) {
        const hashedKey = this.hash(key);
        if (this.bucketSize[hashedKey] instanceof linkedList) {
            this.bucketSize[hashedKey].append(value);
        } else {
            this.bucketSize[hashedKey] = new linkedList(value)
        }  
    }
    get(key){
        const hashedKey = this.hash(key);
        if(this.bucketSize[hashedKey] === undefined) return null
        else{
            let list = this.bucketSize[hashedKey];
            return list.toString();
        }
    }
}

let hashMap = new HashMap();

// debugger
console.log(hashMap.get('1234'));
hashMap.set("Nouredine","1234");
console.log(hashMap.get("Nouredine"));
console.log(JSON.stringify(hashMap, null));
