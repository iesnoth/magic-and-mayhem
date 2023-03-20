

import React, {Fragment, useState} from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const CreateUser = () => {

    const [name, setName] = useState("")

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {name};
            await fetch("http://localhost:5000/users",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            //refreshes page after fulfilled
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1>Sign up!</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                variant="outlined"
                type="text"
                value={name}
                onChange={e => setName(e.target.value) }
                />
                <Button type="submit" variant="contained" color="primary" sx={{ m: 2}} >Submit</Button>
            </form>
        </Fragment>
    )
}

export default CreateUser;