import { NextApiRequest } from "next";
import { getCookie } from "./helpers/Cookies";

export function middleware(request: NextApiRequest) {
    const token = getCookie("mui-token");
    console.log(token, 'middleware page from  ')
  
   
  }