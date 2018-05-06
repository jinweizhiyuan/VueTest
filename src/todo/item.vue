<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
      <input
        type="checkbox"
        class="toggle"
        v-model="todo.completed"
      >
      <label>{{todo.content}}</label>
      <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true
      }
  },
  methods: {
      deleteTodo() {
          this.$emit('del', this.todo.id)
      }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item {
    position relative
    background-color #fff
    font-size 22px
    border-bottom 1px solid rgba(0,0,0,0.06)
    &:hover {
        .destory {
            display block 
        }
        .destory:after {
            
            content: 'X'
        }
    }
    label {
        white-space pre-line
        word-break break-all
        padding 15px 60px 15px 15px
        margin-left 45px
        display block 
        line-height 1.2
        transition color 0.5s
    }
    &.completed {
        label {
            color #d9d9d9
            text-decoration line-through
        }
    }
    .destory {
        display none
        position absolute 
        right 5px
        top 10px
    }
}
.toggle {
    text-align center
    width 40px
    height 40px
    position absolute 
    top 0
    bottom 0
    margin auto 0
    border none 
    // appearance none 
    outline none 
    &:after {
        // content url('../../assets/round.svg')
    }
    &:checked:after {
        // content url('../assets/done.svg')
    }
}
</style>
