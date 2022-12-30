/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 02:10:56
 * @LastEditTime: 2022-12-28 13:47:47
 */
import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
