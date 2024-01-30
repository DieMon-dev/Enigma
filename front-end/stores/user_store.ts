import { observable, action } from "mobx";
class UserStore {
   
    private userId: string = ""
    private userLogin: string = ""
    private userName: string = ""
    private userPassword: string = ""
    @observable private logOut: boolean = false
  
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

    @action
    setLogOut(logOut: boolean){
      this.logOut = logOut
    }

    @action
    getLogOut(){
      return this.logOut
    }

  }

const userStore = new UserStore();
export default userStore;
