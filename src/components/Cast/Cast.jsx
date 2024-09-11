import ItemCast from "../ItemCast/ItemCast";
import PropTypes from 'prop-types'
import useFetchData from "../../hooks/useDataMovies";
import uniqid from 'uniqid'
import './Cast.scss'

const Cast = ({idMovie}) => {

    const { data, loading } = useFetchData(`https://api.themoviedb.org/3/movie/${idMovie}/credits`, true)
    return (
        <>
            <div className="cast">
                {
                    data.cast && data.cast.slice(0,4).map((element) => {
                        return <ItemCast
                                key={uniqid()} 
                                photo={element.profile_path}
                                name={element.name}
                        />
                    })
                    
                }
            </div>
        </>
    );
}

Cast.propTypes = {
    idMovie : PropTypes.string,
}
 
export default Cast;