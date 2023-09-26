import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = {
        id: '1',
        description: 'Demo todo',
        done: false
    }

    test('debe de regresar el estado inicial', () => {

        const newStat = todoReducer(initialState, {});
        expect(newStat).toBe(initialState);

     });

     test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: '2',
                description: 'Aprender React',
                done: false
            }
        };

        // console.log(initialState);

        // const newStat = todoReducer(initialState, action);
        // expect(newStat.length).toBe(2);
        // expect(newStat).toContain(action.payload);

     });

     test('debe de eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newStat = todoReducer(initialState, action);
        // expect(newStat.length).toBe(0);
        // expect(newStat).not.toContain(action.payload);

     });

     test('debe de realizar el toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newStat = todoReducer(initialState, action);
        expect(newStat.done).toBe(true);

     });
})