//Will take its data from the dragons table in the db
//The simple view will have an image, the name of the dragon, the price, and a BUY button
//Detailed view will pop up in a modal, and contain the name, all applicable images, the price, the artist's name,the description, and the BUY button.
//At this time, the BUY button will only take the dragon out of the Gallery, put it in the buyer's pets page, and update the artist's dragons page.
//I hope we can figure this out, because it would give a cool dynamic quality to the site, even though it isn't functional as a store yet.


import { useState } from "react";
import DragonModal from "./DragonModal";

function EachDragon() {
    let [show, setShow] = useState(false)

    return (
        <>
            <div className="simpleStyle" onClick={()=> setShow(true)}>
                <p>This is the simple view</p>
                <p>It contains a picture, name, artist, and price</p>
            </div>
            <DragonModal
                onClose={()=>setShow(false)}
                show={show}
                />
        </>
    )


    // const detailView = () => {
    //     return(
    //         <>
    //         <div className='detailStyle'>
    //             <p>This is large style</p>
    //             <p>It will show up in a modal.</p>
    //             <p>It will contain name, images, artist name, price, description, and an "adopt" button</p>
    //         </div>
    //         </>
    //     )
    // }

}

export default EachDragon