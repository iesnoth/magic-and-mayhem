import axios from 'axios'

const API_URL = '/dragons/'

const createDragon = async (dragonData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, dragonData, config)

    return response.data
}

const buyDragon = async(dragonID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + dragonID +'/adopt', config)
    console.log(`${response} bought`)
}

// const updateDragon = async (dragonData, dragonID, token) => {

//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }

//     const response = await axios.put(API_URL + dragonID, dragonData, config)

//     return response.data
// }

const getMyDragons = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + 'user', config)

    return response.data
}

const getDragons = async () => {
    const response = await axios.get(API_URL)

    console.log(response.data)
    return response.data
}

const deleteDragon = async(dragonID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + dragonID, config)
    console.log(`${response} deleted`)
}

const dragonService = {
    getDragons,
    createDragon,
    buyDragon,
    getMyDragons,
    deleteDragon
}

export default dragonService