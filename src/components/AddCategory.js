import React, {useState} from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({setCategories, categories, setInputNumber, inputNumber}) => {


    


    const [inputValue, setinputValue] = useState('');

    

    

    const handleinputChange = (e) => {

        setinputValue(e.target.value);

    };

    const handleinputNumber = (e) => {

        setInputNumber(e.target.value);

    };

    const handleSubmit = ( e ) => {

        e.preventDefault();
        
        if (categories.find(cat => cat === inputValue)) {
            alert('Este Nombre ya se ingreso')
        }else if (inputValue.trim().length > 1) {
            setCategories( categ => [inputValue, ...categ ]);
            setinputValue('');
        };
        

    };

    return (
        <form className="formGif" onSubmit = {handleSubmit}>

            <input 
            type="text"
            placeholder="Ej: Homero Simpsons"
            value={ inputValue }
            onChange={handleinputChange}
             />
            
            <label >Cantidad:</label>
            <input
            className="inputNumber"
             type="number" 
             value={ inputNumber }
             onChange={handleinputNumber}
             />
            
            <button name="boton" className="button_form">Buscar</button>
        </form>
    )

    
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

