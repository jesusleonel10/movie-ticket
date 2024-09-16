import { useParams } from 'react-router-dom';
import useDataMovies from './../../hooks/useDataMovies.jsx'
import formatTime from '../../functions/formatTime.jsx';
import Cast from '../Cast/Cast.jsx';
import BtnBack from '../BtnBack/BtnBack.jsx';
import Loading from './../Loading/Loading.jsx'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import './Info.scss';

const Info = () => {
    //Obtengo el id de la ruta
    const { id } = useParams();
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, true)
    return (
        <>
            <motion.div 
                className='movie-info'
                initial={{ y : 100 }}
                animate={{ y : 0 }}
                exit={{ y : '100vh' }}
                >
                <>
                    <motion.div 
                        className='movie-info__backdrop' 
                        initial={{ y : 100 }}
                        animate={{ y : 0 }}
                        exit={{ y : '100vh' }}
                        transition={{ duration: .1 }}
                        >

                        <BtnBack 
                            href={'/'}
                        />
                        <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Imagen promocional de la película" />
                   
                    </motion.div>

                    { loading ?
                    <Loading 
                        color={'#000'}
                    />
                    :

                    <motion.div 
                        className='movie-info__details'
                        initial={{ y : 50 }}
                        animate={{ y : 0 }}
                        exit={{ y : '100vh' }}   
                        transition={{ duration: .2 }}

                    >
                        {
                            <>
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
                                    <NavLink to={`/schedules/${id}`}>
                                        <button className='movie-info__btn'>Comprar Boleto</button>
                                    </NavLink>
                            </>
                        }
                    </motion.div> 
                    }
                </>
            </motion.div>
        </>
    );
}
 
export default Info;