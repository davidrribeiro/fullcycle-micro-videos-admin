import { ValueObect } from "../value-objects";

class StringValueObject extends ValueObect{
    constructor(readonly value: string){
        super();
    }
}

describe('ValueObjects Unit Tests', () =>{
    test('Should be equal', () =>{
        const valueObject = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test');
        expect(valueObject.equals(valueObject2)).toBeTruthy();
    })
})