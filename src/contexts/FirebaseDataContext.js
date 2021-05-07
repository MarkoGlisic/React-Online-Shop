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
          description: doc.data().description,
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


    function test(item) {
      setSpecificAd(item)
    }
    function getCurrentUserAds(currentUser) {}

   function getSpecificAdInformation(title) {
      // allAds.map(ad => {
      //   if (ad.adName == title.toString()) {
      //     setSpecificAd({
      //       adName: ad.adName,
      //       adPrice: ad.price
      //     })
      //   }
      // })

      // database.collection('advertisementItem').get().then((querySnapshot) => {
      //   querySnapshot.docs.map(doc => {
      //     if(doc.data().adName === title.toString()) {
      //       setSpecificAd({
      //         adOwner: doc.data().adOwner,
      //         description: doc.data().description,
      //         adName: doc.data().adName,
      //         price: doc.data().price
      //       })
      //     }
      //   })
      // })
    }

    
    
    const value = {
      getCurrentUserAds,
      getSpecificAdInformation,
      specificAd,
      allAds,
      setNewAd,
      test
  };

  return (
    <FirebaseDataContext.Provider value={value}>
      {allAds && children}
    </FirebaseDataContext.Provider>
  );
}
