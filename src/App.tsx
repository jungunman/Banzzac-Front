import Chat from "@pages/Chat";
import ChatRoom from "@pages/Chat/ChatRoom";
import NotFound from "@pages/Error/NotFound";
import Friends from "@pages/Friends";
import Login from "@pages/Login";
import Matching from "@pages/Matching";
import Profile from "@pages/Profile";
import ProfileEditPage from "@pages/Profile/Edit";
import Search from "@pages/Search";
import UserInfoPage from "@pages/Signup/UserInfoPage";
import PaymentPage from "@pages/Profile/Payment";
import PaymentListPage from "@pages/Profile/PaymentList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddPetPage from "@pages/Profile/AddPet";
import MainLayout from "@layouts/MainLayout";
import PetInfoPage from "@pages/Signup/PetInfoPage";
import SignupComplete from "@pages/Signup/Complete";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound />} element={<MainLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup/user" element={<UserInfoPage />} />
      <Route path="/signup/pet" element={<PetInfoPage />} />
      <Route path="/signup/complete" element={<SignupComplete />} />
      <Route path="/signup/user" element={<UserInfoPage />} />
      <Route path="/signup/pet" element={<PetInfoPage />} />
      <Route path="/signup/complete" element={<SignupComplete />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/chat/:id/:oppId/:chatroomNo" element={<ChatRoom />} />
      <Route path="/search" element={<Search />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEditPage />} />
      <Route path="/profile/add-pet" element={<AddPetPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/payment/list" element={<PaymentListPage />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
