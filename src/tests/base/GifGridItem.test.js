import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba en GifGridItem.js', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);


    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })    

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })   
    
    test('Debe tener la img igual al url y alt de props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('Debe tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
        

    })

})