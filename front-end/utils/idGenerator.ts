export default class  GenerationTool{
    idGeneration(){
        const d = new Date();
        let  c = Math.floor((Math.random() * 10000)+1);
        let b = Math.floor((Math.random() * 10000)+1)
        console.log(((d.getMilliseconds() / d.getUTCHours()) * 3.141592 * c) / b * c);
        return ((d.getMilliseconds() / d.getUTCHours()) * 3.141592 * c) / b * c;
    }
}