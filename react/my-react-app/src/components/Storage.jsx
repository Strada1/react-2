
const Storage = {

    get(){
        return JSON.parse(localStorage.getItem('todos')) || []
    },

    set(todos){
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}

export default Storage