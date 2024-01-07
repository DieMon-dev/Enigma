import userStore from "../stores/user_store"
import GenerationTool from "../utils/idGenerator"
export default class  EnigmaAPI{

    private url_login = "https://social-breads-notice.loca.lt/api/users/check/userPassword/"
    private url_login_register = "https://social-breads-notice.loca.lt/api/users/check/userLogin/"
    private url_password = "https://social-breads-notice.loca.lt/api/users"

    async Login(login: string, password: string): Promise<boolean> {
        const result = fetch(this.url_login + login + "/" + password).then(response => {              
            return response.json()}).then(response => {return response})
        return result

   }

   async Login_RegisterCheck(login: string): Promise<boolean> {
    const result = fetch(this.url_login_register + login).then(response => {              
        return response.json()}).then(response => {return response})
    return result

}

   async Register(login: string, password: string, nickname: string): Promise<boolean>{
    let user_id = new GenerationTool().idGeneration()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId: user_id, userLogin: login, userPassword: password, userName: nickname})
    };
    const result = fetch(this.url_password,  requestOptions).then(response => {              
        return response.json()}).then(response => {userStore.setUser(response.userId, response.userLogin, response.userName); return response})
    return result
    }

};