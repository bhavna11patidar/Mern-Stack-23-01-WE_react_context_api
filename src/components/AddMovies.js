import React, {useState, useContext} from 'react'
import {movieConsumer} from './Context';


export default function AddMovies() {
    const [movies, setMovies]=useContext(movieConsumer);
    const [newMovie, setNewMovie]=useState({name:"", price:""});
    const onHandleChange=(e)=>{
        setNewMovie({...newMovie, [e.target.name]:e.target.value})
    }
    const movieSubmit=()=>{
        console.log(newMovie);
        setMovies({type:"ADD_MOVIE", payload:newMovie})
    }
    return (
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Movie Name:</label>
                            <input type="text" name="name" value={newMovie.name} onChange={onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Movie Price:</label>
                            <input type="text" name="price" value={newMovie.price} onChange={onHandleChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={movieSubmit}>Add Movie</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
