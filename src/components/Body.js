import React, { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdPersonPin } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";

function Body() {
    const [count1, setCount1] = useState(8);
    const [count2, setCount2] = useState(22);
    const [count3, setCount3] = useState(2);

    return (
        <div className="body">
            <div className="heading">
                <h1>Student Management System</h1>
            </div>
            <div className="box">
                <div className="box1 red">
                    <span className="span"><GoPersonFill /></span>
                    <span className="number">{count1}</span>
                    <h3>Regular Students</h3>
                </div>
                <div className="box1 blue">
                    <span className="span"><BsPersonBadgeFill /></span>
                    <span className="number">{count2}</span>
                    <h3>Remedial Students</h3>
                </div>
                <div className="box1 green">
                    <span className="span"><MdPersonPin /></span>
                    <span className="number">{count3}</span>
                    <h3>In Paid Clubs</h3>
                </div>
            </div>
            <hr />
            <h2>MENU</h2>
            <div className="icons">
                <div className="icon1">
                    <span><GoPersonFill /></span>
                    <h3>Regular Enrollment</h3>
                </div>
                <div className="icon1">
                    <span><GiWhiteBook /></span>
                    <h3>Remedial Enrollment</h3>
                </div>
                <div className="icon1">
                    <span><MdPersonPin /></span>
                    <h3>Club Management</h3>
                </div>
                <div className="icon1">
                    <span><FcReadingEbook /></span>
                    <h3>Classroom Management</h3>
                </div>
                <div className="icon1">
                    <span><MdEmail /></span>
                    <h3>SMS / EMAIL</h3>
                </div>
                <div className="icon1">
                    <span><MdCoPresent /></span>
                    <h3>Attendance</h3> 
                </div>
                <div className="icon1">
                    <span><FaClinicMedical /></span>
                    <h3>Clinic</h3>
                </div>
            </div>
        </div>
    );
}

export default Body;
