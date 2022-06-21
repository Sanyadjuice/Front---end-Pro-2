'use strict';

function model() {
    return {
        dbName: null,
        currentId: null,

        setDBName(key) {
            if (!key.trim()) throw new Error('Not db key')
            this.dbName = key;
        },

        getData() {
            return JSON.parse(localStorage.getItem(this.dbName));
        },

        setData(data) {
            let response = null;
            const todoItemData = structuredClone(data);
            const savedData = this.getData();
            const dataToSave = savedData ? savedData : [];

            todoItemData.id = this.currentId;
            dataToSave.push(todoItemData);

            try {
                localStorage.setItem(this.dbName, JSON.stringify(dataToSave));
                response = {success: true, savedData: todoItemData}
                this.currentId +=1;
            } catch (error) {
                response = {success: false, errors: error}
            }
            return response
        },

        removeTodoItems(id) {
            const data = this.getData();
            const updatedData = data.filter(todoItem => todoItem.id !== id)
            if (updatedData.length) {
                localStorage.setItem(this.dbName, JSON.stringify(updatedData));
            } else {
                localStorage.removeItem(this.dbName);
            }
        },

        init(dbKey) {
            this.setDBName(dbKey);

            const savedData = this.getData();
            this.currentId = savedData ? savedData[savedData.length-1].id + 1 : 1
        }
    }
}
