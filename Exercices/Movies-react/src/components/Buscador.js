//import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import React,{Component} from 'react'
import '../styles/NavBar.css';

class Buscador extends Component {

   render() {
       return <div><form id="search" >
            <h1>Titulo</h1>
            <input id="query" className="input-lg" type="text" />
            <input className="btn btn-lg btn-primary" type="submit" value="search movies"/>
        </form>
        </div>
   }
}

export default Buscador


// onSubmit={this.searchBeers}
// onChange={this.onTextChange}
// //value={this.state.text}