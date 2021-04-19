import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'DBZ']

    const [categories, setCategories] = useState(['DBZ']);
/*
    const handleAdd = () =>{
        //Mala practica, no se debe mutar el objeto original
        //categories.push('Naruto');

        //debo usar el setcategories para que react renderize de nuevo, las dos lineas siguientes son correctas
        setCategories( [...categories, 'Naruto']);
        //setCategories( cats => [...cats, 'Naruto']);
    }
*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category => 
                        //return <li key={ category }>{ category }</li>
                        <GifGrid key={category} category={category}/>
                    )
                }  
            </ol>
            
        </>
    )
}

