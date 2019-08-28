import React from "react";
import Picturedef from "../Aset/grain.png";

function ListItem(props) {
    return (
        <div className="row p-5">
            <img
                className="w-100"
                src={
                    props.item.urlfoto === "" ? Picturedef : props.item.urlfoto
                }
                alt=""
            />
            <div
                className="row text-center   style={{
                        fontWeight: 700,
                        fontSize: 20
                    }}"
            >
                <p>barang id : {props.item.id}</p>

                {props.item.name}
                <h4>
                    stok :
                    {props.item.stok > 0 ? props.item.stok : "OUT OF STOCK"}
                </h4>
                <br />
                <h4>Harga : Rp {props.item.harga}</h4>
            </div>
        </div>
    );
}
export default ListItem;
