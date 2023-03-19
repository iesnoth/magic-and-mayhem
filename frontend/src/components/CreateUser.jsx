import React, {Fragment, useState} from "react";

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
                <input type= "text"
                value={name}
                onChange={e => setName(e.target.value) }
                />
                <button>Submit</button>
            </form>
        </Fragment>
    )
}

export default CreateUser;