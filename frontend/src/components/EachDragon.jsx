//Will take its data from the dragons table in the db
//The simple view will have an image, the name of the dragon, the price, and a BUY button
//Detailed view will pop up in a modal, and contain the name, all applicable images, the price, the artist's name,the description, and the BUY button.
//At this time, the BUY button will only take the dragon out of the Gallery, put it in the buyer's pets page, and update the artist's dragons page.
//I hope we can figure this out, because it would give a cool dynamic quality to the site, even though it isn't functional as a store yet.


import { useState } from "react";

function EachDragon({ dragon }) {
    let [show, setShow] = useState(false)


    const dragonModal = () => {
        return (
            <>
                <div className={`modal ${show ? 'show' : ''}`}>
                    <p>This is large style</p>
                    <p>It will show up in a modal.</p>
                    <p>It will contain name, images, artist name, price, description, and an "adopt" button</p>
                    <button>Adopt Me!</button>
                    <button onClose={() => setShow(false)}
                    show={show}>Close</button>
                </div>
            </>
        )
    }

    return(
        <div>
            <div className="simpleStyle" onClick={() => setShow(true)}>
                    <div><h3>{dragon.name}</h3></div>
                    <div><img className="small-image" src={dragon.images} alt={dragon.description} /></div>
                    <div><h4>Artist: {dragon.artist.name}</h4></div>
                    <div><h4 className="price">{dragon.price}</h4></div>         
                </div>
        </div>
    )

}

export default EachDragon