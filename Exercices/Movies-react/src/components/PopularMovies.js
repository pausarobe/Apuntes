import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import React,{Component} from 'react'
import moviesApi from './moviesApi'

class PopularMovies extends Component {
  constructor() {
    super()

    this.state=({
      movies: []
    })

  }

  searchPopularMovies=() => {
      moviesApi.searchPopularMovies()
        .then((resPopularMovies) => {
          let moviesPapa = resPopularMovies.map((elem)=>{
            let movie ={
              id: elem.id,
              title: elem.title,  
              img: elem.poster_path
            }
            return movie
          })
          
          this.setState({
            movies:moviesPapa
          })
        })
        .catch(function (err) {
          console.error(err)
        })
    }

  componentDidMount() {
    this.searchPopularMovies()
  }


  render() {
       return <div>
      {
        this.state.movies.map(function (movies) {
          return <div className="container">
            <div className="row">
                <article className="col-xs-12 col-sm-12 col-md-4 text-center">
                    <img className="img-responsive thumbnail" src={'https://image.tmdb.org/t/p/w640/'+ movies.img}/>
                    <h3>{movies.title}</h3>
                </article>
            </div>
        </div>
          })
        }
      }
       </div>
   }
}

export default PopularMovies



//   render() {
//        return <div>
//       {
//         this.state.movies.map(function (movies) {
//           return <div className="container">
//             <div className="row">
//                 <article className="col-xs-12 col-sm-12 col-md-4 text-center">
//                     <img className="img-responsive thumbnail" src={'https://image.tmdb.org/t/p/w640/'+ movies.img}/>
//                     <h3>{movies.title}</h3>
//                 </article>
//             </div>
//         </div>
//           })
//         }
//       }
//        </div>
//    }
// }
