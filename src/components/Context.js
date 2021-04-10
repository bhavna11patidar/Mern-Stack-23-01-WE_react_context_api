import React, {createContext, useState, useReducer} from 'react'

export const movieConsumer=createContext();
export function MovieProvider(props) {


    const reducer=(movies, action)=>{
        switch(action.type){
            case "ADD_MOVIE":
                return [...movies, action.payload]
            default:
                return movies
        }
    }
    const initialMovies=[
        {
            name:"Dr Strange",
            price:"350$"
        },
        {
            name:"Avengers",
            price:"450$"
        }, 
        {
            name:"IT",
            price:"300$"
        },
        {
            name:"GOT",
            price:"550$"
        }
    ];

    const [movies, setMovies]=useReducer(reducer, initialMovies);
    return (
        <movieConsumer.Provider value={[movies, setMovies]}>
            {props.children}
        </movieConsumer.Provider>
    )
}
