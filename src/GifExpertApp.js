import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp({defaultCategories = []}) {

    const [categories, setCategories ] = useState(defaultCategories)

 /*    const handleAdd = () => {
       return setCategories([...categories, 'Kamehameha']);
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => 
                    <GifGrid 
                        key={category}
                        category={category}/> )
                }
            </ol>
        </div>
       
    )
}


export default GifExpertApp

