<template>
  <div class="helper">
      <span class="left">{{unfinishedTodoLength}} items left</span>
      <span class="tabs">
          <span
            v-for="state in states"
            :key="state"
            :class="[state, filter === state ? 'actived' : '']"
            @click="toggleFilter(state)"
            >
              {{state}}
          </span>
      </span>
      <span class="clear" @click="ClearAllCompleted"></span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
        type: Array
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
      unfinishedTodoLength() {
          return this.todos.filter(todo => !todo.completed).length;
      }
  },
  methods: {
    toggleFilter(state) {
        this.$emit('toggle', state)
    },
    ClearAllCompleted() {
        this.$emit('clearAll')
    }
  }
};
</script>

<style lang="stylus" scoped>
.helper
  text-align center 

.tabs span 
  cursor pointer
</style>
