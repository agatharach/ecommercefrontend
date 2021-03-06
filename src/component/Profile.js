import React from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavBarPos from "./NavbarAfterLogin";

function Profile(props) {
    if (props.status === 1) {
        swal({
            title: `Welcome ${props.username} as a Seller!`,
            text: `Yuk Tambah Barang jualanmu!`,
            icon: "success",
            button: "olrait!"
        });
        return (
            <div>
                <NavBarPos />
                <div className="contain">
                    <div className="row d-flex align-items-center homeground">
                        <div className="col-12 align-self-center text-center">
                            <img
                                src="https://image.flaticon.com/icons/svg/145/145846.svg"
                                alt=""
                                width="400px"
                                height="300px"
                            />
                            <div>
                                <h3>Username : {props.username} </h3>
                                <h3>
                                    User_id : {localStorage.getItem("user_id")}{" "}
                                </h3>
                                <Link to="/inputbarang">
                                    <button className="btn btn-secondary">
                                        Tambah Inputan Barang
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        swal({
            title: `Welcome ${props.username} as a Customer!`,
            text: `${props.username} Yuk Dibeli dibeli!`,
            icon: "success",
            button: "olrait!"
        });
        return (
            <div>
                <NavBarPos />
                <div className="contain">
                    <div className="row d-flex align-items-center homeground">
                        <div className="col-12 align-self-center text-center">
                            <img
                                src="https://image.flaticon.com/icons/svg/145/145846.svg"
                                alt=""
                                width="400px"
                                height="300px"
                            />
                            <div>
                                <h3>Username : {props.username} </h3>
                                <h3>
                                    User_id : {localStorage.getItem("user_id")}{" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "username,user_id,status",
    actions
)(Profile);
