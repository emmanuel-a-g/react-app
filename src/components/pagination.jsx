import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const {itemsCount, pageSize, pageChange, currentPage} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) {
    return null; 
  }
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        { /* Depends on # of Movies */ }
        {pages.map(page => (
          <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
            <a className="page-link" onClick={() => pageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired, 
  pageChange: PropTypes.func.isRequired,
}
export default Pagination
;