class ChatStore {
   
    private chatId = ""
    
    setChatId(chatId: string) {
      this.chatId = chatId;
    }
  
    getChatId(){
      return this.chatId
    }

  }

const  chatStore = new ChatStore();
export default chatStore;
