import GenerationTool from "../utils/idGenerator"
export default class  EnigmaSignInUpAPI{

    private url = "https://rare-ways-wave.loca.lt/api/users/check/userLogin/"

    async Login(login: string): Promise<boolean> {
        const result = fetch(this.url + login.toString()).then(response => {              
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
    const result = fetch(this.url,  requestOptions).then(response => {              
        return response.json()}).then(response => {return response})
    return result
    }

};