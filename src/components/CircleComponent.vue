<template>
  <div>
    <div @click.stop="logger('big')" class="circle circle-big">
      <div @click.stop="logger('small')" class="circle circle-mini">
        <button @click.stop="logger('button')">click</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logger(str) {
      console.log(str);
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &-big {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  &-mini {
    width: 150px;
    height: 150px;
    background-color: green;
  }
}
</style>