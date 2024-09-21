import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const TicketContext =  createContext()

const TicketProvider = ({children}) => {
    const [ticket, setTicket] = useState({});

    return (
        <TicketContext.Provider value={ {ticket, setTicket} } >
            {children}
        </TicketContext.Provider>
    )
}

TicketProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {TicketContext, TicketProvider}