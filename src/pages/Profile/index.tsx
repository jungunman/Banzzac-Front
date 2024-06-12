import Navigator from "@layouts/Navigator";
import WalkingHistory from "@containers/Profile/walk/WalkingHistory";
import MyProfile from "@containers/Profile/Profile";
import useProfile from "@hooks/profile/useProfile";
import Seperator from "@components/Seperator";
import UserCharacteristic from "@containers/Profile/UserCharacteristic";
import usePets from "@hooks/profile/usePets";
import DividerDefault from "@components/Divider/Divider";

export default function Profile() {
  const { data: profile } = useProfile();
  const { data: pets } = usePets();

  if (!profile?.data || !pets?.data) return <div />;

  return (
    <>
      <div style={{ padding: "26px 24px 60px 24px" }}>
        <MyProfile profile={profile.data[0]} pets={pets.data} />
        <Seperator height={15} />
        <UserCharacteristic {...profile.data[0]} />
        <Seperator height={40} />
        <DividerDefault width={"100%"} />
        <Seperator height={16} />
        <WalkingHistory />
      </div>
      <Navigator />
    </>
  );
}
