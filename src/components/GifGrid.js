import React/*, {useState, useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);

    //custoHook
    const {data: images, loading} = useFetchGifs(category);
        
    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{ category }</h3>

            {loading && <p className="animate__animated animate__backInLeft">Cargando...</p>}

            <div className="card-grid">
                {/* <ol>
                    {
                        images.map( ({id, title})=> (
                            <li key={id}>{title}</li>
                        ))
                    }
                </ol> */}

                {
                    images.map( (img)=> (
                        <GifGridItem 
                            key={img.id} 
                            // img = {img}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
