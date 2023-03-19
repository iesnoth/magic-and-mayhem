import React, { Fragment, useEffect, useState } from "react";
import EditUser from "./EditUser";

const ListUser = () => {

    const [names, setNames] = useState([]);

    //deletes users
    const deleteUser = async (id) => {
        try {
            const deleteOne = await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            });
            //deletes in view when deleted from db
            setNames(names.filter(name => name.user_id !== id))

        } catch (err) {
            console.error(err.message);
        }
    }

    //gets all users
    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users");
            const jsonData = await response.json()

            setNames(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Fragment>
            <ul>
                {names.map(user => {
                    return (<div key={user.user_id}>
                        <li>{user.name}</li>
                        <button> <EditUser/> </button>
                        <button onClick={() => deleteUser(user.user_id)}>Delete </button>
                    </div>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default ListUser;