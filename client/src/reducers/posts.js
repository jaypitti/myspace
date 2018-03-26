const posts = (state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [action.post, ...state]
    case 'UPDATE_POST':
      return state.map( a => {
        if (a.id === action.post.id)
          return action.post
        return a
      })
    case 'DELETE_POST':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default posts;
