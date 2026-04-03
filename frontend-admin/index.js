import App from './src/App.jsx'
import { init } from './src/core/init.js'
import render from './src/core/render.js'

const app = document.querySelector('#app')
render(app, App())
init()
