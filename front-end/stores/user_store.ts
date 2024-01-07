class UserStore {
    private userId = ""
    private userLogin = ""
    private userName = ""
  
    setUser(userId: string, userLogin: string, userName: string) {
      this.userId = userId;
      this.userLogin = userLogin;
      this.userName = userName;
    }
  
    getUser(){
      return {userId: this.userId, userLogin: this.userLogin, userName: this.userName}
    }
  }

const userStore = new UserStore();
export default userStore;
