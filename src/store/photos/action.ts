import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPhoto } from "../../interfaces/photo.interface";

export const fetchPhotos = createAsyncThunk(
    'photos/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue('Photos not found!')
        }
    }
)