import axios from 'axios';
import { setHeaders } from '../actions/headers';

export const getPosts = () => {
  return (dispatch, getState) => {
    const { user } = getState();
    axios.get(`/api/posts`)
      .then( res => {
        const { data: { data: user }, headers } = res;
        dispatch({ type: 'POSTS', posts: res.data});
        dispatch(setHeaders(headers));
    });
  }
}

export const addPost = (post) => {
  return (dispatch, getState) => {
    const { user } = getState()
    axios.post(`/api/user/${user.id}/posts/`, { post } )
     .then( res => {
       const { headers } = res;
       dispatch({ type: 'ADD_POST', post: res.data });
       dispatch(setHeaders(headers));
   })
  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/users/posts/${post.id}`, { post } )
      .then( res => {
        const { data: { data: user }, headers } = res;
        dispatch({ type: 'UPDATE_POST', post: res.data });
        dispatch(setHeaders(headers));
      })
  }
}

export const deletePost = (id) => {
  return (dispatch, getState) => {
    const { user } = getState()
    axios.delete(`/api/user/${user.id}/posts/${id}`)
      .then( res => {
        const { headers } = res;
        dispatch({ type: 'DELETE_POST', id });
        dispatch(setHeaders(headers));
    })
  }
}
