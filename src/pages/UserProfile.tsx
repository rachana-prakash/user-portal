import { Heading } from "@chakra-ui/react";
import Details from "../components/Details";
import useMapHelper from "../hooks/useMapHelper";
import useUserStore from "../store";
import ProfilePhoto from "../components/ProfilePhoto";

const UserProfile = () => {
  const selectedUser = useUserStore((s) => s.selectedUser);
  const userInfo = useMapHelper({
    username: selectedUser?.username,
    email: selectedUser?.email,
    phone: selectedUser?.phone,
    website: selectedUser?.website,
  });
  const userAddress = useMapHelper({
    street: selectedUser?.address.street,
    suite: selectedUser?.address.suite,
    city: selectedUser?.address.city,
    zipcode: selectedUser?.address.zipcode,
  });

  const userCompany = useMapHelper({
    name: selectedUser?.company.name,
    catchphrase: selectedUser?.company.name,
    bs: selectedUser?.company.bs,
  });

  return (
    <>
      <ProfilePhoto size="150px" src={selectedUser?.profilepicture as string} />
      <Heading>{selectedUser?.name}</Heading>
      <Details details={userInfo} />
      <Details details={userAddress} />
      <Details details={userCompany} />
      User
    </>
  );
};

export default UserProfile;
