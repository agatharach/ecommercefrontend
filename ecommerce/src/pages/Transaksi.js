import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavBarPost from "../component/NavbarAfterLogin";

class Transaksi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            status: "PENDING",
            metodebayar: "",
            kurir: ""
        };
    }

    async InputAlamat(e) {
        e.preventDefault();
        const self = this;
        const setting = {
            method: "post",
            url: self.props.baseUrl + "/carts/checkout",
            data: {
                user_id: localStorage.getItem("user_id"),
                status: self.state.status,
                metodebayar: self.state.metodebayar,
                kurir: self.state.kurir
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(setting)
            .then(function(response) {
                console.log("Transaksi dibuat", response.data);
                self.props.history.push(
                    "/checkout/" + localStorage.getItem("user_id")
                );
            })
            .catch(function(error) {
                console.log("error ni", error);
            });
    }
    render() {
        return (
            <div>
                <NavBarPost />
                <div className="container">
                    <div className="row content signin d-flex justify-content-center">
                        <section>
                            <form
                                style={{
                                    height: "310px",
                                    width: 400,
                                    marginTop: 120
                                }}
                                className="border p-5 align-self-center text-center"
                            >
                                <h4>Form Pengiriman Barang</h4>
                                <div>
                                    <input
                                        style={{
                                            width: "100%"
                                        }}
                                        type="text"
                                        name="transfer"
                                        placeholder="Transfer"
                                        onChange={e => {
                                            e.preventDefault();
                                            this.setState({
                                                metodebayar: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        style={{
                                            width: "100%"
                                        }}
                                        type="text"
                                        name="kurir"
                                        placeholder="JNT"
                                        onChange={e => {
                                            e.preventDefault();
                                            this.setState({
                                                kurir: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <button
                                    className="btn btn-secondary"
                                    onClick={e => this.InputAlamat(e)}
                                >
                                    Set Alamat
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "baseUrl",
    actions
)(Transaksi);
