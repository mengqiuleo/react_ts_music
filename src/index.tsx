/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 02:10:56
 * @LastEditTime: 2022-12-28 14:04:26
 */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

import App from '@/App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
)
