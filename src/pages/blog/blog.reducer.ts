import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}
const initialState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')

export const deletePost = createAction<string>('blog/deletePost')

export const startEditPost = createAction<string>('blog/startEditPost')

export const finishEditPost = createAction<Post>('blog/finishEditPost')

//CreateReducer nhận vào 2 giá trị (1 là initialState và 2 là một builderCallBack)
const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      //bên trong redux toolkit sử dụng một cái immerJS
      // immerJS giúp chúng ta mutate một state an toàn
      state.postList.push(action.payload)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      state.postList = state.postList.filter((post) => post.id !== postId)
    })
    .addCase(startEditPost, (state, action) => {
      const postId = action.payload
      state.editingPost = state.postList.find((post) => post.id === postId) || null
    })
    .addCase(finishEditPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
})

export default blogReducer
