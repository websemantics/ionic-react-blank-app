import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactHashRouter } from '@ionic/react-router'
import Home from './pages/Home.js'

const App = () => (React.createElement(IonApp, null,
  React.createElement(IonReactHashRouter, null,
    React.createElement(IonRouterOutlet, null,
      React.createElement(Route, { path: "/home", component: Home, exact: true }),
      React.createElement(Route, { exact: true, path: "/", render: () => React.createElement(Redirect, { to: "/home" }) })))))
export default App
