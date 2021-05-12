import AdCard from "./AdCard";
import BreadcrumbComponent from "./BreadcrumbComponent";
import NavbarTop from "./NavbarTop";
import { useData } from "../contexts/FirebaseDataContext";
import { useAuth } from "../contexts/AuthContext";

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
            <div key={ad.title}>
              <AdCard
                category={ad.category}
                title={ad.adName}
                price={ad.price}
                imgURL={ad.imgURL}
                canDelete={true}
                canEdit={true}
                seeMoreIsVisible={false}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default MyAdsComponent;
