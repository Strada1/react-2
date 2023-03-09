const workWithLocalStorage = {
  getItem: function (key) {
    return localStorage.getItem(key);
  },
  setItem: function (key, value) {
    try {
      return localStorage.setItem(key, value);
    } catch (e) {
      alert(e);
    }
  },
};

const workWithJSON = {
  stringify: function (obj) {
    try {
      return JSON.stringify(obj);
    } catch (e) {
      alert(e);
    }
  },
  parse: function (obj) {
    try {
      return JSON.parse(obj);
    } catch (e) {
      alert(e);
    }
  },
};

export { workWithLocalStorage, workWithJSON };
