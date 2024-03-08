import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
//백엔드 통신을 위한 엑시오스 참조하기
import axios from "axios";
const Articles = () => {
  //navigate 훅 생성하기
  const navigate = useNavigate();

  // 게시글 목록 데이커 상태 구현하기
  const [articleList, setArticleList] = useState([]);
  //최초화면 렌더링시에 백엔드 게시글 목록 조회/바인딩 하기
  useEffect(() => {
    console.log("최초 화면렌더링시에 호출됩니다111.");
    //콜백방식으로 axios 를 구현하는 경우:(비동기)
    // axios
    //   .get("http://localhost:3005/api/articles")
    //   .then((res) => {
    //     console.log("백엔드에서 전달된 데이터 목록2222222:", res);

    //     //정상적인 API호출이면 벡엔드 게시글 목록 배열을 해당 상태값으로 변경해준다.
    //     if (res.data.code === "200") {
    //       setArticleList(res.data.data);
    //     } else {
    //       setArticleList(res.data.result);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("백엔드 호출 에러발생...3333333", err);
    //   });

    getArticles();
    console.log("데이터 처리와 상관없는 로직/화면 구현33333333");
  }, []);
  //비동기 ㅏㅎㅁ수 구현
  async function getArticles() {
    try {
      const res = await axios.get("http://localhost:3005/api/articles");
      console.log("백엔드에서 전달된 데이터 목록2222222:", res);
      setArticleList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  }
  //익명함수
  const getArticles2 = async () => {
    try {
      const res = await axios.get("http://localhost:3005/api/articles");
      console.log("백엔드에서 전달된 데이터 목록2222222:", res);
      setArticleList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="article-wrapper">
      <div className="row mb-2">
        <div className="col">
          <h4>게시글 목록</h4>
        </div>
        <div className="col">
          {/* <button className="btn btn-primary float-end" onClick={()=>navigate("/article")}>글작성</button> */}
          <Link className="btn btn-primary float-end" to="/article">
            글작성
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">글순번</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">글쓴이</th>
            <th scope="col">등록일시</th>
          </tr>
        </thead>
        <tbody>
          {articleList.map((item, index) => (
            <tr key={item.article_id}>
              <th scope="row">{item.article_id}</th>
              <td>
                <Link to={{ pathname: "/article/" + item.article_id }}>
                  {item.title}
                </Link>
              </td>
              <td>{item.view_count}</td>
              <td>{item.reg_member_id}</td>
              <td>
                {moment(item.reg_date).format("YYYY년-MM월-DD일 HH시:mm분")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
