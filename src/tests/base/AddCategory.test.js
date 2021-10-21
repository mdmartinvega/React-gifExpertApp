import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en AddCategory.js', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    })

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })  
    
    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
        
    }) 

    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
        
    }) 

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        //Simular el inputChange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        //Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //sertCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        //El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
        
    }) 


})