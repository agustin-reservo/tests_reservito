<template>
  <div class="row">
    <div class="col-6">
      <form :action="urlRegistrar" method='POST'>
        <h4>Registrate acá!</h4>
        <input type="hidden" :value="csrfToken" name="csrfmiddlewaretoken">
        <div>
          <label for="username">Nombre de usuario</label>
          <input type="text" name="username" v-model="username">
        </div>
        <div>
          <label for="email">Correo</label>
          <input type="text" name="email" v-model="email">
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div>
          <label for="password">Ingrese nuevamente la contraseña</label>
          <input type="password" name="password_dos_confirmar" v-model="password_dos_confirmar">
        </div>
        <button class="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
    <div class="col-6">
      Bienvenido a Reservito<b>{{ ` ${username}` }}</b>!
      <div class="alert alert-info">
        Al registrarte te enviaremos un mail a: {{ email }} para confirmar tu registro
        <s>(Not really, no está implementado)</s>
      </div>
      <div
        v-if="password"
        class="alert"
        :class="{'alert-danger': !is_secure(password), 'alert-success': is_secure(password)}">
        Tu contraseña es {{ is_secure(password) ? 'segura' : 'insegura!' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserRegisterForm",
  data: function(){
    return {
      username: '',
      email: '',
      password: '',
      password_dos_confirmar: '',
    }
  },
  props: {
    urlRegistrar: {
      type: String,
      required: true,
    }
  },
  methods: {
    is_secure: function(password) {
      return password.length > 4
    }
  },
  computed: {
    csrfToken: function(){
      return $cookies.get('csrftoken')
    }
  }
}
</script>