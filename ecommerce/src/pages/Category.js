import React from "react";
import NavBarPos from "../component/NavbarAfterLogin";
import ListItem from "../component/ListItem";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import "../Aset/css/header.css";

class ShowBarang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemlist: []
        };
    }
    componentDidMount() {
        const self = this;
        axios
            .get(self.props.baseUrl + "/items/list")
            .then(function(response) {
                self.setState(
                    { itemlist: response.data },
                    console.log(self.state.itemlist)
                );
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <NavBarPos />
                <div className="container" style={{ marginTop: 120 }}>
                    <div className="row">
                        {this.state.itemlist.map((item, key) => {
                            return (
                                <div
                                    className="col-3"
                                    style={{
                                        boxShadow: " 2px 2px 2px 2px #888888",
                                        backgroundColor: "white"
                                    }}
                                >
                                    <Link to={"/items/list/" + item.id}>
                                        <ListItem item={item} />
                                    </Link>
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
)(ShowBarang);
