import React from "react";
import ListTransaksi from "../component/ListTransaksi";
import NavBarPos from "../component/NavbarAfterLogin";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTransaksi: []
        };
    }
    componentDidMount = async () => {
        const self = this;
        const setting = {
            method: "get",
            url:
                self.props.baseUrl + `/transaksi/${self.props.match.params.id}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios(setting)
            .then(function(response) {
                self.setState({ listTransaksi: response.data });
                console.log("show tr ok", response.data);
            })
            .catch(function(error) {
                console.log("error ni", error);
            });
    };
    render() {
        return (
            <div>
                <NavBarPos />
                <div className="container" style={{ marginTop: 120 }}>
                    <div className="row">
                        {this.state.listTransaksi.map((item, key) => {
                            return (
                                <div
                                    className="col-3"
                                    style={{
                                        boxShadow: " 2px 2px 2px 2px #888888",
                                        backgroundColor: "white"
                                    }}
                                >
                                    {alert(
                                        "Untuk melengkapi pembayaran, silahkan transfer ke 03421518 Bank BNI atas nama PT Beras-A"
                                    )}
                                    <ListTransaksi item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "baseUrl",
    actions
)(Invoice);
