import MyAdCard from "./MyAdCard";
import BreadcrumbComponent from "../Header/BreadcrumbComponent";
import NavbarTop from "../Header/NavbarTop";
import { useData } from "../../contexts/FirebaseDataContext";
import { useAuth } from "../../contexts/AuthContext";

const MyAdsComponent = () => {
  const { allAds } = useData();
  const { currentUserName } = useAuth();
  return (
    <>
      <NavbarTop />
      <BreadcrumbComponent
        path={"category"}
        name={"Categories"}
        id={"My Ads"}
      />
      {allAds.map((ad) => {
        if (ad.adOwner === currentUserName) {
          return (
            <div key={ad.adName + ad.imgURL}>
              <MyAdCard
                category={ad.category}
                title={ad.adName}
                price={ad.price}
                imgURL={ad.imgURL}
                description={ad.description}
                city={ad.city}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default MyAdsComponent;
