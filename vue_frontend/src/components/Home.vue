<template>
  <div>
    <h1 class="text-orange-900 text-blue-900 underline">
      Esto es un componente Vue
    </h1>
    <UserRegisterForm
      :url-registrar="urlRegistrar"
    />
  </div>
</template>

<script>
import UserProfileForm from "./UserProfileForm.vue";
import UserRegisterForm from "./UserRegisterForm.vue";

export default {
  name: "Home",
  components: {
    UserRegisterForm,
  },
  props: {
    urlRegistrar: {
      default: '/usuarios/register',
    }
  }
}
</script>

<style>
</style>