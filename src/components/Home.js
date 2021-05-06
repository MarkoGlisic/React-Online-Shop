import { Container, Row } from "react-bootstrap";
import AdCard from "../components/AdCard.jsx";
import Navbar from "./NavbarTop.jsx";
import { useData } from "../contexts/FirebaseDataContext";

const Home = () => {
  const { allAds } = useData();



  return (
    <>
      <Navbar />
            <div>
              <Container>
                <Row>
                  {allAds.map((ad) => {
                    return (
                      <div key={ad.title}>

                      <AdCard
                      category={ad.category}
                      title={ad.adName}
                      price={ad.price}
                      imgURL={ad.imgURL}
                      />
                      </div>
                      );
                    })}
                </Row>
              </Container>
            </div>
          
                    
          
    </>
  );
};

export default Home;
