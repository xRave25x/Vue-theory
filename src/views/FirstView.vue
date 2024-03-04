<template>
  <section>
    <div class="container">
      <table v-if="!isLoading">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="developer in developers" :key="developer.id">
            <td>{{developer.name}}</td>
            <td>{{developer.age}}</td>
            <td>{{developer.role}}</td>
          </tr>
        </tbody>
      </table>
      <spinner-component v-else></spinner-component>
    </div>
  </section>
</template>

<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default {
  components:{SpinnerComponent},
  computed: {
    developers() {
      return this.$store.getters['getDevelopers']
    },
    isLoading() {
      return this.$store.getters['getIsLoading']
    }
  },
  beforeMount() {
    this.$store.dispatch('setIsLoading', true)
    
    setTimeout(() => {
      this.$store.dispatch('setDevelopers', [{
                id: 0,
                name: 'Alex',
                age: 24,
                role: 'Developer'
            },
            {
                id: 1,
                name: 'Max',
                age: 22,
                role: 'Developer'
            },
            {
                id: 2,
                name: 'Ruslan',
                age: 24,
                role: 'Developer'
            }])
      this.$store.dispatch('setIsLoading', false)
    },1500)
  }
}
  
</script>
