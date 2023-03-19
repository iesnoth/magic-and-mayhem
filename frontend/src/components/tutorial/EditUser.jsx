import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from "@mui/material";

const EditUser = ({user}) => {
  const [name, setName] = useState(user.name);
  //modal state
  const [isOpen, setIsOpen] = useState(false);
  //handles modal state change, maintains the input change
  const closeOpen = () => {
    if(isOpen === true){
      setIsOpen(false)
    }
    return setName(user.name)
  }
  //edit description function
  const updateName = async(e) =>{
    e.preventDefault();
    try {
      const body = {name};
      await fetch (`http://localhost:5000/users/${user.user_id}`,{
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
      })

      window.location = "/"
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      <Button variant="contained" color="success" onClick={() => setIsOpen(true)}> Edit </Button>
      <Dialog
      onClose={closeOpen}
      open={isOpen}
      >
        <DialogTitle>
          Edit User
        </DialogTitle>
        <DialogContent>
          <TextField
          input="text"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
          variant="contained"
          onClick={e => updateName(e)}
          open={isOpen}>
            Edit
          </Button>
          <Button
          variant="contained"
          color="error"
          onClick={closeOpen}
          open={isOpen}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditUser;