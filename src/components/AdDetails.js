import { useParams } from "react-router-dom";
import NavbarTop from "./NavbarTop";
import BreadcrumbComponent from "./BreadcrumbComponent";
import { useData } from "../contexts/FirebaseDataContext";
import { useEffect, useState } from "react";

const AdDetails = () => {
  const { id } = useParams();
  const { allAds, updateViews } = useData();
  const [views, setViews] = useState();

  useEffect(() => {
    viewsCount();
    updateViews(id, views + 1);
  }, [views]);

  const viewsCount = () => {
    allAds.map((ad) => {
      if (ad.adName === id) {
        return setViews(ad.views);
      }
    });
  };

  return (
    <div>
      <NavbarTop />
      <BreadcrumbComponent path={"category"} name={"Categories"} id={id} />
      {allAds.map((ad) => {
        if (ad.adName === id) {
          return (
            <div key={ad.adName} style={{ marginTop: "5rem" }}>
              <h3>{ad.adName}</h3>
              <h4>{ad.category}</h4>
              <p>Posted by: {ad.adOwner}</p>
              <img
                src={ad.imgURL}
                style={{ width: "18rem" }}
                alt={`${ad.adName}`}
              />
              <p>{ad.description}</p>
              <p>Price: {ad.price}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AdDetails;
