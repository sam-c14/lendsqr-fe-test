import Users from "../pages/Users";

type education = {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: String[];
  officeEmail: string;
  sector: string;
};
type guarantor = {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
};
type profile = {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
};
type socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

interface UserDetail {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: education;
  email: string;
  guarantor: guarantor;
  id: string;
  lastActiveString: string;
  orgName: string;
  phoneNumber: string;
  profile: profile;
  socials: socials;
  userName: string;
}
interface onDetailsPage {
  detailClass: string;
  activeClass: string;
}
type UserDetails = Array<{
  org: string;
  username: string;
  email: string;
  phoneNo: string;
  date: string;
  status: string;
  statusClass: string;
}>;
type Card = Array<{ src: string; title: string; count: string }>;
type UserDetail2 = Array<{
  accountBalance: string;
  accountName: string;
  createdAt: string;
  education: object;
  email: string;
  guarantor: string;
  id: string;
  lastActiveString: string;
  orgName: string;
  phoneNumber: string;
  profile: object;
  socials: object;
  userName: string;
}>;
type optionsUserDetail = {
  accountBalance: string;
  accountName: string;
  createdAt: string;
  education: object;
  email: string;
  guarantor: string;
  id: string;
  lastActiveString: string;
  orgName: string;
  phoneNumber: string;
  profile: object;
  socials: object;
  userName: string;
};
interface User {
  users: UserDetail2;
  isLoading: Boolean;
  tempUserArr: UserDetail2;
  prevPageCount: number;
  nextPageCount: number;
  pageCount: number;
  isFiltered: Boolean;
  totalPages: number;
  tableRows: number;
  error: string;
}
type SidebarType = Array<{ src: string; text: string; name: string }>;
export type {
  UserDetail,
  onDetailsPage,
  UserDetails,
  Card,
  User,
  UserDetail2,
  SidebarType,
  Users,
  optionsUserDetail,
};
