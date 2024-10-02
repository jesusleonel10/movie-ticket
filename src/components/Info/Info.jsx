import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TicketContext } from '../../context/ticket.jsx';
import useDataMovies from './../../hooks/useDataMovies.jsx'
import formatTime from '../../functions/formatTime.jsx';
import Cast from '../Cast/Cast.jsx';
import BtnBack from '../BtnBack/BtnBack.jsx';
import Loading from './../Loading/Loading.jsx'
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Info.scss';

const Info = () => {
    //Obtengo el id de la ruta
    const { id } = useParams();
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, true)
    
    const { ticket, setTicket } = useContext(TicketContext)

    const handleClick = (id, title, runtime) => {
        setTicket(
            {
                id: id,
                movie_name: title,
                time: runtime
            }
        )
    }
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: window.innerHeight }}
                transition={{ delay: .1, duration: .2 }}
                className='movie-info'>
                    <div className='movie-info__backdrop'>

                        <BtnBack 
                            href={'/'}
                        />
                        <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Imagen promocional de la película" />
                   
                    </div>

                    <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: window.innerHeight }}
                        transition={{ delay: .2, duration: .3 }}
                        className='movie-info__details'>
                    { loading ?
                        <Loading 
                            color={'#000'}
                        />
                    :
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
                                <button className='movie-info__btn' onClick={() => handleClick(id, data.title, formatTime(data.runtime))} >Comprar Boleto</button>
                            </NavLink>
                        </>
                    }
                    </motion.div> 
            </motion.div>
        </AnimatePresence>
    );
}
 
export default Info;