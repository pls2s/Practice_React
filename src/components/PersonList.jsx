import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css";

function PersonList() {

    const [data, _setData] = useState([
    { id: 1, name: "Peerawoot1", gender: "male" },
    { id: 2, name: "Peerawoot2", gender: "female" },
    { id: 3, name: "Peerawoot3", gender: "male" },
    { id: 4, name: "Peerawoot4", gender: "female" },
    { id: 5, name: "Peerawoot5", gender: "male" }]);

    const [show, setShow] = useState(true);
    return (
        <div className="container">
            <div className="header">
                <h2>จำนวนประชากร {data.length}</h2>
                <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button> {/*สลับการแสดงข้อมูล รีเทินเป็น t/f  , ? คือ if , : คือ else*/}
            </div>
            
            <div className="body">
                <ul>  
                    {show && data.map((obj) => ( //map คือการวนลูป ข้อมูลทุกตัวใน data useState ใช้ show เพื่อสลับการแสดงข้อมูล 
                    <li key={obj.id}> {/*key เป็น id ของข้อมูล จะต้องใช้อันที่ข้อมูลไม่ช้ำ */}
                        <img src={obj.gender === "male" ? boy : girl} width={40} height={40}/> {/*ถ้าเป็นชายให้แสดง boy ถ้าเป็นหญิงให้แสดง girl*/}
                        <p>ID : {obj.id} , ชื่อ : {obj.name} , เพศ : {obj.gender} </p>
                        <div className="control">
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </li> ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonList;