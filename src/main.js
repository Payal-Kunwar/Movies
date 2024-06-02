import { createApp } from "vue";
import 'vuetify/styles'
import App from "./App.vue";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from "vuetify";

import routes from './router/index'
console.log(routes)

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);
app.use(routes)
app.use(vuetify)
app.mount("#app")