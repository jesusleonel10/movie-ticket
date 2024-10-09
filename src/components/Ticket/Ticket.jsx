import { motion, AnimatePresence } from "framer-motion";
import { useContext } from 'react';
import { TicketContext } from '../../context/ticket';
import html2canvas from "html2canvas";

import BtnClose from "../BtnClose/BtnClose";
import './Ticket.scss'

const Ticket = () => {
    const { ticket } = useContext(TicketContext)

    const handleImageDownload = async() => {
        const element = document.getElementById('ticket-print'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');

        link.href = data;
        link.download = 'downloaded-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <AnimatePresence>
            <motion.div 
                className="ticket"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: window.innerHeight }}
                transition={{ delay: .1, duration: .2 }}
                >
                <div className="ticket__img">
                    <BtnClose href={'/'} />

                    
                </div>
                <motion.div 
                    className="ticket__button"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: window.innerHeight }}
                    transition={{ delay: .2, duration: .3 }}
                    >

                    <div id="ticket-print" className="cardWrap">
                        <div className="card cardLeft">
                            <h1><span>Cinema</span></h1>
                            <div className="title">
                            <h2>{ticket.movie_name}</h2>
                            <span>película</span>
                            </div>
                            <div className="name">
                            <h2>Vladimir Kudino</h2>
                            <span>nombre</span>
                            </div>
                            <div className="seat">
                            <h2 className="seats__item">{ticket.schedules_seats.seat}</h2>
                            <span>asiento</span>
                            </div>
                            <div className="time">
                            <h2>{ticket.schedules_seats.time}</h2>
                            <span>hora</span>
                            </div>
                            
                        </div>
                        <div className="card cardRight">
                            <div className="eye"></div>
                            <div className="number">
                            <h3>{ticket.schedules_seats.seat}</h3>
                            <span>asiento</span>
                            </div>
                            <div className="barcode"></div>
                        </div>
                    </div>
                    <button className="btn-download" onClick={handleImageDownload} >Descargar</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
 
export default Ticket;