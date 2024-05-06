import { DOTS, usePagination } from './usePagination';
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const CommonPagination = (props) => {
  const { siblingCount = 1, pageSize, setCurrentData, data, setNumFirst, setNumData } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = data.length;

  function onPageChange(page) {
    setCurrentPage(page);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  const currentTableData = useMemo(() => {
    if (data) {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      if (firstPageIndex >= data.length) {
        return data.slice(0, lastPageIndex);
      } else {
        return data.slice(firstPageIndex, lastPageIndex);
      }
    }
  }, [currentPage, data, pageSize]);

  const numberOfData = useMemo(() => {
    const firstPageIndex = (Number(currentPage) - 1) * Number(pageSize);
    const lastPageIndex = Number(firstPageIndex) + Number(pageSize);
    if (lastPageIndex < totalCount || currentPage > firstPageIndex) {
      return firstPageIndex, lastPageIndex;
    } else {
      const lastPageIndex = totalCount;
      return lastPageIndex;
    }
  }, [currentPage, pageSize]);

  const numberOfFirstData = useMemo(() => {
    const firstPageIndex = (Number(currentPage) - 2) * Number(pageSize) + 1;
    const lastPageIndex = Number(firstPageIndex) + Number(pageSize);
    return firstPageIndex, lastPageIndex;
  }, [currentPage, pageSize]);

  useEffect(() => {
    setCurrentData(currentTableData);
    setNumData(numberOfData);
    setNumFirst(numberOfFirstData);
  }, [currentTableData, numberOfFirstData, numberOfData, pageSize]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className='pagination-container pagination-bar p-0 d-flex align-items-center justify-content-center pb-lg-4 pt-3'>
      <li
        className={`pagination-item ${currentPage === 1 && 'disabled' || ''}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        return (
          <>
            <li
              className={`pagination-item ${pageNumber === currentPage && 'selected' || ''}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          </>
        );
      })}
      <li
        className={`pagination-item ${currentPage === lastPage && 'disabled' || ''}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

CommonPagination.propTypes = {
  siblingCount: PropTypes.number,
  pageSize: PropTypes.number,
  setCurrentData: PropTypes.func,
  data: PropTypes.array,
  setNumFirst: PropTypes.func,
  setNumData: PropTypes.func,
};

export default CommonPagination;
