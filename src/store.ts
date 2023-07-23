import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
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
export interface UserDetail {
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
export interface Users {
  users: UserDetail[];
}

interface UserStore {
  users: UserDetail[];
  selectedUser: UserDetail | null;
  setSelectedUserDetails: (user: UserDetail | null) => void;
  setUsers: (users: UserDetail[]) => void;
}
const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  setSelectedUserDetails: (userDetail) =>
    set(() => ({ selectedUser: userDetail })),
  setUsers: (users) => set(() => ({ users: users })),
}));
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("User Store", useUserStore);
}
export default useUserStore;
