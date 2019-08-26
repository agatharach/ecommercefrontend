import React from "react";
import NavBarPos from "../component/NavbarAfterLogin";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import "../Aset/css/header.css";

class ShowBarang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: []
        };
    }
    componentDidMount() {
        const self = this;
        axios
            .get(self.props.baseUrl + "/items/list")
            .then(function(response) {
                self.setState(
                    { headline: response.data },
                    console.log(self.state.headline)
                );
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.headline);
        let rapikan = this.state.headline.map((elm, key) => {
            return (
                <div
                    className="col-md-3"
                    style={{
                        boxShadow: " 2px 2px 2px 2px #888888",
                        backgroundColor: "white"
                    }}
                >
                    <div className="row p-5">
                        <img src={elm.urlfoto} alt="" className="w-100" />
                    </div>

                    <div className="row text-center">
                        <a
                            style={{
                                fontWeight: 700,
                                fontSize: 20
                            }}
                        >
                            {elm.name}
                            <p>{elm.stok}</p>
                            <p>{elm.harga}</p>
                        </a>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <NavBarPos />
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">{rapikan}</div>
                </div>
            </div>
        );
    }
}
export default connect(
    "baseUrl",
    actions
)(ShowBarang);
