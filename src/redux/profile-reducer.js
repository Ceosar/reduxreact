const ADD_POST =  'ADD-POST';
const UPDATE_NEW_POST_TEXT =  'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, name:"Dima Dima", message:"Hi World", likes: 15},
        {id: 2, name:"Daniil Krupnov", message:"My React APP", likes: 25},
        {id: 3, name:"Ivan Ivan", message:"Hi there!", likes: 35},
        {id: 4, name:"Alex Alex", message:"Like this app", likes: 55},
    ],
    newPostText:""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost= {
                id: 5,
                name: "Nick Nick",
                message: state.newPostText,
                likes: 5,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText:text })


export default profileReducer;