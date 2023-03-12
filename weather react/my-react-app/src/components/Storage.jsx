
const Storage = {

    get(){
        return JSON.parse(localStorage.getItem('cities')) || []
    },

    set(cities){
        localStorage.setItem('cities',JSON.stringify(cities))
    }
}

export default Storage