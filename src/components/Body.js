import React from "react";
import { GoPersonFill } from "react-icons/go";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdPersonPin } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";

function Body(){
    return(
        <div className="body">
            <div className="heading">
                <h1>Student Management System</h1>
            </div>
            <div className="box">
                <div className="box1 red">
                    <span><GoPersonFill /></span>
                    <span></span>
                    <h3>Regular Students</h3>
                </div>
                <div className="box1 blue">
                    <span><BsPersonBadgeFill /></span>
                    <span></span>
                    <h3>Remedial Students</h3>
                </div>
                <div className="box1 green">
                    <span><MdPersonPin /></span>
                    <span></span>
                    <h3>In Paid clubs</h3>
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
                    <h3>Attendence</h3>
                </div>
                <div className="icon1">
                    <span><FaClinicMedical /></span>
                    <h3>Clinic</h3>
                </div>
            </div>
        </div>
    )
}

export default Body;