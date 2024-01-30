import { observable, action } from "mobx";

class RemoteUserStore {
  @observable private userId = "";
  @observable private userLogin = "";
  @observable private userName = "";

  @action
  setRemoteUser(userId: string, userLogin: string, userName: string) {
    this.userId = userId;
    this.userLogin = userLogin;
    this.userName = userName;
  }

  @action
  getRemoteUser() {
    return { userId: this.userId, userLogin: this.userLogin, userName: this.userName };
  }
}

const remoteUserStore = new RemoteUserStore();
export default remoteUserStore;