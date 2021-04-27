import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category, inputNumber}) => {

   

    const {data:img , loading} = useFetchGifs( category, inputNumber );
    

    

    return (
        <>
            <h3 className="h3Category animate__animated animate__flipInY">{category}</h3>

            {loading && 'Cargando...'}
            


        
        
            <div className="divGrid">
            
                
            
                {
                    img.map( img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                } 
            
                
            
            </div>
        </>
        
    )
    
}
