import React from "react";

import { Routes, Route } from "react-router-dom";
//ex
import User from './pages/User'
import Create from './pages/Create'
import Update from "./pages/Update";

//authen
import Login from "./pages/authen/login";
import Register from "./pages/authen/Register";

//user
import ProfileUser from "./pages/user/ProfileUser";
import EditProfileUser from "./pages/user/EditProfileUser";
import HistoryDonate from "./pages/user/historyDonate";
import HistoryJoin from "./pages/user/historyJoin";
import ProjectFollow from "./pages/user/projectFollow";
import CreateAgency from "./pages/user/createAgency";
import LookAgency from "./pages/user/LookAgency";
import RegisterAgency from "./pages/user/RegisterAgency";

//Reponsible(ผู้รับผิดชอบหน่วงาน)
import ProfileReponsible from './pages/responsibleProject/ProfileReponsible'
import CreateProject from './pages/responsibleProject/CreateProject'
import TaskProject from "./pages/responsibleProject/TaskProject";
import ApproveUser from "./pages/responsibleProject/ApproveUser";
import ChangeRole from "./pages/responsibleProject/ChangeRole"
import LookProject from "./pages/responsibleProject/LookProject";
import ApproveProject from "./pages/responsibleProject/ApproveProject";
import ApproveRunner from "./pages/responsibleProject/ApproveRunner";

//agency
import ProfileAgency from "./pages/agency/ProfileAgency";
import AgencyAppoveProject from "./pages/agency/AgencyAppoveProject";
import AgencyAppoveAgency from "./pages/agency/AgencyAppoveAgency";

//admin
import AdminCheckPayment from "./pages/admin/AdminCheckPayment";
import AdminAllProject from "./pages/admin/AdminAllProject";
import AdminAllAgency from "./pages/admin/AdminAllAgency";
import AdminApproveAgency from './pages/admin/AdminApproveAgency'
import ProfileAdmin from './pages/admin/ProfileAdmin'

import EventPage from "./pages/EventPage";
import PaymentQrcode from "./pages/PaymentQrcode";
import DetailEventPage from "./pages/Detaileventpage";
import AssignRights from './pages/AssignRights'
import Home from "./pages/Home";
import AgencyApprove from './pages/agency/AgencyApprove'
import RegisterProject from "./pages/responsibleProject/RegisterProject";
import ShowUserRegisProject from "./pages/responsibleProject/ShowUserRegisproject";
import Projectsupervice from "./pages/responsibleProject/Projectsupervice";
import DonatePage from "./pages/DonatePage";
import RegisterForRun from"./pages/RegisterForRun";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        //authen
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        //user
        <Route path="profileuser" element={<ProfileUser />} />
        <Route path="editprofileuser/:id" element={<EditProfileUser />} />
        <Route path="createagency" element={<CreateAgency />} />
        <Route path="lookagency" element={<LookAgency />} />
        <Route path="regisagency/:idAgency" element={<RegisterAgency />} />

        //Reponsible(ผู้รับผิดชอบหน่วงาน)
        <Route path="profilereponsible" element={<ProfileReponsible />} />
        <Route path="createproject/:idAgency" element={<CreateProject />} />
        <Route path="taskproject/:idproject" element={<TaskProject />} />
        <Route path="approveuser" element={<ApproveUser />} />
        <Route path="changerole/:idAgency" element={<ChangeRole />} />
        <Route path="registerproject" element={<RegisterProject />} />
        <Route path="lookProject" element={<LookProject />} />
        <Route path="approveproject" element={<ApproveProject />} />
        <Route path="projectsupervice" element={<Projectsupervice />} />
        <Route path="showuserregisproject/:id" element={<ShowUserRegisProject />} />
        <Route path="approverunner" element={<ApproveRunner />} />

        //มีทุกRole
        <Route path="historyDonate" element={<HistoryDonate />} />
        <Route path="historyJoin" element={<HistoryJoin />} />
        <Route path="projectfollow" element={<ProjectFollow />} />
        <Route path="home" element={<Home />} />
        <Route path="eventpage" element={<EventPage />} />
        <Route path="detaileventpage/:id" element={<DetailEventPage />} />
        <Route path="donate/:id" element={<DonatePage />} />
        <Route path="registerforrun/:id" element={<RegisterForRun />} />
        //admin
        <Route path="admincheckpayment" element={<AdminCheckPayment />} />
        <Route path="adminallproject" element={<AdminAllProject />} />
        <Route path="adminallagency" element={<AdminAllAgency />} />
        <Route path="adminapproveagency" element={<AdminApproveAgency />} />
        <Route path="profileadmin" element={<ProfileAdmin />} />
        
        //agency
        <Route path="agencyapprove" element={<AgencyApprove />} />
        <Route path="profileagency" element={<ProfileAgency />} />
        <Route path="agencyappoveproject" element={<AgencyAppoveProject />} />
        <Route path="agencyappoveagency" element={<AgencyAppoveAgency />} />


        {/* <Route path="assignrights" element={<AssignRights />} /> */}
        <Route path="detaileventpage" element={<DetailEventPage />} />
        <Route path="assignrights" element={<AssignRights />} />
        {/* <Route path="paymentqrcode" element={<PaymentQrcode />} /> */}


        {/* <Route path="user" element={<User />} />
        <Route path="create" element={<Create />} />
        <Route path="update/:id" element={<Update />} /> */}


      </Routes>
    </div>
  );
}