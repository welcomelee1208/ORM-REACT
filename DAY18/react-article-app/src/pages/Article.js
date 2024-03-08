import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
const Article = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });
  //모달팝업 오픈제어 상태값 확인하기
  const [modal, setModal] = useState(false);
  const [validationText, setValidationText] = useState("");
  // 초기 페이지 렌더링시 마우스 포커스 처리를 위한 useRef 정의
  const refTitle = useRef();
  //페이지 이동을 위한 navigate훅 생성
  const navigate = useNavigate();
  //최초 로딩시 제목입력박스에 마우스 포커스 주기
  useEffect(() => {
    refTitle.current.focus();
  }, []);

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  //저장 버튼 클릭시 데이터 저장 처리후 게시글 목록으로 이동처리하기
  const onArticleSubmit = (e) => {
    if (article.title === "") {
      setValidationText("타이틀이 비어있습니다!");
      setModal(true);
      refTitle.current.focus();
      e.preventDefault();
      return false;
    }
    getArticle();
    e.preventDefault();
  };
  async function getArticle() {
    try {
      // axios.post 메소드를 await 키워드와 함께 사용하여 비동기 처리를 기다립니다.
      const res = await axios.post(
        "http://localhost:3005/api/articles",
        article
      );
      console.log("데이터 처리결과값:", res.data);

      if (res.data.code === "200") {
        alert("등록완료");
        navigate("/articles");
      } else {
        alert("등록실패");
      }
    } catch (err) {
      // 오류를 콘솔에 기록합니다.
      console.error("데이터 처리 중 오류 발생:", err);
    }
  }

  //모달 제어 핸들러
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="article-wrapper">
      <div className="row mb-3">
        <div className="col">
          <h4>게시글 작성</h4>
        </div>
      </div>

      <form onSubmit={onArticleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">제목</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              ref={refTitle}
              className="form-control"
              value={article.title}
              onChange={onArticleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">내용</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              name="contents"
              rows="10"
              value={article.contents}
              onChange={onArticleChange}
            ></textarea>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              저장
            </button>
          </div>
        </div>
      </form>

      {/* <Button color="danger" onClick={toggleModal}>
        Click Me
      </Button> */}

      <Modal isOpen={modal}>
        <ModalHeader>유효성검사</ModalHeader>
        <ModalBody>{validationText}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            확인
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Article;
