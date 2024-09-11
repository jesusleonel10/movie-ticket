import PropTypes from 'prop-types'
import './ItemCast.scss'

const ItemCast = ({photo, name}) => {
    return (
        <>
            <div className="cast-item">
                <div className="cast-item__photo">
                    <img src={`https://image.tmdb.org/t/p/original${photo}`} alt="Foto del actor o actriz de la película" />
                </div>
                <span className="cast-item__name">{name}</span>
            </div>
        </>
    );
}

ItemCast.propTypes = {
    photo : PropTypes.string,
    name : PropTypes.string
}
 

export default ItemCast;

