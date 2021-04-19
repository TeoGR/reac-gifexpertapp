import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //rendiraza todo una sola vez
    useEffect( () =>{
        getGifs(category).then( imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })                
            }, 100);

        });
    }, [ category ]);

    return state; //{ data: [], loading: true }
}
