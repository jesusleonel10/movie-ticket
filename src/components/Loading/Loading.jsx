import PropTypes from 'prop-types'
import './Loading.scss'

const Loading = ({color}) => {
    return (
        <>
            <div className="loader" style={{ borderColor: `${color} #0000` }} ></div>
        </>
    );
}

Loading.propTypes = {
    color : PropTypes.string,
}
 
export default Loading;