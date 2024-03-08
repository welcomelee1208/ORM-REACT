import React from 'react'

import { Link } from 'react-router-dom'
const ArticleRegist = (article) => {
    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    제목
                </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    내용
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-outline-primary">
                <Link to="/article/list">저장</Link>
            </button>
        </div>
    )
}

export default ArticleRegist
