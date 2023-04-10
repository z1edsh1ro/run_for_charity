import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
export const SideBarDataUser = [
    {
        title: "ข้อมูลส่วนตัว",
        icon: <PersonIcon />,
        link: "profileuser" 
    },
    {
        title: "ประวัติการบริจาค",
        icon: <AttachMoneyIcon />,
        link: "/historyDonate"
    },
    {
        title: "ประวัติการเข้าร่วม",
        icon: <HistoryIcon />,
        link: "/historyjoin"
    },
    {
        title: "โครงการที่ติดตาม",
        icon: <BookmarkIcon />,
        link: "/projectfollow"
    },
    {
        title: "สมัครเป็นผู้รับผิดชอบโครงการ",
        icon: <LocationCityIcon />,
        link: "/lookagency" 
    },
    {
        title: "สร้างหน่วยงาน",
        icon: <AddIcon />,
        link: "/createagency"
    },

    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/"
    }
];
