//This page will take all info on a dragon and send it to the dragons db.
//Form will include the name of the dragon(if applicable), name of artist, color of dragon, style of dragon (a dropdown list),
//images, price, and a short description of the dragon
//After being submitted, the dragon is turned into an EachDragon component and sent to the Gallery and the vender's account page.

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateUpdateDragon() {

const [formData, setFormData] = useState({
    nameDragon: '',
    nameArtist: '',
    color: '',
    style: '',
    images: '',
    price: '',
    description: '',
})

const { nameDragon, nameArtist, color, style, images, price, description } = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const { dragon, isError, isSuccess, message } = useSelector(
    (state) => state.dragon
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
}

if (!nameDragon || !nameArtist || !color || !style || !images || !price || !description) {
    toast.error('Populate all required fields')
} else {
    const dragonData = {
        nameDragon, nameArtist, color, style, images, price, description
    }

    dispatch(createDragon(dragonData))
    toast.success('New Dragon successfully added!')
    navigate('/')
}


    return (
          <>
          <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Add your Dragon</h1>
                    <div>
                        <label htmlFor="nameDragon">Name of dragon</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </form>
          </div>
          </>
    )
    
}

export default CreateUpdateDragon;