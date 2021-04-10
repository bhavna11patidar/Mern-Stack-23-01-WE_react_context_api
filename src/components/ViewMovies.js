import React, {useContext} from 'react';
import {movieConsumer} from './Context';

export default function ViewMovies() {
    const [movies, setMovies]=useContext(movieConsumer);
    console.log(movies);
    return (
        <div className="container">
            <div className="row justify-content-center">
                {movies.map((data,index)=>(
                <div className="col-md-4 card p-5 mt-4">
                    <h3>Name: {data.name} </h3>
                    <p>Price: {data.price}  </p>
                </div>
                ))}
            </div>       
        </div>
    )
}
