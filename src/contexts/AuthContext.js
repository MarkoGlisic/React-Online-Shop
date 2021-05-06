import React, { useContext, useState, useEffect } from "react"
import { auth, database } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [currentUserName, setCurrentUserName] = useState()
  const [currentUserEmail,setCurrentUserEmail] = useState()
  const [loading, setLoading] = useState(true)




  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function setUserInFirebase(userName, phone, email) {
    database.collection("userProfiles").add({
      userName: userName,
      email: email,
      phoneNumber: phone,
      date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
  })
  .then(() => {
      setCurrentUserName(userName)
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  }

useEffect(() => {
  getCurrentUsername(currentUserEmail)
  
}, [currentUserEmail])

  function getCurrentUsername(currentUserEmail){
      currentUserEmail && database.collection('userProfiles').onSnapshot(querySnapshot => {
        querySnapshot.docs.map(doc=>{
          if ((doc.data().email).toString() == currentUserEmail.toString()) {
            setCurrentUserName(doc.data().userName)
          }
        })
      })
  }

  function getCurrentUserEmailAddress(email) {
    setCurrentUserEmail(email) 
  }

  function login(email, password) {
    
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)      
    })
    
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    loading,
    getCurrentUserEmailAddress,
    updatePassword,
    setUserInFirebase,
    currentUserName,
    currentUserEmail
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}