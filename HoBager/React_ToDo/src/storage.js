import { LIST_KEY } from "./consts"

const storage = {
    get() {
        try{
            return JSON.parse(localStorage.getItem(LIST_KEY)) || []
        }catch(error){
            console.log(error);
            return [];
        }
    },

    save(list) {
        try{
            localStorage.setItem(LIST_KEY, JSON.stringify(list));
        }catch{
            console.log(error)
        }
    }
}

export default storage