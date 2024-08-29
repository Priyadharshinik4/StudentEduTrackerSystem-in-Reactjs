import React from "react";
import logo from "./assets/logo.png";
import { IoPeopleSharp } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu">
                <div className="one">
                    <span><IoPeopleSharp /></span>
                    <h4>Student Management</h4>
                </div>
                <div className="one">
                    <span><MdMonitor /></span>
                    <h4>Financial Management</h4>
                </div>
                <div className="one">
                    <span><TbCirclePercentage /></span>
                    <h4>Quality Control</h4>
                </div>
                <div className="one">
                    <span><TbReportAnalytics /></span>
                    <h4>Report Delivery</h4>
                </div>
                <div className="one">
                    <span><MdCoPresent /></span>
                    <h4>Attendence</h4>
                </div>
            </div>
            <div className="menu1">
                <span><FaRegQuestionCircle /></span>
                <span><IoSettingsSharp /></span>
                <span><MdLogout /></span>
            </div>
        </div>
    )
}

export default Sidebar;