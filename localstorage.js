function findOrCreate(jsonObject, key,value) {
    if (jsonObject.hasOwnProperty(key)) {
        jsonObject[key] = value;
        return jsonObject;
    } else {
        let newObj = jsonObject;
        newObj[key] = value; 
        return newObj;
    }
}


class setStorage {
    /**
     * 初始化
     * @param {string} key 鍵
     * @param {any} value 值
     */
    constructor(key,value) {

        this.key = key;
        if (localStorage.getItem(this.key)) {}
        else {this.set(value)}
    }

    get() {
        return JSON.parse(localStorage.getItem(this.key));
    }

    remove() {
        return localStorage.removeItem(this.key);
    }

    set(value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(this.key,value);
    }

    update(key,value) {
        let newObj = this.get()
        newObj[key] = value;
        this.set(newObj);
    }
}