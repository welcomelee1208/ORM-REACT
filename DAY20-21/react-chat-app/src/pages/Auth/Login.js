import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  FormFeedback,
  Label,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/action";

import { useFormik } from "formik";
import * as Yup from "yup";
//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

const Login = (props) => {
  const globalDisptch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      LoginData(values);
      navigate("/dashboard");
    },
  });

  const toggleModal = () => setModal(!modal);

  async function LoginData(values) {
    try {
      var loginData = {
        email: values.email,
        password: values.password,
      };
      const res = await axios.post(
        "http://localhost:3005/api/member/login",
        loginData
      );
      console.log("로그인 결과", res.data);
      window.localStorage.setItem("jwttoken", res.data.data.token);

      if (res.data.code === "200") {
        // 로컬 스토리지 공간에 jwt 토큰값 보관
        globalDisptch(userLogin(res.data.data.token, res.data.data.loginUser));
        navigate("/dashboard");
      } else {
        setModalMessage(res.data.result);
        toggleModal();
        // navigate('/login') // 로그인 실패 시에도 navigate('/login')을 실행하면 무한 루프에 빠질 수 있습니다.
      }
    } catch (err) {
      console.log("에러발생");
    }
  }
  document.title = "Login | Chatvia React - Responsive Bootstrap 5 Chat App";

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="text-center mb-4">
                <Link to="/" className="auth-logo mb-5 d-block">
                  <img
                    src={logodark}
                    alt=""
                    height="30"
                    className="logo logo-dark"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="30"
                    className="logo logo-light"
                  />
                </Link>

                <h4>Sign in</h4>
                <p className="text-muted mb-4">
                  ign in to continue to Chatvia.
                </p>
              </div>

              <Card>
                <CardBody className="p-4">
                  <div className="p-3">
                    <Form onSubmit={formik.handleSubmit}>
                      <div className="mb-3">
                        <Label className="form-label">Username</Label>
                        <InputGroup className="mb-3 bg-soft-light rounded-3">
                          <span
                            className="input-group-text text-muted"
                            id="basic-addon3"
                          >
                            <i className="ri-user-2-line"></i>
                          </span>
                          <Input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control form-control-lg border-light bg-soft-light"
                            placeholder="Enter email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            invalid={
                              formik.touched.email && formik.errors.email
                                ? true
                                : false
                            }
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <FormFeedback type="invalid">
                              {formik.errors.email}
                            </FormFeedback>
                          ) : null}
                        </InputGroup>
                      </div>

                      <FormGroup className="mb-4">
                        <div className="float-end">
                          <Link
                            to="/forget-password"
                            className="text-muted font-size-13"
                          >
                            Forgot password
                          </Link>
                        </div>
                        <Label className="form-label">Password</Label>
                        <InputGroup className="mb-3 bg-soft-light rounded-3">
                          <span className="input-group-text text-muted">
                            <i className="ri-lock-2-line"></i>
                          </span>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg border-light bg-soft-light"
                            placeholder="Enter Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            invalid={
                              formik.touched.password && formik.errors.password
                                ? true
                                : false
                            }
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <FormFeedback type="invalid">
                              {formik.errors.password}
                            </FormFeedback>
                          ) : null}
                        </InputGroup>
                      </FormGroup>

                      <div className="form-check mb-4">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="remember-check"
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="remember-check"
                        >
                          Remember me
                        </Label>
                      </div>

                      <div className="d-grid">
                        <Button
                          color="primary"
                          block
                          className=" waves-effect waves-light"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Don't have an account ?
                  <Link
                    to="/register"
                    className="font-weight-medium text-primary"
                  >
                    Signup now
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Chatvia. Crafted with
                  <i className="mdi mdi-heart text-danger"></i>
                  by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>{modalMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            확인
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Login;