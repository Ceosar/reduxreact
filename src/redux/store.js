import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name:"Dima Dima", message:"Hi World", likes: 15},
                {id: 2, name:"Daniil Krupnov", message:"My React APP", likes: 25},
                {id: 3, name:"Ivan Ivan", message:"Hi there!", likes: 35},
                {id: 4, name:"Alex Alex", message:"Like this app", likes: 55},
            ],
            newPostText:""
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergey', img: "http://klike.net/uploads/posts/2020-08/1598084316_40.jpg"},
                {id: 2, name: 'Ivan', img: "https://www.livestory.com.ua/images/157303890.jpg"},
                {id: 3, name: 'Alex', img: "https://4tololo.ru/sites/default/files/images/20162402152930.jpg?itok=FWABPPPs"},
                {id: 4, name: 'Andrey', img: "https://tn.fishki.net/26/upload/post/2018/05/16/2599637/a4929db4e537d6a70ef4515ed822b6d2.jpg"},
                {id: 5, name: 'Nick', img: "https://celebnewsru.com/wp-content/uploads/2020/07/http-vistanews-ru-uploads-posts-2017-01-14842062.jpg"},
            ],

            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Fine!"},
            ],

            newMessageBody: ""
        },

        sidebar:{

        },
    },
    _callSubscriber() {
        console.log("Rerender started");
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;