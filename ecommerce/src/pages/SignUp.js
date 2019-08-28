import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import "../Aset/css/header.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleInput3 = this.handleInput3.bind(this);
        this.handleInput4 = this.handleInput4.bind(this);
        this.handleInput5 = this.handleInput5.bind(this);
        this.Registrasi = this.Registrasi.bind(this);
    }

    handleInput1(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setName(event.target.value);
        }
    }

    handleInput2(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.setState({ password: event.target.value });
        }
    }

    handleInput3(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setStatus(event.target.value);
        }
    }

    handleInput4(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setNomorhp(event.target.value);
        }
    }

    handleInput5(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setAlamat(event.target.value);
        }
    }

    async Registrasi(e) {
        const self = this;
        e.preventDefault();
        let data = {
            username: self.props.username,
            password: self.state.password,
            alamat: self.props.alamat,
            status: self.props.status,
            nomorhp: self.props.nomorhp
        };
        console.log(data);
        await axios
            .post(self.props.baseUrl + "/users", data)
            .then(function(response) {
                console.log(data);
            })
            .catch(function(error) {
                console.log("error cuy!", error);
            });
        await axios
            .get(self.props.baseUrl + "/users/login", {
                params: {
                    username: self.props.username,
                    password: self.state.password
                }
            })
            .then(function(response) {
                localStorage.setItem("token", response.data.token);
                console.log(response.data.token);
                localStorage.setItem("status", true);
            })
            .catch(function(error) {
                console.log("ambil token error cuy!", error);
            });
        let setting = {
            method: "GET",
            url: self.props.baseUrl + "/users/whoisme",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };

        await axios(setting)
            .then(function(response) {
                localStorage.setItem("user_id", response.data.id);
                console.log(response.data.id);
                self.props.history.replace("/profile");
            })
            .catch(function(error) {
                console.log("ambil token error cuy!", error);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row d-flex align-items-center homeground">
                                    <div className="col-md-12 align-self-center text-center">
                                        <div className="signup">
                                            <section className="content signin d-flex justify-content-center">
                                                <form
                                                    style={{
                                                        height: "310px",
                                                        width: 400
                                                    }}
                                                    className="border p-5 align-self-center text-center"
                                                >
                                                    <h4>Sign Up</h4>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="username"
                                                            placeholder="Username"
                                                            onChange={
                                                                this
                                                                    .handleInput1
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="password"
                                                            name="password"
                                                            placeholder="password"
                                                            onChange={
                                                                this
                                                                    .handleInput2
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="status"
                                                            placeholder="status"
                                                            onChange={
                                                                this
                                                                    .handleInput3
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="nomorHP"
                                                            placeholder="nomorHP"
                                                            onChange={
                                                                this
                                                                    .handleInput4
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="alamat"
                                                            placeholder="Alamat"
                                                            onChange={
                                                                this
                                                                    .handleInput5
                                                            }
                                                        />
                                                    </div>
                                                    <button
                                                        className="btn btn-secondary"
                                                        onClick={e =>
                                                            this.Registrasi(e)
                                                        }
                                                    >
                                                        SignUp
                                                    </button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "baseUrl,username,alamat,status,nomorhp,token",
    actions
)(SignUp);
