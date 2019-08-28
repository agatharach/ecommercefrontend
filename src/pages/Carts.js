import React from "react";
import ListCart from "../component/ListCart";
import NavBarPos from "../component/NavbarAfterLogin";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import { Link } from "react-router-dom";

class Carts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCart: [],
            status: "",
            metodebayar: "",
            kurir: ""
        };
    }

    componentDidMount = async () => {
        const self = this;
        const setting = {
            method: "get",
            url:
                self.props.baseUrl +
                `/carts/${self.props.match.params.cart_id}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(setting)
            .then(function(response) {
                self.setState({ listCart: response.data });
                console.log("show cart ok", response.data);
            })
            .catch(function(error) {
                console.log("error ni", error);
                alert("Lakukan Pembelian Barang untuk Melihat Isi Cart!");
            });
    };
    render() {
        return (
            <div>
                <NavBarPos />
                <div className="container" style={{ marginTop: 120 }}>
                    <div className="row">
                        {this.state.listCart.map((item, key) => {
                            return (
                                <div
                                    className="col-3"
                                    style={{
                                        boxShadow: " 2px 2px 2px 2px #888888",
                                        backgroundColor: "white"
                                    }}
                                >
                                    <ListCart item={item} />
                                </div>
                            );
                        })}
                    </div>
                    <Link to="/checkout">
                        <button className="btn btn-secondary">Check Out</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default connect(
    "baseUrl",
    actions
)(Carts);
