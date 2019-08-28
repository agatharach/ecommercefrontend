import React from "react";

function ListTransaksi(props) {
    return (
        <div className="row p-5">
            <div
                className="row text-center"
                style={{
                    fontWeight: 700,
                    fontSize: 20
                }}
            >
                <p>barang id : {props.item.barang_id}</p>
                <p>user id : {props.item.user_id}</p>
                <p>jumlah : {props.item.jumlah}</p>
                <p>username : {props.item.username}</p>
                <p>alamat : {props.item.alamat}</p>
                <p>nomorhp : {props.item.nomorhp}</p>
                <p>status : {props.item.status}</p>
                <p>totalharga : {props.item.totalharga}</p>
                <p>metodepembayaran : {props.item.metodepembayaran}</p>
                <p>kurir : {props.item.kurir}</p>
            </div>
        </div>
    );
}
export default ListTransaksi;
