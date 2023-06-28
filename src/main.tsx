import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 初始化css
import 'normalize.css'
// UI组件库样式

// 全局样式
import '@/assets/styles/global.scss'
// 组件样式
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
