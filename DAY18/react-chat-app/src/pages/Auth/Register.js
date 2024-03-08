import React, { useState } from 'react'
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
} from 'reactstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import logodark from '../../assets/images/logo-dark.png'
import logolight from '../../assets/images/logo-light.png'

const Register = (props) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const toggleModal = () => setModal(!modal)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            email: Yup.string().email('Enter proper email').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            RegistData(values)
            navigate('/login')
        },
    })
    async function RegistData(values) {
        try {
            const memberData = {
                email: values.email,
                name: values.username,
                password: values.password,
            }
            const res = await axios.post('http://localhost:3005/api/member/entry', memberData)
            console.log('회원가입 처리결과 반환값:', res.data)

            setModalMessage('회원가입 성공')
            toggleModal()
            // alert('회원가입 성공')
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="account-pages my-5 pt-sm-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5}>
                        <div className="text-center mb-4">
                            <Link to="/" className="auth-logo mb-5 d-block">
                                <img src={logodark} alt="" height="30" className="logo logo-dark" />
                                <img src={logolight} alt="" height="30" className="logo logo-light" />
                            </Link>
                            <h4>Register</h4>
                            <p className="text-muted mb-4">Get your Chatvia account now.</p>
                        </div>

                        <Card>
                            <CardBody className="p-4">
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        formik.handleSubmit()
                                        // return false;
                                    }}
                                >
                                    <div className="mb-3">
                                        <Label className="form-label">Email</Label>
                                        <InputGroup className="input-group bg-soft-light rounded-3 mb-3">
                                            <span className="input-group-text text-muted">
                                                <i className="ri-mail-line"></i>
                                            </span>
                                            <Input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control form-control-lg bg-soft-light border-light"
                                                placeholder="Enter Email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                invalid={formik.touched.email && formik.errors.email ? true : false}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                            ) : null}
                                        </InputGroup>
                                    </div>

                                    <div className="mb-3">
                                        <Label className="form-label">Username</Label>
                                        <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <span className="input-group-text border-light text-muted">
                                                <i className="ri-user-2-line"></i>
                                            </span>
                                            <Input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className="form-control form-control-lg bg-soft-light border-light"
                                                placeholder="Enter Username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                                invalid={
                                                    formik.touched.username && formik.errors.username ? true : false
                                                }
                                            />
                                            {formik.touched.username && formik.errors.username ? (
                                                <FormFeedback type="invalid">{formik.errors.username}</FormFeedback>
                                            ) : null}
                                        </InputGroup>
                                    </div>

                                    <FormGroup className="mb-4">
                                        <Label className="form-label">Password</Label>
                                        <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                            <span className="input-group-text border-light text-muted">
                                                <i className="ri-lock-2-line"></i>
                                            </span>
                                            <Input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control form-control-lg bg-soft-light border-light"
                                                placeholder="Enter Password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                invalid={
                                                    formik.touched.password && formik.errors.password ? true : false
                                                }
                                            />
                                            {formik.touched.password && formik.errors.password ? (
                                                <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                            ) : null}
                                        </InputGroup>
                                    </FormGroup>

                                    <div className="d-grid">
                                        <Button
                                            color="primary"
                                            block
                                            className=" waves-effect waves-light"
                                            type="submit"
                                        >
                                            Register
                                        </Button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="text-muted mb-0">
                                            By registering you agree to the Chatvia
                                            <Link to="#" className="text-primary">
                                                Terms of Use
                                            </Link>
                                        </p>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p>
                                Already have an account ?
                                <Link to="/login" className="font-weight-medium text-primary">
                                    Signin
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

            {/* Modal for success message */}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>회원가입</ModalHeader>
                <ModalBody>{modalMessage}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>
                        확인
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Register
