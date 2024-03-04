<template>
  <form @submit.prevent="submit($event)" action="/" class="mb-3">
    <fieldset>
      <input v-model="form.text" name="input-text" type="text" class="mr-1" />
      <button class="mr-1">Click</button>
      <span>{{form.text}}</span>
    </fieldset>

    <fieldset>
      <select v-model="form.select" name="input-select" class="mr-1">
        <option disabled value="">default</option>
        <option value="1">value 1</option>
        <option value="2">value 2</option>
        <option value="3">value 3</option>
        <option value="4">value 4</option>
      </select>
      <button class="mr-1">Click</button>
      <span>{{form.select}}</span>
    </fieldset>

    <fieldset>
      <input v-model="form.checkbox" name="input-checkbox" id="checkbox" type="checkbox" class="mr-1" />
      <label class="mr-1" for="checkbox">checkbox</label>
      <button class="mr-1">Click</button>
      <span>{{form.checkbox}}</span>
    </fieldset>

    <fieldset>
      <div>
        <input 
        name="input-radio" 
        id="radio-1" 
        type="radio" 
        class="mr-1" 
        value="1"
        v-model="form.radio" 
        />
        <label class="mr-1" for="radio-1">radio-1</label>
      </div>

      <div>
        <input 
        name="input-radio" 
        id="radio-2" 
        type="radio" 
        class="mr-1" 
        value="2"
        v-model="form.radio" 
        />
        <label class="mr-1" for="radio-2">radio-2</label>
      </div>

      <div class="mb-1">
        <input 
        name="input-radio" 
        id="radio-3" 
        type="radio" 
        class="mr-1" 
        value="3"
        v-model="form.radio" 
        />
        <label class="mr-1" for="radio-3">radio-3</label>
      </div>

      <button class="mr-1">Click</button>
      <span>{{form.radio}}</span>
    </fieldset>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        text: '',
        select: '',
        checkbox: false,
        radio: '1'
      },
      inintervalId: null
    }
  },
  methods: {
    submit(event) {
      console.log(event.target);
    }
  },
  mounted() {
    this.inintervalId = setInterval(() =>{
      console.log('1');
    }, 1000)
  },
  destroyed() {
    clearInterval(this.inintervalId)
  },
}
</script>

<style lang="scss" scoped>
fieldset {
  margin-bottom: 10px;
}
</style>