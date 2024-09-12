import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { i18n } from './language'
import './styles/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

async function bootstrap() {
  const app = createApp(App)

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  setupRouter(app)
  setupStore(app)
  app.use(ElementPlus, { i18n: i18n.global.t }).use(i18n)
  app.mount('#app')
}

bootstrap()
