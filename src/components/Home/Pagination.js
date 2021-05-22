import { Container, Row } from "react-bootstrap";
import { useData } from "../../contexts/FirebaseDataContext";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import AdCard from "../AdCard/AdCard";
import styles from "../../modules/pagination.module.css";

const Pagination = () => {
  const { allAds } = useData();
  const [pageNumber, setPageNumber] = useState(0);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const adsPerPage = 10;
  const pagesVisited = pageNumber * adsPerPage;
  const pageCount = Math.ceil(allAds.length / adsPerPage);
  const displayAds = allAds
    .slice(pagesVisited, pagesVisited + adsPerPage)
    .map((ad) => {
      return (
        <div key={ad.title}>
          <AdCard
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
    <div>
      <div style={{ marginTop: "4rem", marginBottom: "10rem" }}>
        <Container>
          <Row>{displayAds}</Row>
        </Container>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBtns}
          previousLinkClassName={styles.previousBtn}
          nextLinkClassName={styles.nextLink}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
};

export default Pagination;
