import userStore from "../stores/user_store"
export default class  EnigmaAPI{

    private url = "https://rude-poets-design.loca.lt"

    private url_login = this.url + "/api/users/check/userPassword/"
    private url_login_register = this.url + "/api/users/check/userLogin/"
    private url_password = this.url + "/api/users"
    private url_update = this.url + "/api/users/update"
    private url_chek_old_password = this.url + "/api/users/check/oldPwd/"

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
            return response.json()}).then(response => {console.log(response); return response})
        return result
    
    }

};