import './Home.scss'
import useDataMovies from './../../hooks/useDataMovies.jsx'
import uniqid from 'uniqid'
import Movie from '../Movie/Movie.jsx'
import Loading from './../Loading/Loading.jsx'

const Home = () => {
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1`, true)

    return (
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <span>Cineteca</span>
                    </div>
                    <h2 className='header__title'>Cartelera</h2>
                </div>      
            
                <div className="movies-list">
                    {loading ?
                        <Loading 
                            color={'#000'}
                        />
                    :
                        data.results &&
                            data.results.map((element) => {
                                return <Movie 
                                    id={element.id}
                                    key={uniqid()}
                                    poster={element.poster_path}
                                />
                            })
                    }
                </div>          
            </div> 
    );
}
 
export default Home;