import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App)
app.use(router)
app.mount('#app')
