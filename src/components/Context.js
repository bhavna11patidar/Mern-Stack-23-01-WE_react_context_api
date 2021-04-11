import React, {createContext, useState, useReducer} from 'react'

export const movieConsumer=createContext();
export function MovieProvider(props) {


    const reducer=(movies, action)=>{
        switch(action.type){
            case "ADD_MOVIE":
                return [...movies, action.payload];
            case "DELETE_MOVIE":
                return movies.filter((d,i)=>{return d.id!=action.payload});
            default:
                return movies
        }
    }
    const initialMovies=[
        {
            id:1,
            name:"Dr Strange",
            price:"350$"
        },
        {
            id:2,
            name:"Avengers",
            price:"450$"
        }, 
        {
            id:3,
            name:"IT",
            price:"300$"
        },
        {
            id:4,
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
