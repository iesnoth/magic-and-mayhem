//Will take its data from the dragons table in the db
//The simple view will have an image, the name of the dragon, the price, and a BUY button
//Detailed view will pop up in a modal, and contain the name, all applicable images, the price, the artist's name,the description, and the BUY button.
//At this time, the BUY button will only take the dragon out of the Gallery, put it in the buyer's pets page, and update the artist's dragons page.
//I hope we can figure this out, because it would give a cool dynamic quality to the site, even though it isn't functional as a store yet.

import './EachDragon.scss';
import { useState } from "react";

function EachDragon({ dragon }) {
    let [show, setShow] = useState(false)


    const dragonModal = () => {
        return (
            <>
                <div className={`modal ${show ? 'show' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-left">
                            <div><img src={dragon.images} alt={dragon.description} /></div>
                            <h1>{dragon.name}</h1>
                        </div>
                        <div className='modal-right'>
                            <div className="sidebar">
                                <div>Artist: {dragon.artist.name}</div>
                                <div>{dragon.price}</div>
                                <div>{dragon.description}</div>
                            </div>
                            <div className="modal-footer">
                                <button>Adopt Me!</button>
                                <button onClick={() => setShow(false)}
                                    show={show}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="eachDragon">
            <div className="simpleStyle" onClick={() => setShow(true)}>
                <div className='header'><h3>{dragon.name}</h3></div>
                <div className='simple-body'><img className="small-image" src={dragon.images} alt={dragon.description} />
                    <h4>Artist: {dragon.artist.name}</h4>
                    <h4 className="price">{dragon.price}</h4></div>
            </div>
            {dragonModal()}
        </div>
    )

}

export default EachDragon