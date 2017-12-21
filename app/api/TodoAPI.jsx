var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
    // todos: [
    //   {
    //     id: uuid(),
    //     text: 'Walk the dog',
    //     completed: false
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Clean the yard',
    //     completed: true
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Leave mail on porch',
    //     completed: true
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Play video games',
    //     completed: false
    //   }
    // ]
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.console.error(e);
    }

    return $.isArray(todos) ? todos : [];
  }
};
