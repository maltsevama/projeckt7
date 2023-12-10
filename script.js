const TodoItemNewTest = {
    props: ['todo'],
    template: `<li>{{ todo }}</li>`
}

const watchExample = Vue.createApp({
data() {
return {
    watchInput: '',
    groceryList: [
        'Выучить JS',
        'Сверстать крутой сайт',
        'Освоить эффектные стили',
        'Защитить диплом на 5' ,
        'Развиваться в сфере разработки'
    ]
}
},

watch: {
    watchInput(inputValue) {
        this.watchInput = inputValue;
    }
},

methods: {
    getAnswer() {
        axios
        .get('https://jsonplaceholder.typicode.com/todos/4')
        .then(response => console.log(response.data))
        .catch(error => error)
    },

    addTodo() {
        this.groceryList.push(this.watchInput)
    },

    deleteItem() {
        this.groceryList.splice(this.groceryList.length -1, 1);
    },

    sortList() {
        this.groceryList.sort();
    }
},

components: {
    TodoItemNewTest
}

 
}).mount('#example')