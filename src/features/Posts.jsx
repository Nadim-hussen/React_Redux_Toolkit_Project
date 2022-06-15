const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");
const initialPosts = {
    posts: [
      { id: uuidv4(), post:"Programming Memes", writer:"Hero Alom"  },
      { id: uuidv4(), post:"Programming Hero", writer:"Khan Halal"  },

    ],
  };

  export const postSlice = createSlice({
    name:"posts",
    initialState: initialPosts,
    reducers:{
      showPosts:(state)=>state,
      addPost:(state, action)=>{
        state.posts.push(action.payload)
      }
    }
  })
  export const { showBooks, addPost} = postSlice.actions;
  export default postSlice.reducer;