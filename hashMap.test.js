import { linkedList } from "./linkedList.js";
import { HashMap } from "./hashMap.js"


let newList = new linkedList();
newList.append("first", "1");
newList.append("second", "2");
newList.prepend("third", "3");

describe("LinkedList test suite", () => {
    test.skip("It should append an elemet at the head correctly", () => {
        expect(newList.toString()).toBe("(first,1) ");
    }),
    test.skip("It should append an elemet behind head correctly", () => {
        expect(newList.toString()).toBe("(first,1) -> (second,2) ");
    })
    test.skip("It should correctly prepend", () => {
        expect(newList.toString()).toBe("(third,3) -> (first,1) -> (second,2) ");
    })
    test.skip("correct listSIze", () => {
        expect(newList.listSize()).toBe(3);
    })
    test("correct listHead", () => {
        expect(newList.listHead()).toBe("(third,3)");
    })
    test.skip("correct listTail", () => {
        expect(newList.listTail()).toBe("(second,2)");
    })
    test("correct value at key ", () => {
        expect(newList.at("second")).toBe("(second,2)");
    })
})

describe("HashMap test suite",() =>{
    
})