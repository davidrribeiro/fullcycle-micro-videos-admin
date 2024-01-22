import { InvalidUuidError, Uuiid } from "../uuid.vo";
import { validate as uuiValidate } from 'uuid';

describe('UUID unit tests', () =>{
    const validateSpy = jest.spyOn(Uuiid.prototype as any, 'validate');

    it('Should throw error when uuid is invalid', () =>{
        expect(() =>{
            new Uuiid('invalid-uuid');
        }).toThrowError(new InvalidUuidError);
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('Should create a valid uuid', () =>{
        const uuid = new Uuiid();
        expect(uuid.id).toBeDefined();
        expect(uuiValidate(uuid.id)).toBe(true);
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should accept a valid uuid', ()=>{
        const uuid = new Uuiid('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
        expect(uuid.id).toBe('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })
})