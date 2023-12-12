export default class  EnigmaSignInUpAPI{

    async Login(login: number, password: string): Promise<boolean> {
       const result = fetch("/Login?" + "userLogin=" + login + "&" + "userPassword="+ password).then(response => {
               if (!response.ok) {
                   throw new Error(response.statusText)
               }
               return response.json()
           }).then((value) => {
            return value;
        })
        console.log("In login api class: ", result)
        return false

   }

   async Register(login: string, password: string): Promise<boolean>{
        const result = fetch("getRegister").then(response => {
           if (!response.ok) {
               throw new Error(response.statusText)
           }
           return response.json().then((value) => {
               return value;
           })
       })
       var toreturn: number = 0;
       result.then((resultvalue) =>{
           setTimeout(()=>{
               toreturn = resultvalue
           }, 500)
       })
       return true
    }

};