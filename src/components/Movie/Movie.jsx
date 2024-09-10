import PropTypes from 'prop-types'
import './Movie.scss'

const Movie = ({poster}) => {
    return (
        <>
            <div className="movies-list__poster">
                <img alt="Poster de la pelicula" src={`https://image.tmdb.org/t/p/w500/${poster}`}></img>
            </div>
        </>
    );
}

Movie.propTypes = {
    poster : PropTypes.string,
}
 
export default Movie;

