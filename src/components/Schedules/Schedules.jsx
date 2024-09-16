import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BtnBack from '../BtnBack/BtnBack';
import Seat from '../Seat/Seat';
import uniqid from 'uniqid'
import './Schedules.scss'

const Schedules = () => {
    const [theater, setTheater] = useState(
        {
            room: '01',
            id: uniqid(),
            seats: {
                total_seats: 44,
                list: [
                    {id: 'A1', available: true},
                    {id: 'A2', available: true},
                    {id: 'A3', available: true},
                    {id: 'A4', available: true},
                    {id: 'A5', available: true},
                    {id: 'A6', available: true},
                    {id: 'A7', available: true},
                    {id: 'A8', available: true},
                    {id: 'A9', available: true},
                    {id: 'B1', available: true},
                    {id: 'B2', available: true},
                    {id: 'B3', available: true},
                    {id: 'B4', available: true},
                    {id: 'B5', available: true},
                    {id: 'B6', available: true},
                    {id: 'B7', available: true},
                    {id: 'B8', available: true},
                    {id: 'B9', available: true},
                    {id: 'C1', available: true},
                    {id: 'C2', available: true},
                    {id: 'C3', available: true},
                    {id: 'C4', available: true},
                    {id: 'C5', available: true},
                    {id: 'C6', available: true},
                    {id: 'C7', available: true},
                    {id: 'C8', available: true},
                    {id: 'C9', available: true},
                    {id: 'D1', available: true},
                    {id: 'D2', available: true},
                    {id: 'D3', available: true},
                    {id: 'D4', available: true},
                    {id: 'D5', available: true},
                    {id: 'D6', available: true},
                    {id: 'D7', available: true},
                    {id: 'D8', available: true},
                    {id: 'D9', available: true},
                    {id: 'E1', available: true}, 
                    {id: 'E2', available: true},
                    {id: 'E3', available: true},
                    {id: 'E4', available: true},
                    {id: 'E5', available: true},
                    {id: 'E6', available: true},
                    {id: 'E7', available: true},
                    {id: 'E8', available: true},

                ]
            },
            dates: ['21 Feb', '22 Feb', '23 Feb', '24 Feb'],
            times: ['15:15', '17:45', '20:35', '22:15']
        }
    );
    const { id } = useParams();

    return (
        <>
            <div className='seats-schedules'>
                <div className='seats'>
                    <div className='seats__header'>
                        <BtnBack 
                            href={`/movie/${id}`}
                        />
                        <h3 className='seats__title'>Escoge tus asientos</h3>
                    </div>
                    <div className="seats__items">
                        <form action="#">
                        {theater && theater.seats.list.map((item) => {
                            return <Seat 
                                        key={uniqid()}
                                        id={item.id}
                                    />
                        })}

                        </form>
                    </div>
                    <div className="seats__caption">
                        <i className="fa-solid fa-square selected"></i><span>Seleccionado</span>
                        <i className="fa-solid fa-square reserved"></i><span>Reservado</span>
                        <i className="fa-regular fa-square available"></i><span>Disponible</span> 
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Schedules;