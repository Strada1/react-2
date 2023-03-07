const todoStorageName = 'TodoList' 
const storage = {
    saveCityFavoriteList: function (todosMas) {
      localStorage.setItem(todoStorageName, JSON.stringify(Array.from(todosMas)));
    },
    getCityFavoriteList() {
      return JSON.parse(localStorage.getItem(todoStorageName));
    },
}
  
export default storage