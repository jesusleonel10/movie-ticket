import './Home.scss'
import useDataMovies from './../../hooks/useDataMovies.jsx'
import uniqid from 'uniqid'
import Movie from '../Movie/Movie.jsx'
import Loading from './../Loading/Loading.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1`, true)

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: window.innerHeight }}
                transition={{ delay: .1, duration: .2 }}

                className="container">
                <div className="header">
                    <div className="header__logo">
                        <span>Cineteca Logo</span>
                    </div>
                    <h2 className='header__title'>Cartelera</h2>
                </div>      
            
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: window.innerHeight }}
                    transition={{ delay: .2, duration: .3 }}
                    className="movies-list">
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
                </motion.div>          
            </motion.div>
            </AnimatePresence>
    );
}
 
export default Home;