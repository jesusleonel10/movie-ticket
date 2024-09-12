import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Movie.scss'

//Recibo el id por props para luego en el NavLink voy a la ruta con ese id
const Movie = ({id, poster}) => {
    return (
        <>
            <NavLink to={`/info/${id}`}>
                <div className="movies-list__poster">
                    <img alt="Poster de la pelicula" src={`https://image.tmdb.org/t/p/w500/${poster}`}></img>
                </div>
            </NavLink>
        </>
    );
}

Movie.propTypes = {
    poster : PropTypes.string,
    id : PropTypes.number
}
 
export default Movie;

