import React, {useState, useRef} from 'react';
import back from "../../images/back.svg";
import add from "../../images/add_photo_alternate.svg";
import qrcode from "../../images/qrqcode.png";
import Header from "../Header/Header";
import {User} from "../../api/User";
import {Link} from "react-router-dom";

const Btc = ({history}) => {
    const [copied, setCopied] = useState(false);
    const [file, setFile] = useState(null);
    const [transaction, setTransaction] = useState('');
    const [fileName, setFileName] = useState('');
    const [err, setErr] = useState('');
    const fileRef = useRef(null);
    const reader = new FileReader();
    const copy = (e) => {
        setCopied(true);
        document.getElementById('link').select();
        document.execCommand('copy');
    }
    const saveFile = () => {
        setErr('');
        setFileName(fileRef.current.files[0].name);
        setFile(fileRef.current.files[0]);
    }
    const submitScreen = () => {
        if (file && transaction) {
            const width = 300;
            const height = 150;
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();

                img.src = event.target.result;
                img.onload = () => {
                    const elem = document.createElement('canvas');
                    elem.width = width;
                    elem.height = height;
                    const ctx = elem.getContext('2d');
                    // img.width и img.height будет содержать оригинальные размеры
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.canvas.toBlob((blob) => {
                        const file1 = new File([blob], fileName, {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        });
                        reader.readAsDataURL(file1);
                        reader.onload = () => {
                            User.sendDeposit({transactionId: transaction, transactionPhoto: reader.result})
                                .then(res => {
                                    if (res.data.status === "success") {
                                        history.push("/complete/pay")
                                    }
                                });
                        }
                    }, 'image/jpeg', 0.8);
                };
                reader.onerror = error => console.log(error);
            }
        } else if (file && !transaction) {
            setErr("Empty transaction ID");
        } else {
            setErr("Empty data");
        }
    }
    return (
        <div>
            <Header/>
            <div className="refill btc">
                <div className="round-dark">
                    <div className="qrcode">
                        <h2>Our BTC wallet</h2>
                        <img src={qrcode} alt="qr"/>
                    </div>
                    <span onClick={() => history.goBack()} className="back"><img src={back} alt="back"/></span>
                    <h2>Payment by BTC</h2>
                    <div className="amount label-payment"><span className="nowrap">Our BTC address</span><span
                        style={{display: copied ? "block" : "none"}} className="green">Link is copied</span></div>
                    <div className="refill-input">
                        <div className="input-wrap">
                            <input id='link' className="card-number" readOnly
                                   defaultValue="1FC2Jv4m2cEMi7RRzY34nNFgNkaDSonvcK" type="text"/>
                        </div>
                    </div>

                    <div className="refill-btn">
                        <button onClick={copy} className="pay">COPY LINK</button>
                        <div className="refill-btn">
                            <div className="">
                                <span className="nowrap">Upload payment screenshot</span>
                                <label className="label overflow-hidden">
                                    <span className="drag nowrap">{fileName || "Drag and drop file here or"}</span>
                                    <img src={add} alt="add"/>
                                    <span className="title">Choose file</span>
                                    <input accept=".png, .jpg, .jpeg" ref={fileRef} onChange={saveFile} type="file"/>
                                </label>
                            </div>
                        </div>
                        <div className="refill-input mt-5">
                            <div className="input-wrap">
                                <span className="nowrap">Transaction ID</span>
                                <input value={transaction} onInput={(e) => {
                                    setErr('');
                                    setTransaction(e.target.value)
                                }} required name="trans" id='trans' className="card-number"
                                       placeholder="11223344"
                                       type="text"/>
                            </div>
                        </div>

                        <button onClick={submitScreen} className="pay mt-5">SEND
                        </button>
                        <span style={{display: err ? "block" : "none"}} className="red mt-2 text-center">{err}</span>
                        <Link to="/support" className="support-link text-center mt-4">Need support?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Btc;
