//This is the home page, and shows a grid of all the available dragons for sale.
//It will go by a page format, not be an infinite scroll, so it will need to have an entry limit and page icons at the bottom.

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDragons, reset } from "../features/dragons/dragonSlice";
import EachDragon from "../components/EachDragon";

function Gallery() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { dragons, isError, isLoading, message } = useSelector((state) => state.dragons)

    useEffect(() => {
                if (isError) {
                    console.log(message);
                }
                
                dispatch(getDragons())
        
                return () => {
                    dispatch(reset())
                }
            }, [isError, message, navigate, dispatch])


            return (
                    <div>               
                        <h2>Choose a Dragon!</h2>
                        <div className="content">
                            {dragons.length > 0 ? (
                                <div className="dragons">
                                    {dragons.map((dragon) => (
                                        <div className="one-dragon">
                                        <EachDragon key={dragon.pet_uid} dragon={dragon} />
                                        </div>
                                    ))}
                                </div>
                            ) : (<h3>No Dragons found.</h3>)}
                        </div>
                        
                    </div>
            )
}

export default Gallery