import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = ( category, inputNumber ) => {
    
    const [state, setState] = useState({

        data: [] ,
        loading: true,
        

    });
    
    useEffect(() => {
        
        getGifs( category, inputNumber )
            .then(imgs => {

                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false,
                        
                    })
                },1000);
            
            }); 
        
    }, [category])  

    

    return state;

}
