
import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type userRole = keyof typeof USER_ROLE;

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};


export const supportServices = [
  "প্রোডাক্ট সাপোর্ট",
  "বিক্রয় সাপোর্ট",
  "মার্কেটিং সাপোর্ট",
  "ডেলিভারি সাপোর্ট",
  "আইটি সাপোর্ট",
  "ফান্ডিং সাপোর্ট"
];
