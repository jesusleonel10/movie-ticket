import { useParams } from 'react-router-dom';
import useDataMovies from './../../hooks/useDataMovies.jsx'
import formatTime from '../../functions/formatTime.jsx';
import Cast from '../Cast/Cast.jsx';
import BtnBack from '../BtnBack/BtnBack.jsx';
import Loading from './../Loading/Loading.jsx'
import './Info.scss';

const Info = () => {
    //Obtengo el id de la ruta
    const { id } = useParams();

    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, true)
    return (
        <>
            <div className='movie-info'>
                <BtnBack 
                    href={'/'}
                />
                <div className='movie-info__backdrop'>
                    {
                        loading ?
                        <div className='loading_backdrop'></div>
                        :
                        <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Imagen promocional de la película" />
                    }
                </div>
                <div className='movie-info__details'>
                    {
                        loading ?
                        <Loading 
                            color={'#000'}
                        />
                        :
                        (<>
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
                                <button className='movie-info__btn'>Comprar Boleto</button>
                        </>)
                    }
                </div>
            </div>
        </>
    );
}
 
export default Info;