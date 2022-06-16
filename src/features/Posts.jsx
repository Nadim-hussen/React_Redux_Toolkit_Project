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
      },
      editPost:(state,action)=>{
        const {id, post, writer} = action.payload;
        const isPostExist = state.posts.find((item)=>{
          return item.id === id
        })
        if(isPostExist){
          isPostExist.post = post
          isPostExist.writer = writer
        }
      },
      deletePost:(state, action)=>{
        const id = action.payload;
       state.posts= state.posts.filter((item)=>{
          return item.id !== id
        })
      }
    }
  })
  export const { showBooks, addPost, editPost, deletePost} = postSlice.actions;
  export default postSlice.reducer;