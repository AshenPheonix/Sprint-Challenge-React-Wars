export default class{
    constructor(){
        this.baseUrl='https://dog.ceo/api/'
    }
    async grabAll(){
        let back=await fetch(this.baseUrl+"breeds/list/all")
        let data=await back.json()
        return data
    }
}