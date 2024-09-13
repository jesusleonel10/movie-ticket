import Logo from './../../../public/vite.svg'
import './Home.scss'
import useDataMovies from './../../hooks/useDataMovies.jsx'
import uniqid from 'uniqid'
import Movie from '../Movie/Movie.jsx'
import Loading from './../Loading/Loading.jsx'
import { motion } from 'framer-motion'

const Home = () => {
    const { data, loading } = useDataMovies(`https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1`, true)

    return (
        <div className="movies-list">
            <motion.div 
                className="movies-list__header"

                initial={{ y : 100 }}
                animate={{ y : 0 }}
                exit={{ y : '100vh' }}
                transition={{ duration: .2 }}
            >
                <div className="movies-list__logo">
                    <img src={Logo} alt="Logo del cine" />
                </div>
                <h2 className='movies-list__title'>Cartelera</h2>
            </motion.div>
            {
                loading ?
                <Loading 
                    color={'#fff'}
                />
                :          
                <motion.div 
                    className='movies-list__posters'

                    initial={{ y : 100 }}
                    animate={{ y : 0 }}
                    exit={{ y : '100vh' }}
                    transition={{ duration: .3 }}
                >
                    {data.results && (
                        data.results.map((element) => {
                            return <Movie 
                                id={element.id}
                                key={uniqid()}
                                poster={element.poster_path}
                            />
                        })
                    )    } 
                </motion.div>
                }
        </div>
    );
}
 
export default Home;