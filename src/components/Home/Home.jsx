import Logo from './../../../public/vite.svg'
import './Home.scss'
import useDataMovies from './../../hooks/useDataMovies.jsx'
import uniqid from 'uniqid'
import Movie from '../Movie/Movie.jsx'
import Loading from './../Loading/Loading.jsx'

const Home = () => {
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1`, true)

    return (
        <>
            <div className="movies-list">
                <div className="movies-list__logo">
                    <img src={Logo} alt="Logo del cine" />
                </div>
                <h2 className='movies-list__title'>Cartelera</h2>
                {
                    loading ?
                    <Loading 
                        color={'#fff'}
                    />
                    :          
                    <div className='movies-list__posters'>
                        {data.results && (
                            data.results.map((element) => {
                                return <Movie 
                                    id={element.id}
                                    key={uniqid()}
                                    poster={element.poster_path}
                                />
                            })
                        )    } 
                    </div>
                    }
            </div>
        </>
    );
}
 
export default Home;