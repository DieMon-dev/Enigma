import { observable, action } from 'mobx';

class ChatStore {
    @observable private chatId = "";
    @observable private messageHistory: any = [];
  
    @action
    setChatId(chatId: string) {
      this.chatId = chatId;
    }
  
    @action
    setMessageHistory(history: any) {
      this.messageHistory = history;
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