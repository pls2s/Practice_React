import { useState } from "react";
import "./PersonList.css";
import User from "./User";

function PersonList(props) {
    const data = props.data; //รับ data มาจาก App 
    const delete_user = props.delete_user;
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
                        <User key={obj.id} obj={obj} delete_user={delete_user}/> //ส่งข้อมูลไปใช้ใน User
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonList;