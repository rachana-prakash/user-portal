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
  pageTitle: string;
  selectedUser: UserDetail | null;
  setSelectedUserDetails: (user: UserDetail | null) => void;
  setUsers: (users: UserDetail[]) => void;
  setPageTitle: (title: string) => void;
}
const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  pageTitle: "",
  setSelectedUserDetails: (userDetail) =>
    set(() => ({ selectedUser: userDetail })),
  setUsers: (users) => set(() => ({ users: users })),
  setPageTitle: (title) => set(() => ({ pageTitle: title })),
}));
if (import.meta.env.MODE === "development") {
  mountStoreDevtool("User Store", useUserStore);
}

export default useUserStore;
