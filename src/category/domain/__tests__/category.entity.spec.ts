import { Category } from "../category.entity"
import { Uuiid } from "../value-objects/uuid.vo";

describe('Category Test Unit',()=>{
    let validateSpy: any;
    beforeEach(()=>{
        validateSpy = jest.spyOn(Category, 'validate');
    })
    describe('constructor', () =>{
        test('should create a category with default values',()=>{
            const category = new Category({
                name: 'Movie'
            });
            expect(category.category_id).toBeInstanceOf(Uuiid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBeNull();
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test('should create a category with all values', () =>{
            const created_at = new Date();
            const category = new Category({
                name: 'Movie',
                description: 'Movie Description',
                is_active: false,
                created_at
            });
            expect(category.category_id).toBeInstanceOf(Uuiid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Movie Description');
            expect(category.is_active).toBeFalsy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test('should create category with name and description', ()=>{
            const category = new Category({
                name: 'Movie',
                description: 'Movie Description'
            });
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Movie Description');
        })
    });

    describe("create command", () =>{
        test('should create a category with default values',()=>{
            const category = Category.create({
                name: 'Movie'
            });
            expect(category.category_id).toBeInstanceOf(Uuiid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBeNull();
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
            expect(validateSpy).toHaveBeenCalledTimes(1);
        })

        test('should create a category with all values', () =>{
            const category = Category.create({
                name: 'Movie',
                description: 'Movie Description',
                is_active: false,
            });
            expect(category.category_id).toBeInstanceOf(Uuiid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Movie Description');
            expect(category.is_active).toBeFalsy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test('should create category with name and description', ()=>{
            const category = Category.create({
                name: 'Movie',
                description: 'Movie Description'
            });
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Movie Description');
        })
    })
    
})