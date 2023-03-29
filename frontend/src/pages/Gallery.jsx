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
    const {user} = useSelector((state)=>state.auth)

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
                <div className="gallery">
                    <div>
                        {user ? (
                            <h1>Welcome Back to Magic and Mayhem, {user.name}!</h1>
                        ):(
                            <h1>Welcome to Magic and Mayhem</h1>
                        )}                     
                        <h2>Choose a Dragon!</h2>
                        <div>
                            {/* Test image */}
                            <img src={require("../assets/leftlightfooter.png")} alt="left footer stalagmite" />
                        </div>
                        <section className="content">
                            {dragons.length > 0 ? (
                                <div className="dragons">
                                    {dragons.map((dragon) => (
                                        <EachDragon key={dragon.pet_uid} dragon={dragon} />
                                    ))}
                                </div>
                            ) : (<h3>No Dragons found.</h3>)}
                        </section>
                        
                    </div>
                </div>
            )
}

export default Gallery