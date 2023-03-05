const storage = {
    get() {
        return JSON.parse(localStorage.getItem('list')) || []
    },

    save(list) {
        localStorage.setItem('list', JSON.stringify(list));
    }
}

export default storage