import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import ls from "local-storage";
import "./../Aset/css/header.css";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
    }

    handleInput1(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setName(event.target.value);
        }
    }

    handleInput2(event) {
        event.preventDefault();
        const self = this;
        if (event.target.value.length > 0) {
            self.setState({ password: event.target.value });
        }
    }

    async postLogin(e) {
        const self = this;
        e.preventDefault();
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
                Authorization: "Bearer " + ls.get("token")
            }
        };

        await axios(setting)
            .then(function(response) {
                localStorage.setItem("user_id", response.data.id);
                self.props.setAlamat(response.data.alamat);
                self.props.setStatus(response.data.status);
                self.props.setNomorhp(response.data.nomorhp);
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row d-flex align-items-center homeground">
                                <div className="col-md-12 align-self-center text-center">
                                    <div className="login">
                                        <section className="content signin d-flex justify-content-center">
                                            <form
                                                style={{
                                                    height: "310px",
                                                    width: 400
                                                }}
                                                onSubmit={this.handleSubmit}
                                                className="border p-5 align-self-center text-center"
                                            >
                                                <h4>Sign In</h4>
                                                <div>
                                                    <input
                                                        style={{
                                                            width: "100%"
                                                        }}
                                                        type="text"
                                                        name="username"
                                                        placeholder="Username"
                                                        onChange={
                                                            this.handleInput1
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
                                                            this.handleInput2
                                                        }
                                                    />
                                                </div>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={e =>
                                                        this.postLogin(e)
                                                    }
                                                >
                                                    SignIn
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
        );
    }
}
export default connect(
    "baseUrl,username",
    actions
)(SignIn);
