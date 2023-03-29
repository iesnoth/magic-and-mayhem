//Will take its data from the dragons table in the db
//The simple view will have an image, the name of the dragon, the price, and a BUY button
//Detailed view will pop up in a modal, and contain the name, all applicable images, the price, the artist's name,the description, and the BUY button.
//At this time, the BUY button will only take the dragon out of the Gallery, put it in the buyer's pets page, and update the artist's dragons page.
//I hope we can figure this out, because it would give a cool dynamic quality to the site, even though it isn't functional as a store yet.


import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { buyDragon } from "../features/dragons/dragonSlice";

function EachDragon({ dragon }) {
    let [show, setShow] = useState(false)
    const [adopt, setAdopt] = useState({ buyerId: null })

    const { user } = useSelector((state) => state.auth)

    const { buyerId } = adopt
    const dispatch = useDispatch()

    // const adoptDragon = (event) => {
    //     event.preventDefault();

    //     dispatch(buyDragon(dragon.pet_uid))
    //     toast.success('Dragon adopted!')
    // }

    const dragonModal = () => {
        return (
            <>
                <div className={`modal ${show ? 'show' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-header">{dragon.name}</div>
                        <section className="modal-body">
                            <div>Artist: {dragon.artist.name}</div>
                            <div><img className="large-image" src={dragon.images} alt={dragon.description} /></div>
                            <div className="sidebar">
                                <div>{dragon.price}</div>
                                <div>{dragon.description}</div>
                            </div>
                        </section>
                        <div className="modal-footer">
                            <button onClick={() => setAdopt({ buyerId: user.id })}>Adopt Me!</button>
                            <button onClick={() => setShow(false)}
                                show={show}>Close</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="simpleStyle" onClick={() => setShow(true)}>
                <div><h3>{dragon.name}</h3></div>
                <div><img className="small-image" src={dragon.images} alt={dragon.description} /></div>
                <div><h4>Artist: {dragon.artist.name}</h4></div>
                <div><h4 className="price">{dragon.price}</h4></div>
            </div>
            {dragonModal()}
        </div>
    )

}

export default EachDragon