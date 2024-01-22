import { ValueObect } from "../../../shared/domain/value-objects"
import { v4 as uuidv4, validate as uuiValidate } from 'uuid';

export class Uuiid extends ValueObect{
   readonly id: string;
   constructor(id?: string){
        super()
        this.id = id || uuidv4();
        this.validate();
   }

   private validate(){
    const isValid = uuiValidate(this.id);
    if(!isValid){
        throw new Error('Invalid UUID');
    }
   }
}

export class InvalidUuidError extends Error{
    constructor(message?: string){
        super(message || 'Invalid UUID');
        this.name = 'InvalidUuidError';
    }
}