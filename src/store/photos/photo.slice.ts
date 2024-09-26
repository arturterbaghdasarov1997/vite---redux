import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../interfaces/photo.interface";
import { fetchPhotos } from "./action";

interface IPhotoState {
    photos: IPhoto[],
    isLoading: boolean,
    error: string | null,
    count: number,
}

const initialState: IPhotoState = {
    photos: [],
    isLoading: false,
    error: null,
    count: 0,
}

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: { // Synchronous
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    },
    extraReducers: (builder) => { // Asynchronous
        builder.addCase(fetchPhotos.fulfilled, (state: IPhotoState, action: PayloadAction<IPhoto[]>) => {
            state.isLoading = false
            state.error = null
            state.photos = action.payload
        }),
        builder.addCase(fetchPhotos.pending, (state: IPhotoState) => {
            state.isLoading = true

        }),
        builder.addCase(fetchPhotos.rejected, (state: IPhotoState, action: PayloadAction<unknown>) => {
            state.isLoading = false
            state.error = action.payload as string
        })
    }
})

export default photoSlice.reducer
export const { decrement, increment } = photoSlice.actions