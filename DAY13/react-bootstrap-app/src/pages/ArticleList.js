import React from 'react'

import { Link } from 'react-router-dom'
const ArticleList = () => {
    return (
        <div>
            <h1> 게시글 목록</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="3">#</th>
                        <th colSpan="3">제목</th>
                        <th colSpan="3">날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <td colSpan="3">
                            <Link to="/article/detail/:id">테스트</Link>
                        </td>
                        <td colSpan="3">2024-02-19</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-outline-primary">
                <Link to="/article/regist">신규글 작성</Link>
            </button>
        </div>
    )
}

export default ArticleList
