import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export const AgencySideBarData = [
    {
        title: "ข้อมูลส่วนตัว",
        icon: <PersonIcon />,
        link: "ProfileAgency"

    },
    {
        title: "ประวัติการบริจาค",
        icon: <AttachMoneyIcon />,
        link: "/historyDonate"
    },

    {
        title: "ประวัติการเข้าร่วม",
        icon: <HistoryIcon />,
        link: "historyJoin"
    },
    {
        title: "โครงการที่ติดตาม",
        icon: <BookmarkIcon />,
        link: "/projectFollow"
    },
    {
        title: "ดูโครงการที่เปิด",
        icon: <AssignmentTurnedInIcon />,
        link: "/lookProject"
    },
    {
        title: "อนุมัติโครงการ",
        icon: <AssignmentTurnedInIcon />,
        link: "/agencyappoveproject"
    },
    {
        title: "อนุมัติผู้รับผิดชอบหน่วยงาน",
        icon: <AssignmentTurnedInIcon />,
        link: "/agencyappoveagency"
    },

    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/"
    }
];