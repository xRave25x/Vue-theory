<template>
  <section>
    <div class="container">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="designer in designers" :key="designer.id">
            <td>{{designer.name}}</td>
            <td>{{designer.age}}</td>
            <td>{{designer.role}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>

export default {
  computed: {
    designers() {
      return this.$store.getters['getDesigners']
    }
  }
}
  
</script>