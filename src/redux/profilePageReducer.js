const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postsData: [
    {
      id: '1',
      message: 'Hello',
      likesCount: '10',
    },
    {
      id: '2',
      message: 'first',
      likesCount: '5',
    },
    {
      id: '3',
      message: 'second',
      likesCount: '20',
    },
  ],
  newPostText: 'newPostText',


}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      return  {
        ...state,
        postsData: [...state.postsData, newPost ],
        newPostText: '',
      };

    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }

    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  // return {
  type: ADD_POST
  // };
});
export const updateNewPostTextActionCreator = (text) => ({
  // return {
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
  // };
});

export default profilePageReducer;