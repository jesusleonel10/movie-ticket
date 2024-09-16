import './Seat.scss'
import PropTypes from 'prop-types'


const Seat = ({id}) => {
    return (
        <>
            <label htmlFor={id}></label>
            <input className='check' type="checkbox" name="seat" id={id} />
        </>
    );
}

Seat.propTypes = {
    id : PropTypes.string
}
 
export default Seat;