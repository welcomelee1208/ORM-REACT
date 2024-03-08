import React, { useState } from 'react'

const Board = () => {
    //게시글 데이터 구조 정의 및 초기값 할당
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: '제목',
            desc: '테스트 입니다',
            writer: ' welcome',
        },
        {
            id: 2,
            title: '제목',
            desc: '테스트 입니다',
            writer: ' welcome',
        },
        {
            id: 3,
            title: '제목',
            desc: '테스트 입니다',
            writer: ' welcome',
        },
    ])
    const [article, setArticle] = useState({
        id: 0,
        title: '',
        desc: '',
        writer: '',
    })
    //게시글 고유번호 데이터 정의
    const [articleId, setArticleId] = useState(4)
    const onSave = () => {
        setArticles(...articles, { id: articleId, text: '', desc: '', writer: '' })
    }

    const onModify = () => {}

    const onRemove = () => {}

    const onInit = () => {}

    const onBoardChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value })
    }
    const onSelect = () => {}
    return (
        <div>
            제목:
            <input name="title" value={articles.title} onChange={onBoardChange} />
            <br />
            내용:
            <input name="desc" value={articles.desc} onChange={onBoardChange} />
            <br />
            등록자:
            <input name="writer" value={articles.writer} onChange={onBoardChange} />
            <br />
            <button onClick={onSave}>등록</button>
            <button onClick={onModify}>수정</button>
            <button onClick={onRemove}>삭제</button>
            <button onClick={onInit}>초기화</button>
            <hr></hr>
            <table style={{ margin: '0 auto', width: '50%' }}>
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>글쓴이</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>{article.desc}</td>
                    <td>{article.writer}</td>
                    <td>
                        <button onClick={onSelect}>선택</button>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default Board
