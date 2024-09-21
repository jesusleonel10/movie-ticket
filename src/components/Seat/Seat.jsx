import './Seat.scss'
import PropTypes from 'prop-types'


const Seat = ({id, available}) => {
    return (
        <>
            <label className='hidden-visually' htmlFor={id}></label>
            <input className='check' type="checkbox" name="seat" id={id} value={id} disabled={available ? null : 'disabled'} />
        </>
    );
}

Seat.propTypes = {
    id : PropTypes.string,
    available: PropTypes.bool
}
 
export default Seat;