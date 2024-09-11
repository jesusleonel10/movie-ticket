import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import './BtnBack.scss'

const BtnBack = ({href}) => {
    return (
        <>
            <NavLink to={href}>
                    <div className='btn-back'>
                        <button>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>
            </NavLink>
        </>
    );
}

BtnBack.propTypes = {
    href : PropTypes.string,
}

export default BtnBack;