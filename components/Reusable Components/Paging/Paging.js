import Pagination from "react-js-pagination";

const Paging = (props) => {
  const { page } = props;
  const handlePageChange = (pageNumber) => {
    props.searchPage(pageNumber);
  };

  return (
    <>
      {(props.status === 200 || props.status === 404) &&
        props.totalCount !== null ? (
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-12">
              <div className="pagination">
                <Pagination
                  activePage={page}
                  itemsCountPerPage={10}
                  totalItemsCount={props.totalCount ? props.totalCount : null}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Paging;
