import React from "react";
import NavBarPos from "../component/NavbarAfterLogin";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import Picturedef from "../Aset/grain.png";

class ItemsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlfoto: "",
            jumlah: "",
            username: "",
            barang_id: "",
            user_id: "",
            name: "",
            harga: "",
            category: "",
            deskripsi: ""
        };
    }
    componentDidMount() {
        const self = this;
        const set = {
            method: "GET",
            url:
                self.props.baseUrl +
                "/items/list/" +
                self.props.match.params.item_id,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        axios(set)
            .then(function(response) {
                console.log("detail ok", response.data);
                self.setState({ urlfoto: response.data.urlfoto });
                self.setState({ jumlah: response.data.stok });
                self.setState({ username: response.data.username });
                self.setState({ barang_id: self.props.match.params.item_id });
                self.setState({ user_id: response.data.user_id });
                self.setState({ name: response.data.name });
                self.setState({ category: response.data.category });
                self.setState({ harga: response.data.harga });
                self.setState({ deskripsi: response.data.deskripsi });
            })
            .catch(function(error) {
                console.log("error ni", error);
            });
    }

    addCart = async event => {
        event.preventDefault();
        const self = this;
        console.log(this.props.token);
        const setting = {
            method: "post",
            url:
                self.props.baseUrl +
                `/items/list/${self.props.match.params.item_id}`,
            data: {
                user_id: localStorage.getItem("user_id")
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(setting)
            .then(function(response) {
                console.log("add cart ok", response.data);
                self.props.history.replace(
                    "/carts/" + localStorage.getItem("user_id")
                );
            })
            .catch(function(error) {
                console.log("error ni", error);
                alert("Silahkan klik Log In untuk melanjutkan transaksi anda!");
            });
    };
    render() {
        return (
            <div className="container-fluid">
                <NavBarPos />
                <div className="container">
                    <div
                        className="row justify-content-center border mx-1 p-4"
                        style={{ marginTop: 120 }}
                    >
                        <div className="col-6">
                            <div className="row justify-content-center">
                                <img
                                    className="w-50"
                                    src={
                                        this.state.urlfoto === ""
                                            ? Picturedef
                                            : this.state.urlfoto
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="row justify-content-center">
                                <h5>
                                    {this.state.jumlah > 0
                                        ? this.state.jumlah
                                        : "OUT OF STOCK"}
                                </h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row justify-content-center">
                                <h2 className="col-12">
                                    {this.state.username.toUpperCase()}
                                </h2>
                                <h2 className="col-12">
                                    barang_id:{this.state.barang_id}
                                </h2>
                                <h2 className="col-12">{this.state.name}</h2>
                                <h2 className="col-12">{this.state.harga}</h2>
                                <h4 className="col-12">
                                    {this.state.category}
                                </h4>
                                <p className="col-12">{this.state.deskripsi}</p>
                                <div className="col-12 text-center">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={e => this.addCart(e)}
                                    >
                                        Beli
                                    </button>
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
)(ItemsDetail);
