import React from "react";

function ListCart(props) {
    return (
        <div
            className="row p-5 style={{
            fontWeight: 700,
            fontSize: 20
        }}"
        >
            <p>barang id : {props.item.barang_id}</p>
            <p>user id : {props.item.user_id}</p>
            <p>jumlah : {props.item.jumlah}</p>
        </div>
    );
}
export default ListCart;
