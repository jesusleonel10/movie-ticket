import { useParams } from 'react-router-dom';
import useDataMovies from './../../hooks/useDataMovies.jsx'
import formatTime from '../../functions/formatTime.jsx';
import Cast from '../Cast/Cast.jsx';
import { NavLink } from 'react-router-dom';
import './Info.scss';

const Info = () => {
    //Obtengo el id de la ruta
    const { id } = useParams();

    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, true)
    return (
        <>
            <div className='movie-info'>
                <NavLink to={"/"}>
                    <div className='btn-back'>
                        <button>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>
                </NavLink>
                <div className='movie-info__backdrop'>
                    <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Imagen promocional de la pelicula" />
                </div>
                <div className='movie-info__details'>
                    <h3 className='movie-info__title'>{data.original_title}</h3>
                    <div className='movie-info__genres'>{data.genres && data.genres.slice(0,3).map((element, index) => {
                        return <span key={index}>{element.name}</span>
                    })}</div>
                    <span className='movie-info__runtime'>{formatTime(data.runtime)}</span>
                    <p className='movie-info__overview'>{data.overview}</p>
                    <div className='movie-info__cast'>
                        <h4>Reparto</h4>
                        <Cast
                            idMovie={id}
                        />
                    </div>
                </div>
                <button>Comprar Boleto</button>
            </div>
        </>
    );
}
 
export default Info;