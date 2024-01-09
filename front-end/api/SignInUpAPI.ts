import userStore from "../stores/user_store"
export default class  EnigmaAPI{

    private url_login = "https://hungry-cars-win.loca.lt/api/users/check/userPassword/"
    private url_login_register = "https://hungry-cars-win.loca.lt/api/users/check/userLogin/"
    private url_password = "https://hungry-cars-win.loca.lt/api/users"

    async Login(login: string, password: string): Promise<boolean> {
        const result = fetch(this.url_login + login + "/" + password).then(response => {              
            return response.json()}).then(response => {userStore.setUser(response.userId, response.userLogin, response.userName);console.log(response); return response ? true: false})
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
        return response.json()}).then(response => {console.log(response);userStore.setUser(response.userId, response.userLogin, response.userName); return response})
    return result
    }

};