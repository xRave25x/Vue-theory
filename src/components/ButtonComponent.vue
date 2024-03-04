<template>
  <div>
    <h2>Button</h2>

    <div class="mb-3">
      <button @click="count--" class="mr-1">Dec-</button>
      <button @click="count++" class="mr-1">Inc+</button>
      <button @click="resetCount(0, $event)" class="mr-1">Reset</button>
      <span>{{countValue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    countValue() {
      return 'Текущее значение count: ' + this.count
    }
  },
  methods: {
    resetCount(value, event) {
      this.count = value;
    }
  }
}
</script>
