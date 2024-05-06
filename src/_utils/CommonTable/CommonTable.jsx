import { faLongArrowAltDown, faLongArrowAltUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';

const ChartPricePopUp = dynamic(import('components/ChartPricePopUp'));
const CommonPagination = dynamic(import('_utils/CommonPagination/CommonPagination'));

function CommonTable(props) {
  const { tableColumns, tableRows, searchView, isChart } = props;
  const [currentData, setCurrentData] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [numData, setNumData] = useState(null);
  const [numFirst, setNumFirst] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [ascending, setAscending] = useState(false);

  const selectNum = [
    { name: 'All', value: 'all' },
    { name: '10', value: 10 },
    { name: '20', value: 20 },
    { name: '50', value: 50 },
    { name: '100', value: 100 },
  ];

  useEffect(() => {
    if (searchInput !== '') {
      const filtered = tableRows.filter((item) => {
        return Object.keys(item).some((key) =>
          item?.[key]?.toString().toLowerCase().includes(searchInput.toLowerCase()),
        );
      });

      setFilterData(filtered);
    } else {
      setFilterData(tableRows);
    }
  }, [searchInput, tableRows]);

  function selectBox() {
    return (
      <>
        <div className="form-group input-box me-3 text-md-center my-3 mt-md-0">
          <select
            className="border rounded-3 oi-select cursor-pointer label-color-4"
            onChange={(e) => setCurrentPageSize((e.target.value == 'all' && tableRows.length) || e.target.value)}
          >
            {selectNum.map((item, ind) => {
              return (
                <>
                  <option key={ind} selected={item.value == 10} value={item.value}>
                    {item.name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </>
    );
  }

  function getVariableWithType(varA, varB) {
    const numRegx = /^\d+$/;
    let keyA = varA;
    let keyB = varB;
    if (numRegx.test(varA)) {
      keyA = parseInt(varA);
      keyB = parseInt(varB);
    }
    if (moment(varA).isValid()) {
      keyA = moment(varA);
      keyB = moment(varB);
    }
    return { keyA, keyB };
  }

  function handleSorting(keyName) {
    const sorted = [...filterData];
    if (ascending) {
      sorted.sort(function(a, b) {
        const { keyA, keyB } = getVariableWithType(a[keyName], b[keyName]);
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });
      setFilterData([...sorted]);
    } else {
      sorted.sort(function(a, b) {
        const { keyA, keyB } = getVariableWithType(a[keyName], b[keyName]);
        if (keyA > keyB) {
          return -1;
        }
        if (keyA < keyB) {
          return 1;
        }
        return 0;
      });
      setFilterData([...sorted]);
    }
    setAscending(!ascending);
  }

  function renderTableColumns() {
    return (
      <thead>
        <tr>
          {tableColumns.map((item, key) => {
            return (
              <th key={key}>
                {item.heading}
                {item.field != 'srno' && (
                  <button
                    className="p-1 bg-transparent border-0 text-white outline-0 shadow-none"
                    onClick={() => handleSorting(item.field)}
                  >
                    <FontAwesomeIcon icon={faLongArrowAltUp} width={5} className="mb-1 ms-1" />
                    <FontAwesomeIcon icon={faLongArrowAltDown} width={5} className="mt-1" />
                  </button>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  function renderTableRows() {
    const columns = tableColumns;
    return (
      <tbody>
        {(currentData &&
          currentData.length > 0 &&
          currentData.map((row, key) => {
            return (
              <tr key={key}>
                {columns.map((col, colKey) => {
                  if (col.field == 'srno') {
                    return <td key={colKey}>{key + numFirst}</td>;
                  }
                  if (col.field == 'symbol' && isChart) {
                    let symbol = row[col.field];
                    let url = `/stocks-analysis/${symbol.replace(/&/g, "_")}`;
                    if (symbol == 'NIFTY 50') {
                      url = '/live-analytics';
                      symbol='nifty';
                    } else if (symbol == 'NIFTY BANK') {
                      url = '/banknifty-live-analysis';
                      symbol='banknifty';
                    } else if (symbol == 'NIFTY FIN SERVICE') {
                      url = '/live-finnifty-open-interest';
                      symbol='CNXFINANCE';
                    }
                    return (
                      <td key={colKey} className="d-flex align-items-center">
                      <ChartPricePopUp symbol={symbol}/>
                        <a
                          href={url}
                          target={'_blank'}
                          className="text-decoration-none text-black" rel="noreferrer"
                        >
                          {row[col.field] == 'NIFTY FIN SERVICE' && 'FIN NIFTY' || row[col.field]}
                        </a>
                      </td>
                    );
                  }
                  return <td key={colKey}>{row[col.field]}</td>;
                })}
              </tr>
            );
          })) || (
          <tr>
            <td colSpan={5} className="text-center">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    );
  }

  return (
    <>
      {searchView && (
        <div className="search-box position-relative text-center me-2 w-25 ms-auto pb-3">
          <FontAwesomeIcon icon={faSearch} width="16" height="16" className="position-absolute" />
          <input
            type="text"
            className="form-control fs-14 shadow-none rounded-0 p-1 w-100 bg-transparent"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="input-border"></span>
        </div>
      )}
      <div className="table-responsive overview-table">
        <table className="w-100 nifty-table">
          {tableColumns && renderTableColumns()}
          {tableRows && renderTableRows()}
        </table>
        <div className="d-md-flex align-items-baseline text-center justify-content-between mt-3">
          {currentData.length > 0 && (
            <>
              {(tableRows.length > 10 && (
                <p className="fs-16 fw-500 label-color-4">
                  Showing {numFirst} to{' '}
                  <span className="fs-16 fw-500 label-color-4">
                    {(numData > currentData.length && numFirst == 1 && currentData.length) || numData}{' '}
                  </span>
                  of {tableRows.length} entries
                </p>
              )) || (
                <p className="fs-16 fw-500 label-color-4">
                  Showing {numFirst} to <span className="fs-16 fw-500 label-color-4">{currentData.length}</span> of{' '}
                  {tableRows.length} entries
                </p>
              )}
            </>
          )}
          <CommonPagination
            className="pagination-bar p-0 d-flex align-items-end justify-content-center pb-lg-4 pt-3"
            data={filterData}
            pageSize={Number(currentPageSize)}
            setCurrentData={setCurrentData}
            setNumData={setNumData}
            setNumFirst={setNumFirst}
            currentPageSize={currentPageSize}
          />
          {currentData.length >= 1 && <>{tableRows.length > 10 && selectBox()}</>}
        </div>
      </div>
    </>
  );
}

CommonTable.propTypes = {
  tableColumns: PropTypes.array,
  tableRows: PropTypes.array,
  searchView: PropTypes.bool,
  isChart: PropTypes.bool,
};

CommonTable.defaultProps = {
  searchView: true,
  isChart: false,
};

export default CommonTable;
