import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    

    const [categories, setCategories] = useState([]);
    
    const [inputNumber, setInputNumber] = useState(5);

    

    

    
    
    

    return (
        <>
            <h2 className="h2_title">Buscador de Gifs</h2>   
            <AddCategory inputNumber={inputNumber} setInputNumber={setInputNumber} setCategories={setCategories} categories={categories}  />
            <hr />
            
            
            {categories.length ===0 && 'Coloque algo en el buscador...'}
            
            
            <ol>
                
                {categories.map(category => {
                    
                    
                    return <GifGrid key={category} category={category} inputNumber={inputNumber}  />    
                    
                    
                })}
                
            </ol>
        </>
    )
};
