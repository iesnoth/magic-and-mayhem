import axios from 'axios';
//uses CRUD functions from the API and uses them in its own functions, with added authentication
//necessary for localStorage login/out functions
const API_URL = 'users/'

//CREATE a user
const createUser = async (userData) => {
    //makes request to server
    const response = await axios.post(API_URL, userData)
    //check for response from server
    if (response.data) {
        //store the response as a string in local storage, includes token
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login user
const login = async (userData) => {
    //makes request to server
    const response = await axios.post(API_URL + 'login', userData)
    //check for response from server
    if (response.data) {
        //store the response as a string in local storage, includes token
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    createUser,
    logout,
    login
}

export default authService;