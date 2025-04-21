import { Form as VeeForm, Field as Veefield, defineRule, ErrorMessage } from 'vee-validate'
import { required } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', Veefield)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
  },
}
