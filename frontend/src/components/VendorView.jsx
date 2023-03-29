import { deleteDragon } from "../features/dragons/dragonSlice";
import { useDispatch } from "react-redux";

function VendorView({ dragon }) {
    const dispatch = useDispatch()
    return (
        <>
            <li>
                <div className="card">

                    <div className="vendor-header">{dragon.name}</div>
                    <section className="vendor-body">
                        <div><img src={dragon.images} alt={dragon.description}/></div>
                        <div className="sidebar">
                            <div>{dragon.price}</div>
                            <div>{dragon.description}</div>
                        </div>
                    </section>
                    <div className="vendor-footer">
                        <button className="delete-button"
                            onClick={() => dispatch(deleteDragon(dragon.pet_uid))}>
                            Delete Sighting
                        </button>
                    </div>

                </div>
            </li>
        </>
    )
}

export default VendorView