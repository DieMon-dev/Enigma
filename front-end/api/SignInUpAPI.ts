import remoteUserStore from "../stores/Remote_User_Store"
import userStore from "../stores/user_store"
import { runInAction } from 'mobx';

export default class  EnigmaAPI{

    private url = "https://empty-gifts-enter.loca.lt"

    private url_login = this.url + "/api/users/check/userPassword/"
    private url_login_register = this.url + "/api/users/check/userLogin/"
    private url_password = this.url + "/api/users"
    private url_update = this.url + "/api/users/update"
    private url_chek_old_password = this.url + "/api/users/check/oldPwd/"
    private url_find_user_by_login = this.url + "/api/users/getByLogin/"
    private url_check_user_chat = this.url + "/api/chats/check/usersChat/"
    private url_user_chats_list = this.url + "/api/chats/userChatList/"
    private url_chat_messages = this.url + "/api/chats/messages/for/"
    private url_send_message = this.url + "/api/chats/messages/send"
    private url_delete_message = this.url + "/api/chats/messages/delete/"
    private url_delete_chat = this.url + "/api/chats/delete/"
    private url_create_chat = this.url + "/api/chats/create/"
    

    async Login(login: string, password: string): Promise<boolean> {
        const result = fetch(this.url_login + login + "/" + password).then(response => {             
            return response.json()}).then(response => {console.log(response);if(response.userId){userStore.setUser(response.userId, response.userLogin, response.userName);console.log(response);
            return true}else{return false}})
        return result

   }

   async Login_RegisterCheck(login: string): Promise<boolean> {
    const result = fetch(this.url_login_register + login).then(response => {              
        return response.json()}).then(response => {return response})
    return result

}

   async Register(login: string, password: string, nickname: string): Promise<boolean>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userLogin: login, userPassword: password, userName: nickname})
    };
    const result = fetch(this.url_password,  requestOptions).then(response => {              
        return response.json()}).then(response => {userStore.setUser(response.userId, response.userLogin, response.userName); return response})
    return result
    }

    async UpdateProfile(user: any): Promise<Boolean>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        const result = fetch(this.url_update,  requestOptions).then(response => {              
            return response.json()}).then(response => {userStore.setUser(response.userId, response.userLogin, response.userName); return  response ? true: false})
        return result
    }

    async CheckPassword(userId: string, password: string): Promise<Boolean>{
        const result = fetch(this.url_chek_old_password + userId + "/" + password).then(response => {              
            return response.json()}).then(response => {return response})
        return result
    
    }

    async FindUserByLogin(userLogin: string) {
        try {
          const response = await fetch(this.url_find_user_by_login + userLogin);
    
          if (!response.ok) {
            throw new Error(`Error fetching user data for ${userLogin}`);
          }
    
          const userData = await response.json();
    
          runInAction(() => {
            // Update remoteUserStore inside the MobX action
            if (userData.userId) {
              remoteUserStore.setRemoteUser(userData.userId, userData.userLogin, userData.userName);
              console.log(userData);
            }
          });
    
          return Boolean(userData.userId);
        } catch (error) {
          console.error('Error in FindUserByLogin:', error);
          return false;
        }
      }

      async CheckUserChat(userId: string, remoteUserId: string): Promise<Boolean>{
        const result = fetch(this.url_check_user_chat + userId + "/" +  remoteUserId).then(response => {              
            return response.json()}).then(response => {return response})
        return result
    
    }

    ChatsList(userId: string): Promise<any>{
        const result = fetch(this.url_user_chats_list + userId).then(response => {              
            return response.json()}).then(response => {return response})
        return result
    }
 
    ChatMessages(chatId: string): Promise<Array<Object>>{
        const result = fetch(this.url_chat_messages + chatId).then(response => {              
            return response.json()}).then(response => {return response})
        return result
     
    }

    async SendMessage(messageChatId: string, messageSenderId: string, messageContent: string): Promise<Boolean>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({messageChatId: messageChatId, messageSenderId: messageSenderId,  messageContent: messageContent})
        };
        const result = fetch(this.url_send_message,  requestOptions).then(response => {              
            return response.json()}).then(response => {console.log(response);return response})
        return result
    }

    async DeleteMessage(messageId: string): Promise<boolean>{
        fetch(this.url_delete_message + messageId)
        return true
    }

    async DeleteChat(chatId: string): Promise<boolean>{
      fetch(this.url_delete_chat + chatId)
        return true
    }

    async CreateChat(userId: string, remoteUserId: string): Promise<any>{
        const result = fetch(this.url_create_chat + userId + "/" +  remoteUserId).then(response => {              
            return response.json()}).then(response => {return response})
        return result
    
    }
    

};