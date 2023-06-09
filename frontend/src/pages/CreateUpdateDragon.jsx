import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { createDragon, reset } from '../features/dragons/dragonSlice'


function CreateUpdateDragon() {

    const { user } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        name: '',
        artist: user.name,
        images: '',
        price: '',
        description: '',
    })

    const { name, artist, images, price, description } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { dragon, isError, isSuccess, message } = useSelector(
        (state) => state.dragons
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || dragon) {

        }

        dispatch(reset())
    }, [dragon, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        if (!images || !price || !description) {
            toast.error('Populate all required fields')
        } else {
            const dragonData = {
                name, artist, images, price, description
            }

            dispatch(createDragon(dragonData))
            toast.success('New Dragon successfully added!')
            navigate('/')
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Add your Dragon</h1>
                        <div>
                            <label htmlFor="nameDragon">Name of dragon</label>
                            <input id="name" type="text" name="name" value={name} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="images">Image</label>
                            <input id="image-url" type="text" name="images" value={images} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" value={price} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="DragonDetails">Dragon Details</label>
                            <div>
                                <textarea placeholder="Describe your Dragon" rows="5" name="description" value={description} onChange={onChange} ></textarea>
                            </div>
                        </div>
                        <button className="dragonbutton" type="submit">Add your Dragon!</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default CreateUpdateDragon;