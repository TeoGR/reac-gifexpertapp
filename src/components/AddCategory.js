import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        //tomar el nuevo valor que tiene el input
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //para no recargar la pagina entera
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}