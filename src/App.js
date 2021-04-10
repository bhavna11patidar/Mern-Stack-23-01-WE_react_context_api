import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddMovies from './components/AddMovies';
import ViewMovies from './components/ViewMovies';
import {MovieProvider} from './components/Context';
function App() {
  return (
    <div className="App">
      
     <Router>
       <MovieProvider>
        <Header></Header>
        <Route exact path="/" component={ViewMovies}/>
        <Route exact path="/add-movies" component={AddMovies}/>
        </MovieProvider>

     </Router>
     
    </div>
  );
}

export default App;
