import React from 'react'

const ModeContext = React.createContext({
  isDark: false,
  savedVideosData: [],
  toggleDarkMode: () => {},
  addVideosFunction: () => {},
  changeTab: () => {},
})
export default ModeContext
