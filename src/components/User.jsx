import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
function User({obj}) { //รับ props มาใช้ ที่สืบทอดมาจาก PersonList และpersonList ก็สืบทอดมาจาก App อีก
    
    return (
        <>
            <li  style={{borderStyle : "solid", boxShadow: obj.gender === "male" ? "1px 1px 1px 1px blue" : "1px 1px 1px 1px pink", bordercolor: obj.gender === "male" ? "blue" : "pink"}}>  {/*key เป็น id ของข้อมูล จะต้องใช้อันที่ข้อมูลไม่ช้ำ */}
                <img src={obj.gender === "male" ? boy : girl} width={40} height={40}/> {/*ถ้าเป็นชายให้แสดง boy ถ้าเป็นหญิงให้แสดง girl*/}
                <p style={{color: obj.gender === "male" ? "blue" : "pink"}}>ID : {obj.id} , ชื่อ : {obj.name} , เพศ : {obj.gender} </p> {/*ถ้าเป็นชายให้แสดง blue ถ้าเป็นหญิงให้แสดง pink*/}
                <div className="control">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </li> 
        </>
    );
}

export default User;