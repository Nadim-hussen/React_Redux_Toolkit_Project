import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPosts = createAsyncThunk("posts/fetchUPosts",async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})
const fetchSlice = createSlice({
    name:'fetches',
    initialState:{
        isLoading:false,
        fetches:[],
        isError:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.fetches = action.payload
            state.isError=null
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false
            state.fetches = []
            state.isError= action.error.message
        })
    }
})
export default fetchSlice.reducer;