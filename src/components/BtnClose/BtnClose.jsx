import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './BtnClose.scss'

const BtnClose = ({href}) => {

    return (
        <>
            <NavLink to={href}>
                    <div className='btn-close'>
                        <button>
                            <i className="fa-solid fa-close"></i>
                        </button>
                    </div>
            </NavLink>
        </>
    );
}

BtnClose.propTypes = {
    href : PropTypes.string,
}

export default BtnClose;