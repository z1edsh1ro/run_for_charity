import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ReorderIcon from '@mui/icons-material/Reorder';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import EventIcon from '@mui/icons-material/Event';
export const SideBarDataReponsible = [
    {
        title: "ข้อมูลส่วนตัว",
        icon: <PersonIcon />,
        link: "profilereponsible" 
    },
    {
        title: "ประวัติการบริจาค",
        icon: <AttachMoneyIcon />,
        link: "/historyDonate"
    },
    {
        title: "ประวัติการเข้าร่วม",
        icon: <HistoryIcon />,
        link: "/historyJoin"
    },
    {
        title: "โครงการที่ติดตาม",
        icon: <BookmarkIcon />,
        link: "/projectFollow"
    },
    {
        title: "โครงการที่รับผิดชอบ",
        icon: <ReorderIcon />,
        link: "/projectsupervice"
    },
    {
        title: "ดูโครงการที่เปิด",
        icon: <EventIcon />,
        link: "/lookProject"
    },
    {
        title: "อนุมัติผู้รับผิดชอบโครงการ ",
        icon: <HowToRegIcon />,
        link: "/approveuser"
    },
    {
        title: "อนุมัติการสมัครโครงการ ",
        icon: <FactCheckIcon />,
        link: "/approveproject"
    },
    {
        title: "อนุมัติการสมัครโครงวิ่ง ",
        icon: <FactCheckIcon />,
        link: "/approverunner"
    },

    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/"
    }
];
