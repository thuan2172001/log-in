import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

const logo = "./src/img/logo.svg";

const Notification = () => {
    return (
        <div id="notification">
            <div className="row">
                <div className="col-md">
                    <div className="col1-1">
                        <div className="box-header">
                            <span><i className="fa fa-suitcase fa-1x"
                                     aria-hidden="true"></i>&nbsp;Tin tức mới nhất</span>
                        </div>
                        <div className="news" id="TinMoiNhat">
                            <div className="row">
                                <div className="mediaList col-md-6">
                                    <div className="media">
                                        <div className="pull-left">
                                            <a className="" href="https://uet.vnu.edu.vn/wp-content/uploads/2020/11/DS-SV-ho%C3%A3n-n%E1%BB%99p-h%E1%BB%8Dc-ph%C3%AD.pdf">
                                                <img width="64" height="64" src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading" >
                                                <a href="https://uet.vnu.edu.vn/wp-content/uploads/2020/11/DS-SV-ho%C3%A3n-n%E1%BB%99p-h%E1%BB%8Dc-ph%C3%AD.pdf">
                                                    Danh sách sinh viên được hoãn nộp học phí kì I (2020-2021)
                                                </a>
                                            </h4>
                                            <span className=""><i className="fa fa-clock-o"></i> 08/ 09/ 2020</span>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="pull-left">
                                            <a className="" href="https://uet.vnu.edu.vn/wp-content/uploads/2020/11/DANH-SACH-THU-K1.20-21-TT23-1.pdf">
                                                <img width="64" height="64"
                                                     src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading">
                                                <a href="https://uet.vnu.edu.vn/wp-content/uploads/2020/11/DANH-SACH-THU-K1.20-21-TT23-1.pdf">
                                                    DANH SÁCH CHƯƠNG TRÌNH ĐÀO TẠO CLC 2020-2021
                                                </a>
                                            </h4>
                                            <span className=""><i className="fa fa-clock-o"></i> 29/ 06/ 2020</span>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="pull-left">
                                            <a className="" href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/Danh-s%C3%A1ch-SV-4.pdf">
                                                <img width="64" height="64"
                                                     src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading">
                                                <a href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/Danh-s%C3%A1ch-SV-4.pdf">
                                                    Triệu tập sinh viên tham dự Hội thảo giới thiệu chương trình MB IT CUP
                                                </a>
                                            </h4>
                                            <span className=""><i className="fa fa-clock-o"></i> 28/ 06/ 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mediaList col-md-6">
                                    <div className="media">
                                        <div className="pull-left">
                                            <a className="" href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/2021_1_Ket-qua-Quy-gui_Danh-s%C3%A1ch-nh%E1%BA%ADn-HB.pdf">
                                                <img width="64" height="64"
                                                     src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading" >
                                                <a href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/2021_1_Ket-qua-Quy-gui_Danh-s%C3%A1ch-nh%E1%BA%ADn-HB.pdf">
                                                    Sinh viên nhận học bổng Kumho Asiana học kỳ 1, năm học 2020-2021
                                                </a>
                                            </h4>
                                            <span className="" ><i className="fa fa-clock-o"></i> 15/ 05/ 2020</span>
                                        </div>
                                    </div>
                                    <div className="media" >
                                        <div className="pull-left">
                                            <a className="" href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/Thong-bao-so-1-Olympic-vat-ly-2021.pdf">
                                                <img width="64" height="64"
                                                     src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading" >
                                                <a href="https://uet.vnu.edu.vn/wp-content/uploads/2021/01/Thong-bao-so-1-Olympic-vat-ly-2021.pdf">
                                                    Sinh viên đăng ký thi chọn đội tuyển Olympic Vật lý sinh viên toàn quốc lần thứ XXIII năm 2021
                                                </a>
                                            </h4>
                                            <span className="" ><i className="fa fa-clock-o"></i> 07/ 05/ 2020</span>
                                        </div>
                                    </div>
                                    <div className="media" >
                                        <div className="pull-left">
                                            <a className="" href="http://daotao.daihocthudo.edu.vn/Common/ChiTietTin/544">
                                                <img width="64" height="64" src={logo}>
                                                </img>
                                            </a>
                                        </div>

                                        <div className="media-body">

                                            <h4 className="media-heading" >
                                                <a href="http://daotao.daihocthudo.edu.vn/Common/ChiTietTin/544">
                                                    Hủy đăng ký môn học do nợ học phí
                                                </a>
                                            </h4>
                                            <span className="" ><i className="fa fa-clock-o"></i> 07/ 05/ 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const logo1 = "./src/img/hogwart.svg";

const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar navbar-dark navbar-expand-sm fixed-top" expand="lg">
                <a className="navbar-brand" href="#"><img src={logo1} height="80" width="auto"></img></a>
                <Navbar.Brand href="#home">HỌC VIỆN PHÁP THUẬT HOGWART</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Trang chủ</Nav.Link>
                        <Nav.Link href="#about">Giới thiệu</Nav.Link>
                        <NavDropdown title="Tra cứu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Danh sách môn học kì này</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Điểm thi học kì trước</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Chỉnh sửa thông tin</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/login">Đăng xuất</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl className="Nav-form mr-sm-2" type="text" placeholder="Mã lớp học" />
                        <Button variant="outline-default" className = "Nav-button">Tra cứu danh sách lớp</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <div className="row ">
                    <NavBar />
                    <div className="col-md-6 col-md-offset-6">
                    <br />
                    <h1>Hi {user.firstName}!</h1>
                    <p>Welcome to Hogwarts Academy, the best school for young witches and wizards to learn. But keep mind my magical friends, this is a dangerous place, with adventure and mystery around every corner, and Death Eater attacks. Join the group Hogwarts Academy to know when classes, raids, and meetings are going on.</p>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                    }
                    </div>
                    <div>
                        <br />
                    </div>
                </div>
                <Notification />
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };