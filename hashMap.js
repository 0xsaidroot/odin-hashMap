import { linkedList } from "./linkedList.js";

export class HashMap {

    constructor() {
        this.capacity = 16;
        this.bucket = new Array(this.capacity);
        this.loadFactor = 0.75;
        
    }

    countFilledBucket() {
        let count = 0;
        for (let i = 0; i <= this.bucket.length; i++) {
            if (this.bucket[i] !== undefined) count++;
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
        if (this.bucket[hashedKey] instanceof linkedList) {

            let list = this.bucket[hashedKey];

            if(list.containsKey(key)){
                let index = list.findIndex(key);
                list.insertAt(index,key,value);
            }else list.append(key,value);
        } else {
            this.bucket[hashedKey] = new linkedList(key,value);
        }
    }
    get(key) {
        const hashedKey = this.hash(key);
        if (this.bucket[hashedKey] === undefined) return null

        let list = this.bucket[hashedKey];
        return list.at(key);
    }
    has(key) {
        let hashedKey = this.hash(key);
        if (this.bucket[hashedKey] === null) return false;

        let list = this.bucket[hashedKey];
        return list.containsKey(key);

    }
}

let hashMap = new HashMap();
// console.log(hashMap.get('1234'));

hashMap.set("Nouredine", "1234");
hashMap.set("Nouredine", "3541");
hashMap.set("#", "1");
hashMap.set("c", "2");
hashMap.set("s", "1");
debugger
hashMap.set("#", "3");
// hashMap.set("Nouredine", "3681");
hashMap.set("Adamou", "1234");
console.log(JSON.stringify(hashMap,null));
// console.log(hashMap.get("Nouredine"));
// console.log(hashMap.this.bucket[3]);
// console.log(hashMap)
// hashMap.get("Nouredine");
// console.log(hashMap.get("Nouredine"));
// console.log(JSON.stringify(hashMap, null));
