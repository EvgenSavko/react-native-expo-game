import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/home'
import YoungScreen from './screens/young'
import FlashScreen from './screens/flash'

const MainNavigator = createStackNavigator({
  Eldest: { screen: HomeScreen },
  Young: { screen: YoungScreen },
  Flash: { screen: FlashScreen },
})

const App = createAppContainer(MainNavigator)

export default App

// import Home from './screens/home'

// export default function App() {
//   return (
//     <>
//       <Home />
//     </>
//   )
// }
