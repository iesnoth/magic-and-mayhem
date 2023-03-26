import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import dragonService from './dragonService'

const initialState = {
    dragons: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//get all dragons
export const getDragons = createAsyncThunk(
    'dragons/getAll',
    async (thunkAPI) => {
        try {
            return await dragonService.getDragons()
        } catch (error) {
            const message = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//create new dragon

export const createDragon = createAsyncThunk(
    'dragons/create',

    async (dragonsData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await dragonService.createDragon(dragonsData, token)
        } catch (error) {
            const message = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }

)

//get user specific dragons

export const getMyDragons = createAsyncThunk('dragons/getMine', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await dragonService.getMyDragons(token)
        } catch (error) {
            const message = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

//Delete dragon

export const deleteDragon = createAsyncThunk(
    'dragons/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await dragonService.deleteDragon(id, token)
        } catch (error) {
            const message = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const dragonSlice = createSlice({
    name: 'dragons',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder

            .addCase(createDragon.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createDragon.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.dragons = action.payload
            })
            .addCase(createDragon.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //get user specific dragons
            .addCase(getMyDragons.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMyDragons.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.dragons = action.payload
            })
            .addCase(getMyDragons.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //end user specific slice settings

            .addCase(getDragons.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDragons.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess = true
                state.dragons = action.payload 
            })
            .addCase(getDragons.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload 
            })
            .addCase(deleteDragon.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteDragon.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.dragons = state.dragons.filter(
                    (dragon) => dragons._id !== action.payload.id
                )
            })
            .addCase(deleteDragon.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = dragonSlice.actions
export default dragonSlice.reducer