import { observable, action } from 'mobx';

class ChatStore {
    @observable private chatId = "";
    @observable private messageHistory: any = [];
    @observable private nameOfChat: string = ""
  
    @action
    setChatId(chatId: string) {
      this.chatId = chatId;
    }
  
    @action
    setMessageHistory(history: any) {
      this.messageHistory = history;
    }

    @action
    setNameOfChat(nameOfChat: string){
      this.nameOfChat = nameOfChat
    }
    @action
    getNameOfChat(){
      return this.nameOfChat
    }
  
    getChatId() {
      return this.chatId;
    }
  
    getMessageHistory() {
      return this.messageHistory;
    }
  }
  
  const chatStore = new ChatStore();
  export default chatStore;