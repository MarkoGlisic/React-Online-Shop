import { Container, Row } from "react-bootstrap";
import AdCardList from "../components/AdCardList";
import ReactPaginate from 'react-paginate'
import NavbarTop from "./NavbarTop.jsx";
import { useData } from "../contexts/FirebaseDataContext";
import { useState } from "react";
import styles from '../modules/pagination.module.css';

const Home = () => {

  // Svu ovu logic prebaciti u Pagination componentu
  const { allAds } = useData();
  const [pageNumber, setPageNumber] = useState(0)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  const adsPerPage = 10;
  const pagesVisited = pageNumber * adsPerPage
  const pageCount = Math.ceil(allAds.length / adsPerPage)
  const displayAds = allAds.slice(pagesVisited, pagesVisited + adsPerPage).map((ad) => {
    return (
      <div key={ad.title}>
      <AdCardList
      category={ad.category}
      title={ad.adName}
      price={ad.price}
      adOwner={ad.adOwner}
      imgURL={ad.imgURL}
      description={ad.description}
      adViews={ad.views}
      />
      </div>
      );
    });

  return (
    <>
      <NavbarTop />
            // Kod ispod staviti u Pagination componentu
            <div style={{marginTop:'4rem', marginBottom:'10rem'}}> {/*Prebaciti u pagination module*/}
              <Container>
                <Row>
                  {displayAds}
                </Row>
              </Container>
              <ReactPaginate
               previousLabel={'Previous'}
               nextLabel={'Next'}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={styles.paginationBtns}
               previousLinkClassName={styles.previousBtn}
               nextLinkClassName={styles.nextLink}
               disabledClassName={styles.paginationDisabled}
               activeClassName={styles.paginationActive}
              />
            </div>          
    </>
  );
};

export default Home;
