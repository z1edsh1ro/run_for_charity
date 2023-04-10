import React from 'react'
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { FaDonate } from "react-icons/fa";
// import { BiDollar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const AdminSideBarData = [
    {
        title: "โปรไฟล์แอดมิน",
        icon: <FactCheckIcon />,
        link: "profileadmin"

    },
    {
        title: "โครงการทั้งหมด",
        icon: <ListIcon />,
        link: "adminallproject"
    },
    {
        title: "หน่วยงานทั้งหมด",
        icon: <ListIcon />,
        link: "adminallagency"
    },
    // {
    //     title: "มอบอำนาจ",
    //     icon: <ListIcon />,
    //     link: "adminapproveproject"
    // },
    {
        title: "อนุมัติหน่วยงาน",
        icon: <ListIcon />,
        link: "adminapproveagency"
    },
    // {
    //     title: "มอบสิทธิ",
    //     icon: <ListIcon />,
    //     link: "AssignRights"
    // },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/"
    }

];