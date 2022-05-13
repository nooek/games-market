import React, { useState, useContext, createContext } from "react"

const userContext = createContext()

export const useUserData = () => useContext(userContext);

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  return (
    <userContext.Provider value={{userData, setUserData}}>
      { children }
    </userContext.Provider>
  )
}

export default UserDataProvider
