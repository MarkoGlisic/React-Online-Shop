import React, { useContext, useState, useEffect } from "react";
import { database } from "../firebase";

const FirebaseDataContext = React.createContext();

export function useData() {
  return useContext(FirebaseDataContext);
}

export function FirebaseDataProvider({ children }) {
    const [allAds, setAllAds] = useState();
    const [allUsers, setAllUsers] = useState();
  const [specificAd, setSpecificAd] = useState();

  useEffect(() => {
    getAllAds();
    getAllUsers();
  }, []);
  
  function getAllUsers() {
    database.collection('userProfiles').onSnapshot((querySnapshot) => {
      setAllUsers(
        querySnapshot.docs.map((doc) => ({
          date: doc.data().date,
          email: doc.data().email,
          phoneNumber: doc.data().phoneNumber,
          userName: doc.data().userName
        }))
      )
    })
  }

  function getAllAds() {
    database.collection("advertisementItem").onSnapshot((querySnapshot) => {
      setAllAds(
        querySnapshot.docs.map((doc) => ({
          adID: doc.id,
          adOwner: doc.data().adOwner,
          category: doc.data().category,
          description: doc.data().description,
          imgURL: doc.data().imgURL,
          price: doc.data().price,
          adName: doc.data().adName,
          views: doc.data().views
        }))
        );
      });
    }
      
    function setNewAd(title, description, imgURL, city, price, category, user) {
      database.collection("advertisementItem").add({
          adOwner: user,
          category: category,
          imgURL: imgURL,
          adName: title,
          description: description,
          city: city,
          price: price,
          views: 0
      })
    }


    const value = {
      specificAd,
      allAds,
      setNewAd,
      allUsers
  };

  return (
    <FirebaseDataContext.Provider value={value}>
      {allAds && children}
    </FirebaseDataContext.Provider>
  );
}
