<template>
  <div class="real-app">
      <input
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去做什么？"
        @keyup.enter="addTodo"
      >
      <item
       :todo="todo"
       v-for="todo in filteredTodos"
       :key="todo.id"
       @del="deleteTodo"
        />
      <tabs 
      :filter="filter" 
      :todos="todos" 
      @toggle="toggleFilter"
      @clearAll="ClearAllCompleted"
      ></tabs>
  </div>
</template>

<script>
import item from '../todo/item.vue';
import tabs from '../todo/tabs.vue';
let id = 0;

export default {   
  data() {
      return {
          todos: [],
          filter: 'all'
      }
  },
  computed: {
      filteredTodos() {
          if (this.filter == 'all') {
              return this.todos
          }

          const completed = this.filter === 'completed';

          return this.todos.filter(todo => completed === todo.completed)
      }
  },
  methods: {
      addTodo(e) {
          this.todos.unshift({
              id: id++,
              content: e.target.value.trim(),
              completed: false
          });
          e.target.value = '';
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1)
      },
      toggleFilter(state) {
          this.filter = state
      },
      ClearAllCompleted() {
          this.todos = this.todos.filter(todo => !todo.completed)
      }
  },
  components: {
      item,
      tabs
  }
}
</script>

<style lang="stylus" scoped>
.rea-app {
    width 600px
    margin 0 auto 
    box-shadow 0 0 5px #666
}
.add-input {
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit 
    font-weight inherit 
    line-height 1.4em
    border 0
    outline none 
    color inherit 
    padding 6px
    border 1px solid #999999
    box-shadow inset 0 -1px 5px  0 rgba(0,0,0,0.2)
    box-sizing border-box
    font-smoothing antialiased 
    padding 16px 16px 16px 60px
    border none 
}
</style>

