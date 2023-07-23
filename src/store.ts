import { create } from "zustand";

interface UserGeoLoc {
  lat: string;
  lng: string;
}
interface UserAddress {
  city: string;
  geo: UserGeoLoc;
  street: string;
  suite: string;
  zipcode: string;
}
interface UserCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
interface UserDetail {
  id: number;
  address: UserAddress;
  company: UserCompany;
  email: string;
  name: string;
  phone: string;
  profilepicture: string;
  username: string;
  website: string;
}

interface UserStore {
  users: UserDetail[];
}
const useUserStore = create<UserStore>((set) => ({
  users: [],
}));

export default useUserStore;
