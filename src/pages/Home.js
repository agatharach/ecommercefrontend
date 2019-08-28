import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavBar from "../component/NavbarPraLogin";

function Home(props) {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div
                    className="row d-flex align-items-center homeground"
                    style={{ backgroundColor: "white" }}
                >
                    <div className="col-12 align-self-center text-center">
                        <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                            Place that you can get rice with number one quality
                        </h1>
                        <Link to="/items">
                            <button className="btn btn-secondary">
                                Lets Get Started
                            </button>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default connect(
    "is_login",
    actions
)(Home);
