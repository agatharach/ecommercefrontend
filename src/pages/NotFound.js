import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class NotFound extends React.Component {
    render() {
        return (
            <div className="container not-found">
                <div
                    className="row d-flex align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-md-12 align-self-center text-center">
                        <h3>NOT FOUND</h3>
                        <Link to="/">
                            <button className="btn-primary">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "is_login, user_name",
    actions
)(NotFound);
