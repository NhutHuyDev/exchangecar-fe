// UI Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

// css
import './Pagination.css'
import { useDispatch } from 'react-redux';
import filtersSlice from 'redux/reducers/filtersSlice';
import { useEffect } from 'react';

function PaginationPage({ totalPage, currentPage, queryFilter, queryTable }) {
    const dispatch = useDispatch()
    const handlePaginationOnClick = (currentPage) => {
        dispatch(filtersSlice.actions.setPageFilter(currentPage))
        dispatch(filtersSlice.actions.setQueryFilter(queryTable))
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);

    if (totalPage <= 7) {
        return (
            <div className='d-flex paginationCustom'>
                <span onClick={() => handlePaginationOnClick(1)} className={`${1 > parseInt(currentPage) - 1 ? 'disable' : ''}`}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </span>
                <span onClick={() => handlePaginationOnClick(currentPage - 1)} className={`${1 > parseInt(currentPage) - 1 ? 'disable' : ''}`}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                {
                    Array(totalPage).fill(0).map((value, index) =>
                        <>
                            <span onClick={() => handlePaginationOnClick(index + 1)} className={`${index + 1 == currentPage ? 'active' : ''}`}>
                                {index + 1}
                            </span>
                        </>
                    )
                }
                <span onClick={() => handlePaginationOnClick(parseInt(currentPage) + 1)} className={`${parseInt(totalPage) < parseInt(currentPage) + 1 ? 'disable' : ''}`}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <span onClick={() => handlePaginationOnClick(totalPage)} className={`${parseInt(totalPage) < parseInt(currentPage) + 1 ? 'disable' : ''}`}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </span>
            </div>
        )
    } else {
        if (currentPage >= 4 && currentPage <= totalPage - 3) {
            return (
                <div className='d-flex paginationCustom'>
                    <span onClick={() => handlePaginationOnClick(1)}>
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                    <span onClick={() => handlePaginationOnClick(currentPage - 1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <span onClick={() => handlePaginationOnClick(1)}>
                        {1}
                    </span>

                    <span to={`#`}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                    {
                        [currentPage - 1, currentPage, parseInt(currentPage) + 1].map((value, index) =>
                            <>
                                <span onClick={() => handlePaginationOnClick(value)} className={`${value == currentPage ? 'active' : ''}`}>
                                    {value}
                                </span>
                            </>
                        )
                    }
                    <span to={`#`}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                    <span onClick={() => handlePaginationOnClick(totalPage)}>
                        {totalPage}
                    </span>
                    <span onClick={() => handlePaginationOnClick(parseInt(currentPage) + 1)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <span onClick={() => handlePaginationOnClick(totalPage)} >
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </div>
            )
        } else {
            if (currentPage <= 3) {
                return (
                    <div className='d-flex paginationCustom'>
                        <span onClick={() => handlePaginationOnClick(1)} className={`${1 > parseInt(currentPage) - 1 ? 'disable' : ''}`}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(currentPage - 1)} className={`${1 > parseInt(currentPage) - 1 ? 'disable' : ''}`}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                        {
                            Array(5).fill(0).map((value, index) =>
                                <>
                                    <span onClick={() => handlePaginationOnClick(index + 1)} className={`${index + 1 == currentPage ? 'active' : ''}`}>
                                        {index + 1}
                                    </span>
                                </>
                            )
                        }
                        <span to={`#`}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(totalPage)}>
                            {totalPage}
                        </span>
                        <span onClick={() => handlePaginationOnClick(parseInt(currentPage) + 1)} >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(totalPage)}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </span>
                    </div>
                )
            } else {
                return (
                    <div className='d-flex paginationCustom'>
                        <span onClick={() => handlePaginationOnClick(1)}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(currentPage - 1)}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(1)}>
                            {1}
                        </span>
                        <span to={`#`}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                        {
                            [totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage].map((value, index) =>
                                <>
                                    <span className={`${value == currentPage ? 'active' : ''}`} onClick={() => handlePaginationOnClick(value)}>
                                        {value}
                                    </span>
                                </>
                            )
                        }
                        <span onClick={() => handlePaginationOnClick(parseInt(currentPage) + 1)} className={`${parseInt(totalPage) < parseInt(currentPage) + 1 ? 'disable' : ''}`}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                        <span onClick={() => handlePaginationOnClick(totalPage)} className={`${parseInt(totalPage) < parseInt(currentPage) + 1 ? 'disable' : ''}`}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </span>
                    </div>
                )
            }
        }
    }
}

export default PaginationPage