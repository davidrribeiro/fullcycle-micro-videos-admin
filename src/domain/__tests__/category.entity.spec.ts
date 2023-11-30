import { Category } from "../../category.entity"

describe('Category Test Unit',()=>{
    test('constructor',()=>{
        const category = new Category({
            name: 'Movie'
        });
        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe('Movie');
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    })
})