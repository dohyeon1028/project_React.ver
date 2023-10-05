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
                        <label for="category">
                            <input type="checkbox" title="의류" value="1" id="class-1" />
                            <span>의류</span>
                        </label>
                        <label for="category">
                            <input type="checkbox" title="신발" value="2" id="class-2" />
                            <span>신발</span>
                        </label>
                        <label for="category">
                            <input type="checkbox" title="악세사리" value="2" id="class-2" />
                            <span>악세사리</span>
                        </label>
                    </div>
                </div>
                <div className="filter_item_filter">
                    <div className="filter_tit">FILTER</div>
                    <div className="filter_sublist">
                        <label for="filter">
                            <input type="checkbox" title="남녀공용" value="1" id="class-1" />
                            <span>남녀공용</span>
                        </label>
                        <label for="filter">
                            <input type="checkbox" title="남성" value="2" id="class-2" />
                            <span>남성</span>
                        </label>
                        <label for="filter">
                            <input type="checkbox" title="여성" value="2" id="class-2" />
                            <span>여성</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter_wrap