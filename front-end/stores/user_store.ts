class UserStore {
   
    private userId = ""
    private userLogin = ""
    private userName = ""
    private userPassword = ""
  
    setUser(userId: string, userLogin: string, userName: string) {
      this.userId = userId;
      this.userLogin = userLogin;
      this.userName = userName;
    }
  
    getUser(){
      return {userId: this.userId, userLogin: this.userLogin, userName: this.userName, userPassword: this.userPassword}
    }

    setUserPassword(userPassword: string){
      this.userPassword = userPassword
    }

    getUserPassword(){
      return this.userPassword
    }
  }

const userStore = new UserStore();
export default userStore;
