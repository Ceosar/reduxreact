const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            state.messages.push({id:4, message: state.newMessageBody});
            state.newMessageBody='';
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body:text })

export default dialogsReducer;