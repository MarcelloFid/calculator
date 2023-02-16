<template>
  <div class="about">
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'feedback',
  components: {
    ContactForm
  }
}
</script>

<style>

.about{
  background-color: white;
}

</style>