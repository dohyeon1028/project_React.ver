import React from 'react'

function Filter_wrap() {
    return (
        <>
            <div className="filter_wrap">

                <div className="filter_item_category">
                    <div className="filter_tit">
                        CATEGORY
                        <i className="fa-solid fa-xmark close"></i>
                    </div>
                    <div className="filter_sublist">
                        <label htmlFor="category-1">
                            <input type="checkbox" title="의류" value="1" id="category-1" />
                            <span>의류</span>
                        </label>
                        <label htmlFor="category-2">
                            <input type="checkbox" title="신발" value="2" id="category-2" />
                            <span>신발</span>
                        </label>
                        <label htmlFor="category-3">
                            <input type="checkbox" title="악세사리" value="3" id="category-3" />
                            <span>악세사리</span>
                        </label>
                    </div>
                </div>
                <div className="filter_item_filter">
                    <div className="filter_tit">FILTER</div>
                    <div className="filter_sublist">
                        <label htmlFor="filter-1">
                            <input type="checkbox" title="남성" value="1" id="filter-1" />
                            <span>남성</span>
                        </label>
                            <label htmlFor="filter-2">
                            <input type="checkbox" title="여성" value="2" id="filter-2" />
                            <span>여성</span>
                        </label>
                            <label htmlFor="filter-3">
                            <input type="checkbox" title="남여공용" value="3" id="filter-3" />
                            <span>남여공용</span>
                        </label>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter_wrap