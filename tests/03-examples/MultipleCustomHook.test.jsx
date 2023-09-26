import { fireEvent } from '@testing-library/react'
import { render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples"
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook/>', () => {

    const monkIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: monkIncrement
    })

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        
        render(<MultipleCustomHook/>)

        expect(screen.getByText('Cargando...')).toBeTruthy
        expect(screen.getByText('Breakingbad Quotes')).toBeTruthy

        const nextButton = screen.getByRole('button', { name: 'Próximo'})
        expect(nextButton.disabled).toBeTruthy

    });

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: {author: 'Francisco', quote: 'Hola mundo'},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHook/>)

        expect(screen.getByText('Hola mundo')).toBeTruthy()
        expect(screen.getByText('Francisco')).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Próximo'})
        expect(nextButton.disabled).toBeFalsy

    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: {author: 'Francisco', quote: 'Hola mundo'},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHook/>)
        const nextButton = screen.getByRole('button', { name: 'Próximo'})
        fireEvent.click(nextButton)

        expect(monkIncrement).toHaveBeenCalled()
    })
        
})