import React, { useContext, useState, useEffect } from "react";
import { database } from "../firebase";

const FirebaseDataContext = React.createContext();

export function useData() {
  return useContext(FirebaseDataContext);
}

export function FirebaseDataProvider({ children }) {
    const [allAds, setAllAds] = useState();
  const [specificAd, setSpecificAd] = useState();

  useEffect(() => {
    getAllAds();
  }, []);
  
  function getAllAds() {
    database.collection("advertisementItem").onSnapshot((querySnapshot) => {
      setAllAds(
        querySnapshot.docs.map((doc) => ({
          adID: doc.id,
          adOwner: doc.data().adOwner,
          category: doc.data().category,
          imgURL: doc.data().imgURL,
          price: doc.data().price,
          adName: doc.data().adName
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
          price: price
      })
    }

    function setUser(email) {}
    function getCurrentUserAds(currentUser) {}

   function getSpecificAdInformation(title) {
      database.collection('advertisementItem').onSnapshot((querySnapshot) => {
        querySnapshot.docs.map(doc => {
          if(doc.data().title == title) {
            setSpecificAd({
              adOwner: doc.data().adOwner,
              price: doc.data().price
            })
          }
        })
      })
    }

    
    
    const value = {
      getCurrentUserAds,
      getSpecificAdInformation,
      specificAd,
      allAds,
      setNewAd
  };

  return (
    <FirebaseDataContext.Provider value={value}>
      {allAds && children}
    </FirebaseDataContext.Provider>
  );
}
