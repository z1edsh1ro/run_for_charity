-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2023 at 12:38 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `run_for_charity_v4`
--

-- --------------------------------------------------------

--
-- Table structure for table `agency`
--

CREATE TABLE `agency` (
  `id_agency` int(11) NOT NULL,
  `name_agency` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `address_agency` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('อนุมัติ','ไม่อนุมัติ','รอพิจารณา') COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `agency`
--

INSERT INTO `agency` (`id_agency`, `name_agency`, `address_agency`, `status`, `phone`) VALUES
(3, 'มูลนิธิจุฬาภรณ์', 'อาคารไปรษณียบ์ างรักถ.เจริญกรุง เขตบางรักจ.กรุงเทพฯ 10500', 'อนุมัติ', '0255523541'),
(4, 'มูลนิธิราชประชานุเคราะห์ในพระบรมราชูปถัมภ์', '309 หมู่10 ถ.ฉลองกรุงแขวงลา ปลาทิวเขตลาดกระบงัจ.กรุงเทพฯ 10520', 'อนุมัติ', '0245687890'),
(5, 'มูลนิธิบางกอกโพสต์', '19 หมู่2 ถ.เชื่อมสัมพันธ์เขตหนองจอก จ.กรุงเทพฯ 10530', 'อนุมัติ', '0255523541'),
(6, 'มหาวิทยาลัยเกษตรศาสตร์', '99/4 หมู่12 ถ.รัตนพิศาล บางพลีใหญ่ อ.บางพลีจ.สมทุรปราการ 10540\r\n', 'อนุมัติ', '0285066767'),
(7, 'มูลนิธิอาสาสมัครเพื่อสังคม', '151 หมู่6 ถ.สุขุมวิท ต.คลองด่าน อ.บางบ่อจ.สมทุรปราการ 10550', 'อนุมัติ', '0255523549'),
(8, 'มูลนิธิปิเอโร่', '323 หมู่1 ถ.รัตนราช ต.บางบ่ออ.บางบ่อจ.สมทุ รปราการ 10560', 'อนุมัติ', '0285066767'),
(9, 'สถากาชาดไทย', '213/2 หมู่1 ถนนเทพารักษ์ อ.บางเสาธง จ.สมทุรปราการ 10570', 'ไม่อนุมัติ', '1664'),
(10, 'มูลนิธิจุฬาภรณ์', 'อาคารไปรษณียบ์ างรักถ.เจริญกรุง เขตบางรักจ.กรุงเทพฯ 10500', 'รอพิจารณา', '028888888'),
(11, 'after phone', 'อาคารไปรษณียบ์ างรักถ.เจริญกรุง เขตบางรักจ.กรุงเทพฯ 10500', 'รอพิจารณา', '0617840597'),
(12, 'สร้างหน่วยงานจากUser', 'อาคารไปรษณียบ์ างรักถ.เจริญกรุง เขตบางรักจ.กรุงเทพฯ 10500', 'อนุมัติ', '9999999'),
(14, 'Kaset', 'ABABABA', 'อนุมัติ', '258967521'),
(15, 'Kaset', 'XZXZXZXX', 'อนุมัติ', '222222222');

-- --------------------------------------------------------

--
-- Table structure for table `appove`
--

CREATE TABLE `appove` (
  `id_appove_agency` int(11) NOT NULL,
  `date_appove` date DEFAULT NULL,
  `description` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_user` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_agency` int(11) DEFAULT NULL,
  `id_ approver` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_project` int(11) DEFAULT NULL,
  `type` enum('อนุมัติโครงการ','อนุมัติผู้รับผิดชอบโครงการ','อนุมัติผู้รับผิดชอบหน่วยงาน','อนุมัติหน่วยงาน','') COLLATE utf8_unicode_ci DEFAULT NULL,
  `evidence` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `appove`
--

INSERT INTO `appove` (`id_appove_agency`, `date_appove`, `description`, `id_user`, `id_agency`, `id_ approver`, `id_project`, `type`, `evidence`) VALUES
(1, '2023-03-29', 'asdas', 'lnwza1', 3, 'test', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', 'asdas'),
(2, '2023-03-29', 'อนุมัติ', 'ggg25', 3, 'test', NULL, 'อนุมัติผู้รับผิดชอบหน่วยงาน', '-'),
(9, '2023-04-01', '-', 'test', 3, NULL, NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '1ce5246e-0994-40ff-8c65-ae4fa5f83875.png'),
(10, NULL, NULL, 'test', 3, NULL, 344, 'อนุมัติผู้รับผิดชอบโครงการ', 'a60a0024-cb0e-4362-b32a-78fe278fef5e.png'),
(11, NULL, 'อนุมัติ', 'test', 3, NULL, NULL, 'อนุมัติผู้รับผิดชอบโครงการ', 'c6de363a-d275-4839-9dc8-ee70bd8465f1.png'),
(12, '2023-04-02', 'รอพิจารณา', 'test', NULL, NULL, NULL, 'อนุมัติหน่วยงาน', '0b81672d-b5af-40bb-8294-44a4a5ae2a14.png'),
(13, '2023-04-02', 'ไม่อนุมัติ', 'lnwza1', 5, 'test', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '05ddd5b4-1ea3-4058-b823-4c639a5ab32c.png'),
(14, '2023-04-03', 'อนุมัติ', 'test', 3, 'ggg3', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', 'fb9f7aa0-e769-436f-83d4-f12727376559.png'),
(15, '2023-04-03', 'อนุมัติ', 'test', 3, 'ggg3', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '2f9148ae-5611-4b9e-b60e-e6d9de45567d.png'),
(16, '2023-04-04', '', 'ggg2', 10, NULL, NULL, 'อนุมัติหน่วยงาน', '88fe23dc-f03b-46af-8ade-5a535b9ba5b1.jpg'),
(17, '2023-04-04', '', 'ggg2', 11, NULL, NULL, 'อนุมัติหน่วยงาน', 'e149a5a8-6d26-44c1-9a02-89651081cfb6.jpg'),
(18, '2023-04-04', '', 'ggg2', 12, 'zaza', NULL, 'อนุมัติหน่วยงาน', 'ed038df6-e923-4fa1-8b2b-2d5294027c2e.png'),
(19, '2023-04-04', 'ไม่อนุมัติ', 'ggg2', 5, NULL, NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '710a4bdc-be85-4f8f-8992-71a19e2d8317.png'),
(20, '2023-04-04', 'อนุมัติ', 'ggg2', 3, 'ggg3', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', 'fa1c031f-0e1d-482b-8906-0a41e65ef05c.png'),
(21, '2023-04-04', 'อนุมัติ', 'R2BT', 3, 'ggg3', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '10b08463-b317-4a67-9f8c-cde0bc42ab82.png'),
(23, '2023-04-04', 'อนุมัติ', 'top', 3, 'R2BT', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', '24aac402-b1f1-4d6e-8597-ce87f42585ca.png'),
(24, '2023-04-04', '', 'R2BT', 3, NULL, 345, 'อนุมัติโครงการ', '53a37978-3fb5-4260-bf19-ee4a2a50e230.png'),
(25, '2023-04-04', 'รอพิจารณา', 'R2BT', NULL, NULL, NULL, 'อนุมัติหน่วยงาน', 'a6971cc6-de51-4716-a987-ab1c0823103a.png'),
(26, '2023-04-04', '', 'ggg2', NULL, 'zaza', NULL, 'อนุมัติหน่วยงาน', '2c10a919-ed6b-452e-a147-fbcfa3a8c3be.png'),
(27, '2023-04-04', '', 'test', 3, NULL, 346, 'อนุมัติโครงการ', '74a98e4a-8906-4af3-9dda-c65d246fa41b.png'),
(28, '2023-04-04', '', 'test', 3, NULL, 347, 'อนุมัติโครงการ', 'e0aa803d-2b91-4aa8-8a65-2f42ce7a02ce.png'),
(29, '2023-04-04', '', 'test', 3, NULL, 348, 'อนุมัติโครงการ', '66ea5e21-5b31-4906-86ee-560c34082bdd.png'),
(30, '2023-04-04', '', 'sarawut123', 14, 'zaza', NULL, 'อนุมัติหน่วยงาน', 'fa5f17ff-f694-4929-ba6b-1beb55700364.png'),
(31, '2023-04-04', '', 'sarawut123', 15, 'zaza', NULL, 'อนุมัติหน่วยงาน', 'ee87a83d-b053-40ed-bb0a-9658eb46d9d3.png'),
(32, '2023-04-04', 'อนุมัติ', 'top123', 14, 'test', NULL, 'อนุมัติผู้รับผิดชอบโครงการ', 'dfede216-8149-4297-bbde-eaaa8ac5b2a3.png');

-- --------------------------------------------------------

--
-- Table structure for table `appove_project`
--

CREATE TABLE `appove_project` (
  `id_appove_project` int(11) NOT NULL,
  `date_appove` date NOT NULL,
  `description` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_ approver` varchar(20) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donate`
--

CREATE TABLE `donate` (
  `id_donate` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `status_ withdraw` enum('ยังไม่ถอน','ถอนแล้ว','') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donate`
--

INSERT INTO `donate` (`id_donate`, `id_project`, `status_ withdraw`) VALUES
(1, 342, 'ถอนแล้ว'),
(2, 343, 'ยังไม่ถอน'),
(3, 344, 'ยังไม่ถอน'),
(5, 341, 'ยังไม่ถอน'),
(6, 345, 'ยังไม่ถอน');

-- --------------------------------------------------------

--
-- Table structure for table `donate_detail`
--

CREATE TABLE `donate_detail` (
  `id_donate_detail` int(11) NOT NULL,
  `account_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `date_donate` date NOT NULL,
  `evidence_donate` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `id_donate` int(11) NOT NULL,
  `status_appove` enum('อนุมัติ','ไม่อนุมัติ','รอพิจารณา','') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `donate_detail`
--

INSERT INTO `donate_detail` (`id_donate_detail`, `account_name`, `amount`, `date_donate`, `evidence_donate`, `id_user`, `id_donate`, `status_appove`) VALUES
(5, '', 10, '2023-04-01', '', 'test', 1, 'อนุมัติ'),
(6, '', 10, '2023-04-01', '', 'test', 1, 'อนุมัติ');

-- --------------------------------------------------------

--
-- Table structure for table `follow_project`
--

CREATE TABLE `follow_project` (
  `id_follow` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_user` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `follow_project`
--

INSERT INTO `follow_project` (`id_follow`, `id_project`, `id_user`) VALUES
(8, 342, 'ggg25'),
(10, 342, 'ggg'),
(28, 343, 'ggg2'),
(32, 343, 'ggg3'),
(35, 343, 'sarawut123'),
(36, 344, 'sarawut123');

-- --------------------------------------------------------

--
-- Table structure for table `joiner_project`
--

CREATE TABLE `joiner_project` (
  `id_joiner` int(11) NOT NULL,
  `id_task_project` int(11) NOT NULL,
  `id_user` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `number_user` int(20) NOT NULL,
  `score_distance` int(10) NOT NULL,
  `score_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `id_manager` int(11) NOT NULL,
  `id_user` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_agency` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`id_manager`, `id_user`, `id_agency`) VALUES
(13, 'ggg25', 3),
(19, 'lnwza1', 5),
(20, 'ggg2', 3),
(21, 'ggg3', 3),
(22, 'R2BT', 3),
(28, 'ggg2', 3),
(29, 'test', 3),
(30, 'test', 3),
(33, 'top', 3),
(34, 'ggg2', 12),
(35, 'ggg2', NULL),
(36, 'sarawut123', 14),
(37, 'sarawut123', 15),
(38, 'top123', 14);

-- --------------------------------------------------------

--
-- Table structure for table `manager_agency`
--

CREATE TABLE `manager_agency` (
  `id_manager_acency` int(11) NOT NULL,
  `id_agency` int(11) NOT NULL,
  `id_user` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager_agency`
--

INSERT INTO `manager_agency` (`id_manager_acency`, `id_agency`, `id_user`) VALUES
(1, 3, 'top');

-- --------------------------------------------------------

--
-- Table structure for table `manager_project`
--

CREATE TABLE `manager_project` (
  `id_manager_project` int(20) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_manager` int(11) NOT NULL,
  `status` enum('อนุมัติ','ไม่อนุมัติ','รอพิจารณา') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager_project`
--

INSERT INTO `manager_project` (`id_manager_project`, `id_project`, `id_manager`, `status`) VALUES
(1, 344, 20, ''),
(5, 341, 33, 'อนุมัติ'),
(6, 344, 22, 'อนุมัติ');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `name_project` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Date_start` date NOT NULL,
  `Date_end` date NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `address_project` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('อนุมัติ','ไม่อนุมัติ','รอพิจารณา','') COLLATE utf8_unicode_ci NOT NULL,
  `id_province` int(11) NOT NULL,
  `date_regis_start` date NOT NULL,
  `date_regis_end` date NOT NULL,
  `id_agency` int(11) NOT NULL,
  `Discription` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `image_pofile` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_poster` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `name_project`, `Date_start`, `Date_end`, `phone`, `address_project`, `status`, `id_province`, `date_regis_start`, `date_regis_end`, `id_agency`, `Discription`, `image_pofile`, `image_poster`) VALUES
(341, 'วิ่งมินิมาราธอน BUU FUN RUN', '2023-04-02', '2023-04-02', '0925861968', '178 หมู่ 10 ถ.ฮอด-วังลุง ต.หางดง อ.ฮอด รหัสไปรษณีย', 'อนุมัติ', 0, '2023-04-04', '2023-04-20', 3, 'วิ่งสะสมระยะ ที่ไหน เมื่อไหร่ ก็ได้ (เวอร์ช่วลรัน) สะสมให้ครบระยะรวม 10K  จะส่งผลครั้งเดียวหรือส่งผลสะสมไปเรื่อยๆ ก็ได้ ผลวิ่งจากนาฬิกาวิ่งเช่น Garmin Suunto หรือ ภาพจาก แอปพลิเคชันวิ่ง บนโทรศัพท์มือถือ เช่น RunKeeper หรือภาพถ่ายระยะวิ่งบนลู่วิ่งไฟฟ้าก็ได้', 'fb9f7aa0-e769-436f-83d4-f12727376559.png', '921228.png'),
(342, 'ลานสกา มาราธอน ครั้งที่ 16', '2023-04-02', '2023-04-02', '0925861968', '449 หมู่ 1 ต.ริมใต้ อ.แม่ริม รหัสไปรษณีย์ 50180', 'อนุมัติ', 10, '2023-04-04', '2023-04-20', 3, '\r\nวิ่งสร้างแรงบันดาลใจ การส่งต่อพลังความสุข ความสนุก การสานฝันและแรงบันดาลใจ วัตถุประสงค์เพื่อสนับสนุนให้เกิดพฤติกรรมสุขภาพที่ดีกับคนในทุกระดับ อีกทั้งเป็นแนวทางในการจัดกิจกรรมเสริมสร้างความสัมพันธ์ที่ดีในครอบครัว รวมถึงการสนับสนุนมูลนิธิ โครงการต่างๆ ในสังคม เพื่อมอบโอกาสในการมีชีวิตที่ดีขึ้นต่อไป', 'fb9f7aa0-e769-436f-83d4-f12727376559.png', '921228.png'),
(343, 'KHANOM HALF MARATHON ', '2023-04-02', '2023-04-02', '0925861968', '170 หมู่ 2 ต.สันมหาพน อ.แม่แตง รหัสไปรษณีย์ 50150', 'อนุมัติ', 0, '2023-04-04', '2023-04-20', 3, 'Khanom Sport Fest – More for Health กิจกรรมกีฬาส่วนต่อ เพื่อความสุข ความสนุก เพื่อสุขภาพดี ประกอบด้วยกีฬาหลากหลาย เช่น อินไลน์สเก็ต วีลแชร์ และการวิ่ง รวมถึง กิจกรรมชกมวยไทย  ', 'fb9f7aa0-e769-436f-83d4-f12727376559.png', '921228.png'),
(344, 'BIGBLUE MAESALONG TRAIL 2023', '2023-04-02', '2023-04-09', '0925861968', 'Chiang Rai', 'อนุมัติ', 0, '2023-04-16', '2023-04-18', 3, 'PERCENT% จัดกิจกรรม Virtual Run ชวนเพื่อนๆนักวิ่งมาวิ่งสะสมระยะ 10 Km. (10 กิโลเมตร) พร้อมรับเสื้อวิ่งสายPerformance  \r\nเสื้อที่ตอบโจทย์นักวิ่ง เนื้อผ้าเบาสบาย พร้อมด้วยเอกลักษณ์ logo รูป % เป็น flex สะท้อนแสง ให้คุณสนุกไปกับการวิ่งและออกกำลังกาย', 'fb9f7aa0-e769-436f-83d4-f12727376559.png', 'fb9f7aa0-e769-436f-83d4-f12727376559.png'),
(345, 'SCM HERO LIFE HERO RUN 2023', '2023-04-15', '2023-04-14', '0925861968', 'สวนวชิรเบญจทัศ (สวนรถไฟ)', 'ไม่อนุมัติ', 0, '2023-04-05', '2023-04-26', 3, 'บริษัท ซัคเซสมอร์ บีอิ้งค์ จำกัด (มหาชน) หรือ SCM โดยนายแพทย์สิทธวีร์ เกียรติชวนันต์ ประธานกรรมการบริหาร และ นายนพกฤษฏิ์ นิธิเลิศวิจิตร ประธานเจ้าหน้าที่บริหาร ผู้นำในการดำเนินธุรกิจผลิตและจำหน่ายสินค้าในกลุ่มผลิตภัณฑ์อุปโภคและบริโภคทั้งภายในประเทศและต่างประเทศ รูปแบบลักษณะเครือข่ายขายตรง (Multi-level Marketing หรือ “MLM”) ได้จัดงานวิ่งเพื่อสุขภาพและการกุศลในกิจกรรม “SCM HERO LIFE HERO RUN 2023” เนื่องในโอกาสครบรอบ 10 ปีของซัคเซสมอร์ โดยเราตระหนักและส่งเสริมให้คนไทยหันมาดูแลสุขภาพ ภายใต้แนวคิด HERO BRAND และเป็นหนึ่งในปณิธานขององค์กร คือ Inspiration for your Being  แรงบันดาลใจที่เปลี่ยนชีวิตคุณ', '8f14a618-364e-419f-836a-7dc774014315.png', '70c440b5-ce9d-458e-9087-300a55b08822.png'),
(346, 'TestCreateProject', '2023-04-26', '2023-04-27', '0925861968', 'กำแพงแสน', 'รอพิจารณา', 0, '2023-04-05', '2023-04-07', 3, 'loream', '67ebdf2b-d681-4d11-8256-7f6c5bd1626f.png', '92a5a01e-af6f-47bd-a3c6-4fb67286af3e.png'),
(347, 'testCreate22', '2023-04-11', '2023-04-13', '0925861968', 'กำแพงแสน', 'รอพิจารณา', 0, '2023-04-05', '2023-04-06', 3, 'loream55', 'e2499965-8bce-405a-9b15-846f8df81651.png', '70761cbb-0ee6-45bb-9493-f374f6f5a0ab.png'),
(348, 'TestProject33', '2023-04-05', '2023-04-05', '0958619688', 'กำแพงแสน', 'รอพิจารณา', 0, '2023-04-25', '2023-03-29', 3, 'loream', 'c38cae48-7cd1-48fb-8ad6-58a5f2486591.png', 'e1729fd8-8142-482f-83e1-64629a5b3ef4.png');

-- --------------------------------------------------------

--
-- Table structure for table `register_project`
--

CREATE TABLE `register_project` (
  `id_register` int(11) NOT NULL,
  `date_register` date NOT NULL,
  `evidence_register` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `id_task` int(11) NOT NULL,
  `number_runner` int(100) NOT NULL,
  `status` enum('อนุมัติ','ไม่อนุมัติ','รอพิจารณา','') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `register_project`
--

INSERT INTO `register_project` (`id_register`, `date_register`, `evidence_register`, `id_user`, `id_task`, `number_runner`, `status`) VALUES
(1, '2023-03-07', '-', 'test', 6, 0, 'อนุมัติ'),
(2, '2023-04-02', '-', 'test', 8, 1, 'อนุมัติ'),
(3, '2023-04-02', '-', 'test', 9, 1, 'อนุมัติ'),
(4, '2023-04-02', 'c3760a3a-96b0-4f85-b7ca-eb53f69b012f.png', 'test', 7, 1, 'อนุมัติ'),
(5, '2023-04-02', '286de2c1-3ff5-4167-8684-ff4d82a916c8.png', 'test', 7, 1, 'อนุมัติ'),
(6, '2023-04-02', '651bccba-5702-436b-b616-7d7c379610f6.png', 'test', 7, 111, 'รอพิจารณา'),
(7, '2023-04-02', 'e95512df-c720-44fc-a820-06f4258b0cb7.png', 'test', 7, 2, 'รอพิจารณา'),
(8, '2023-04-02', 'bf669571-8301-4c23-a5bf-fd84da736fda.png', 'test', 7, 3, 'รอพิจารณา'),
(9, '2023-04-03', '-', 'lnwza1', 9, 1, 'อนุมัติ'),
(10, '2023-04-02', '-', 'test', 9, 1, 'อนุมัติ'),
(11, '2023-04-04', '7f3dce5c-95c8-4d93-a203-ba09942840ac.png', 'top', 9, 0, 'รอพิจารณา'),
(12, '2023-04-04', 'fe78fe7f-7082-42d2-a88a-d181461499cb.png', 'top', 9, 0, 'รอพิจารณา'),
(13, '2023-04-04', '41ac5b61-ee96-448e-9b0c-28f8b7ee8d2c.png', 'sarawut123', 13, 0, 'รอพิจารณา');

-- --------------------------------------------------------

--
-- Table structure for table `task_project`
--

CREATE TABLE `task_project` (
  `id_task_project` int(11) NOT NULL,
  `task_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price_task` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `limit_join` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `task_project`
--

INSERT INTO `task_project` (`id_task_project`, `task_name`, `price_task`, `distance`, `id_project`, `limit_join`) VALUES
(6, '10 KM', 200, 10, 341, 100),
(7, '20 KM', 200, 20, 341, 100),
(8, '30KM', 150, 30, 341, 100),
(9, '10 KM', 200, 10, 342, 100),
(10, '20KM', 1500, 20, 342, 100),
(11, '40KM', 1000, 40, 342, 100),
(12, '50KM', 500, 50, 342, 100),
(13, '5KM', 3000, 5, 343, 100),
(14, '15KM', 200, 15, 343, 21),
(15, '40KM', 200, 40, 343, 30),
(16, '50KM', 500, 50, 343, 50),
(17, '5KM', 200, 30, 344, 60),
(18, '30KM', 200, 30, 344, 50),
(19, '30KM', 200, 30, 344, 100),
(20, '30KM', 350, 30, 344, 100),
(21, '5KM', 50, 5, 345, 50),
(22, '10KM', 5, 5, 345, 50),
(23, '15KM', 500, 15, 345, 50),
(24, '20KM', 500, 200, 346, 200),
(25, '52KM', 500, 52, 348, 100),
(26, '100KM', 1000, 100, 348, 100),
(27, '200KM', 200, 20, 348, 200);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `frist_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `role` enum('user','admin','ผู้รับผิดชอบโครงการ','ผู้รับผิดชอบหน่วยงาน') COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `frist_name`, `password`, `age`, `address`, `phone`, `role`, `last_name`, `email`) VALUES
('ggg', 'พิณ', '12345678', 30, '21-29 ถ.นาคราช แขวงคลองมหานาคเขตป้อมปราบ จ.กรุงเทพฯ 10100', '0955523541', 'ผู้รับผิดชอบโครงการ', 'คำทอง', 'Pin@gmail.com'),
('ggg2', 'รสนันท์', '12345678', 20, '1573-5 ถ.สุขมุวิท ซ.สาลีนิมิต เขตวฒั นาจ.กรุงเทพฯ 10110', '0955523541', 'ผู้รับผิดชอบหน่วยงาน', 'พินิจนันท์', 'Rosanan@gmail.com'),
('ggg25', 'ชมพู', '123456784', 30, '1379 ถ.จันทน์ แขวงทุ่งวัดดอน เขตสาธร จ.กรุงเทพฯ 10120', '0955523541', 'ผู้รับผิดชอบหน่วยงาน', 'ประเสริฐโสม', 'Chompu@gmail.com'),
('ggg3', 'Theeraphat', '12345678', 88, '23/3หมู่13 ตำบลค้งะยอม อำเภอบ้านโป่ง จังหวัดราชบุรี 70110', '0925861968', 'ผู้รับผิดชอบโครงการ', 'Aksaranan', 'guytop36@gmail.com'),
('lnwza1', 'เกียรติ', '12345678', 40, '316/9 ม.8 ถ.ประชาอุทิศราษฎร์บูรณะเขตราษฎร์บูรณะจ.กรุงเทพฯ 10140\r\n', '1234567890', 'ผู้รับผิดชอบโครงการ', 'ตรีวุฒิ', 'kiat@gmail.com'),
('R2BT', 'ธีรภัทร', '12345678', 20, '23/3 หมู่13 ต.คุ้งพยอม อ.บ้านโป่ง', '0925861968', 'ผู้รับผิดชอบโครงการ', 'อักษรนันท์', 'guytop36@gmail.com'),
('sarawut123', 'Sarawut', '12345678', 20, '88 อาคารเดอะปาร์ค ชั้น 12 ถนนรัชดาภิเษกแขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110', '0925861968', 'ผู้รับผิดชอบหน่วยงาน', 'JUMJIM', 'sara@gmail.com'),
('test', 'พัฒนเดช ', '12345678', 30, '123/165 ม.3 ถ.เอกชยั บางขนุ เทียน เขตจอมทองจ.กรุงเทพฯ 10150', '0978640122', 'ผู้รับผิดชอบโครงการ', 'ไชยสงคราม', 'Pattanadech@gmail.com'),
('top', 'ธีรภัทร', '12345678', 20, '23/3', '0925861968', 'ผู้รับผิดชอบหน่วยงาน', 'อักษรนันท์', 'guytop36@gmail.com'),
('top123', 'Theeraphat', '12345678', 21, 'kkkkkk', '0925861968', 'ผู้รับผิดชอบโครงการ', 'Aksaranan', 'theeraphat@gmail.com'),
('zaza', 'ณัฏฐ์ ', '123', 40, '179/2 ม.1 ถ.เพชรเกษม แขวงบางแคเหนือเขตบางแคจ.กรุงเทพฯ 10160', '0925861968', 'admin', 'ประเสริญวงศ์', 'Nat@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agency`
--
ALTER TABLE `agency`
  ADD PRIMARY KEY (`id_agency`);

--
-- Indexes for table `appove`
--
ALTER TABLE `appove`
  ADD PRIMARY KEY (`id_appove_agency`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_agency` (`id_agency`) USING BTREE,
  ADD KEY `id_project` (`id_project`) USING BTREE,
  ADD KEY `id_approver` (`id_ approver`) USING BTREE;

--
-- Indexes for table `donate`
--
ALTER TABLE `donate`
  ADD PRIMARY KEY (`id_donate`),
  ADD KEY `id_project` (`id_project`);

--
-- Indexes for table `donate_detail`
--
ALTER TABLE `donate_detail`
  ADD PRIMARY KEY (`id_donate_detail`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_donate` (`id_donate`);

--
-- Indexes for table `follow_project`
--
ALTER TABLE `follow_project`
  ADD PRIMARY KEY (`id_follow`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `joiner_project`
--
ALTER TABLE `joiner_project`
  ADD PRIMARY KEY (`id_joiner`),
  ADD KEY `id_task` (`id_task_project`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id_manager`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_agecny` (`id_agency`);

--
-- Indexes for table `manager_agency`
--
ALTER TABLE `manager_agency`
  ADD PRIMARY KEY (`id_manager_acency`),
  ADD KEY `id_agency` (`id_agency`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `manager_project`
--
ALTER TABLE `manager_project`
  ADD PRIMARY KEY (`id_manager_project`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_manager` (`id_manager`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `id_province` (`id_province`),
  ADD KEY `id_agency` (`id_agency`);

--
-- Indexes for table `register_project`
--
ALTER TABLE `register_project`
  ADD PRIMARY KEY (`id_register`),
  ADD KEY `id_user` (`id_user`,`id_task`),
  ADD KEY `id_task` (`id_task`);

--
-- Indexes for table `task_project`
--
ALTER TABLE `task_project`
  ADD PRIMARY KEY (`id_task_project`),
  ADD KEY `id_project` (`id_project`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agency`
--
ALTER TABLE `agency`
  MODIFY `id_agency` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `appove`
--
ALTER TABLE `appove`
  MODIFY `id_appove_agency` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `donate`
--
ALTER TABLE `donate`
  MODIFY `id_donate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `donate_detail`
--
ALTER TABLE `donate_detail`
  MODIFY `id_donate_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `follow_project`
--
ALTER TABLE `follow_project`
  MODIFY `id_follow` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `joiner_project`
--
ALTER TABLE `joiner_project`
  MODIFY `id_joiner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `id_manager` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `manager_agency`
--
ALTER TABLE `manager_agency`
  MODIFY `id_manager_acency` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `manager_project`
--
ALTER TABLE `manager_project`
  MODIFY `id_manager_project` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=349;

--
-- AUTO_INCREMENT for table `register_project`
--
ALTER TABLE `register_project`
  MODIFY `id_register` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `task_project`
--
ALTER TABLE `task_project`
  MODIFY `id_task_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appove`
--
ALTER TABLE `appove`
  ADD CONSTRAINT `appove_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `appove_ibfk_4` FOREIGN KEY (`id_agency`) REFERENCES `agency` (`id_agency`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `appove_ibfk_5` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `appove_ibfk_6` FOREIGN KEY (`id_ approver`) REFERENCES `user` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `donate`
--
ALTER TABLE `donate`
  ADD CONSTRAINT `donate_ibfk_2` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `donate_detail`
--
ALTER TABLE `donate_detail`
  ADD CONSTRAINT `donate_detail_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `donate_detail_ibfk_4` FOREIGN KEY (`id_donate`) REFERENCES `donate` (`id_donate`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `follow_project`
--
ALTER TABLE `follow_project`
  ADD CONSTRAINT `follow_project_ibfk_2` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follow_project_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `manager_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `manager_ibfk_2` FOREIGN KEY (`id_agency`) REFERENCES `agency` (`id_agency`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `manager_project`
--
ALTER TABLE `manager_project`
  ADD CONSTRAINT `manager_project_ibfk_1` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id_manager`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `manager_project_ibfk_2` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`id_agency`) REFERENCES `agency` (`id_agency`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `register_project`
--
ALTER TABLE `register_project`
  ADD CONSTRAINT `register_project_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `task_project` (`id_task_project`),
  ADD CONSTRAINT `register_project_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `task_project`
--
ALTER TABLE `task_project`
  ADD CONSTRAINT `task_project_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
