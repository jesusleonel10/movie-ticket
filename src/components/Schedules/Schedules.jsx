import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import BtnBack from '../BtnBack/BtnBack';
import Seat from '../Seat/Seat';
import CheckItem from '../CheckItem/CheckItem';
import uniqid from 'uniqid'
import formatDate from '../../functions/formatDate';
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
                    {id: 'A3', available: false},
                    {id: 'A4', available: false},
                    {id: 'A5', available: true},
                    {id: 'A6', available: true},
                    {id: 'A7', available: true},
                    {id: 'A8', available: true},
                    {id: 'A9', available: true},
                    {id: 'B1', available: true},
                    {id: 'B2', available: false},
                    {id: 'B3', available: true},
                    {id: 'B4', available: true},
                    {id: 'B5', available: true},
                    {id: 'B6', available: true},
                    {id: 'B7', available: true},
                    {id: 'B8', available: true},
                    {id: 'B9', available: false},
                    {id: 'C1', available: false},
                    {id: 'C2', available: true},
                    {id: 'C3', available: false},
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
                    {id: 'D8', available: false},
                    {id: 'D9', available: false},
                    {id: 'E1', available: false}, 
                    {id: 'E2', available: false},
                    {id: 'E3', available: true},
                    {id: 'E4', available: true},
                    {id: 'E5', available: true},
                    {id: 'E6', available: true},
                    {id: 'E7', available: true},
                    {id: 'E8', available: true},
                    {id: 'E9', available: true},
                    {id: 'F1', available: true},
                    {id: 'F2', available: true},
                    {id: 'F3', available: true},

                ]
            },
            // dates: ['21 Feb', '22 Feb', '23 Feb', '24 Feb'],
            // times: ['15:15', '17:45', '20:35', '22:15']
            dates: [
                {   
                    id: uniqid(),
                    date: '2024-02-21',
                    times: [ '10:15', '15:15', '17:45', '20:35', '22:15']
                },
                {   
                    id: uniqid(),
                    date: '2024-02-22',
                    times: ['13:15', '15:15', '17:45', '20:35', '22:15']
                },
                {   
                    id: uniqid(),
                    date: '2024-02-23',
                    times: ['11:15', '15:15', '17:45', '20:35', '22:15']
                },
                {   
                    id: uniqid(),
                    date: '2024-02-24',
                    times: ['15:15', '17:45', '20:35', '22:15']
                }
            ]
        }
    );

    const [timesSelected, setTimesSelected] = useState(null);

    const { id } = useParams();

    return (
        <>
            <div className='seats-schedules'>
                <form action="#">
                    <div className='seats'>
                        <div className='seats__header'>
                            <BtnBack 
                                href={`/movie/${id}`}
                            />
                            <h3 className='seats__title'>Escoge tus asientos</h3>
                        </div>
                        <div className="seats__items">
                                {theater && theater.seats.list.map((seat) => {
                                    return <Seat 
                                                key={uniqid()}
                                                id={seat.id}
                                                available={seat.available}
                                            />
                                })}
                            
                        </div>
                        <div className="seats__caption">
                            <i className="fa-solid fa-square selected"></i><span>Seleccionado</span>
                            <i className="fa-solid fa-square reserved"></i><span>Reservado</span>
                            <i className="fa-regular fa-square available"></i><span>Disponible</span> 
                        </div>
                    </div>

                    <div className="schedules">
                        <div className="schedules__dates">
                            <h4>Fecha</h4>
                            <div className="dates">
                                {
                                    theater && theater.dates.map((d) => {
                                        return <CheckItem 
                                                    key={uniqid()}
                                                    id={d.id}
                                                    string={formatDate(d.date)}
                                                    type={'date'}
                                                    times={d.times}
                                                    timesSelected={timesSelected}
                                                    setTimesSelected={setTimesSelected}
                                                />
                                    })
                                }
                            </div>
                        </div>
                        <div className="schedules__time">
                            <h4>Hora</h4>
                            <div className="times">
                                {
                                    timesSelected && timesSelected.map((t) => {
                                        return <CheckItem 
                                                    key={uniqid()}
                                                    id={uniqid()}
                                                    string={t}
                                                    type={'times'}
                                                />
                                    })
                                }
                            </div>
                        </div>
                        <NavLink to={`/schedules/${id}`}>
                            <button className=''>Pagar</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Schedules;