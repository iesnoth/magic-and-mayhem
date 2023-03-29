import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import VendorView from "../components/VendorView";
import { getMyDragons, reset } from "../features/dragons/dragonSlice";

function VenderProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { dragons, isError, isLoading, message } = useSelector((state) => state.dragons)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
        if (!user) {
            navigate('/')
        }

        dispatch(getMyDragons())

        return () => {
            dispatch(reset)
        }
    }, [user])

    return (
        <>
            <div>
                <div className="account-details">
                    <h1>Your Profile Details:</h1>
                    <h3>Name:{user.name}</h3>
                    <h4>Account Email:{user.email}</h4>
                    <h4>Your role: {user.role}</h4>
                </div>
                {user.role === 'buyer' ?
                    (<>
                        <p>You are a buyer</p>

                    </>) : (<>
                        <section>
                            <h3>Here are the dragons you are selling:</h3>
                            {dragons.length > 0 ? (
                                <ul className="cards">
                                    {dragons.map((dragons) => (
                                        <VendorView key={dragons.pet_uid} dragon={dragons} />
                                    ))}
                                </ul>
                            ):(
                                <h3>You are not currently selling any dragons. Shame on you.</h3>
                            )}
                        </section>
                    </>)}
                    {/* Adopted dragons section */}
                <section>
                    
                </section>
            </div>
        </>
    )
}

export default VenderProfile;