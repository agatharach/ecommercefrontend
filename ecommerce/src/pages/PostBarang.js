import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import NavBarPos from "../component/NavbarAfterLogin";
import "../Aset/css/header.css";

class InputBarang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            username: "",
            name: "",
            stok: 0,
            harga: 0,
            category: "",
            urlfoto: "",
            deskripsi: ""
        };
        this.InputBarang = this.InputBarang.bind(this);
    }

    async InputBarang(e) {
        const self = this;
        e.preventDefault();
        console.log(self.props);
        let data = {
            user_id: localStorage.getItem("user_id"),
            username: self.state.username,
            name: self.state.name,
            stok: self.state.stok,
            harga: self.state.harga,
            category: self.state.category,
            urlfoto: self.state.urlfoto,
            deskripsi: self.state.deskripsi
        };
        console.log(data);

        let setting = {
            method: "post",
            url: self.props.baseUrl + "/items/tambah",
            data: data,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };

        axios(setting)
            .then(function(response) {
                console.log("BERHASIL!");
                self.props.history.replace("/items");
            })
            .catch(function(error) {
                console.log("error cuy!", error);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <NavBarPos />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row d-flex align-items-center homeground">
                                    <div className="col-md-12 align-self-center text-center">
                                        <div className="inputbarang">
                                            <section className="content signin d-flex justify-content-center">
                                                <form
                                                    style={{
                                                        height: "310px",
                                                        width: 400
                                                    }}
                                                    className="border p-5 align-self-center text-center"
                                                >
                                                    <h4>Input Barang</h4>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="username"
                                                            placeholder="username toko"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    username:
                                                                        e.target
                                                                            .value
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
                                                            name="nama"
                                                            placeholder="nama barang"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    name:
                                                                        e.target
                                                                            .value
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
                                                            name="stok"
                                                            placeholder="stok"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    stok: parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
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
                                                            name="harga"
                                                            placeholder="harga"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    harga:
                                                                        e.target
                                                                            .value
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
                                                            name="category"
                                                            placeholder="category"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    category:
                                                                        e.target
                                                                            .value
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
                                                            name="urlfoto"
                                                            placeholder="urlfoto"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    urlfoto:
                                                                        e.target
                                                                            .value
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
                                                            name="deskripsi"
                                                            placeholder="deskripsi"
                                                            onChange={e => {
                                                                e.preventDefault();
                                                                this.setState({
                                                                    deskripsi:
                                                                        e.target
                                                                            .value
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                    <button
                                                        className="btn btn-secondary"
                                                        onClick={e =>
                                                            this.InputBarang(e)
                                                        }
                                                    >
                                                        Tambah Barang
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
    "baseUrl",
    actions
)(InputBarang);
