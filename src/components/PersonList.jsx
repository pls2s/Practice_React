import { useState } from "react";
function PersonList() {

    const [data, _setData] = useState([
    { id: 1, name: "Peerawoot1", gender: "male" },
    { id: 2, name: "Peerawoot2", gender: "female" },
    { id: 3, name: "Peerawoot3", gender: "male" },
    { id: 4, name: "Peerawoot4", gender: "female" } ]);
    
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>จำนวนประชากร {data.length}</h1>
            <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button> {/*สลับการแสดงข้อมูล รีเทินเป็น t/f  , ? คือ if , : คือ else*/}
            
            <ul>
                {show && data.map((obj) => ( //map คือการวนลูป ข้อมูลทุกตัวใน data useState ใช้ show เพื่อสลับการแสดงข้อมูล 
                <li key={obj.id}> {/*key เป็น id ของข้อมูล จะต้องใช้อันที่ข้อมูลไม่ช้ำ */}
                    ชื่อ : {obj.name}, เพศ : {obj.gender}
                </li> ))}
            </ul>
        </>
    );
}

export default PersonList;