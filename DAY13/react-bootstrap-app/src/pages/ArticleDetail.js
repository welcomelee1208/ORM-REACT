import React from 'react'

import { Link } from 'react-router-dom'
const ArticleDetail = () => {
    return (
        <div>
            <div className="mb-3">
                <label className="form-label">제목</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
            <div className="mb-3">
                <label className="form-label">내용</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button type="button" className="btn btn-outline-primary">
                    <Link to="/article/list">수정</Link>
                </button>
                <button type="button" className="btn btn-outline-primary">
                    <Link to="/article/list">목록이동</Link>
                </button>
            </div>
        </div>
    )
}

export default ArticleDetail
