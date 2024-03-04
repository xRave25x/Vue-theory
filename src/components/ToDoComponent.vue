<template>
  <div>
    <h2>Input</h2>

    <div>
      <input 
        name="input-text" 
        type="text" 
        class="mr-1"
        v-model="inputValue" 
      />
      <button @click="addTodo" class="mr-1">Click</button>
      <span>{{inputValue}}</span>
    </div>

    <h2>ToDo</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputValue);
      this.inputValue = ''
    }
  },
};
</script>

