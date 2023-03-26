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
                        <input id="name" type="text" name="name" value={nameDragon} onChange={onChange}  />
                    </div>
                    <div>
                        <label htmlFor="nameArtist">Artist</label>
                        <input id="nameArtist" type="text" name="nameArtist" value={nameArtist} onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input type="text" name="color" id="color" value={color} onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor="style">Style</label>
                        <input type="text" name="style" id="style" value={style} onChange={onChange} />
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