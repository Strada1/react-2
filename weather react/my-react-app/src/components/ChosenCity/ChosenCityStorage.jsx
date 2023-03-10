

const ChosenCityStorage = {

    get(){
        return localStorage.getItem('FavCity') || ""
    },

    set(CurrentCity){
        localStorage.setItem('FavCity',CurrentCity)
    }
}

export default ChosenCityStorage
