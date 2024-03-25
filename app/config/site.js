import { FaGithub, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SiteConfig = {
  name: "رویال وب",
  name_en: "royal web",
  description: "شما بدون وب سایت هیچ هویتی ندارید",
  lang: "fa",
  dir: "rtl",
  socialMedia : [
    {
      id : 1,
      name : "گیت هاب",
      link : "https://github.com/homayunmmdy",
      icon : FaGithub
    },
    {
      id : 2,
      name : "شماره تماس",
      link : "09224003487",
      icon : FaPhone
    },
    {
      id : 3,
      name : "جمیل",
      link : "homayoun763@gmail.com",
      icon : SiGmail
    },
  ],
  nav :[
    {
      id : 1 ,
      name : "خانه",
      link : "/"
    },
    {
      id : 2 ,
      name : "تماس با ما",
      link : "/"
    },
    {
      id : 3 ,
      name : "درباره ما",
      link : "/"
    },
  ]
};

export default SiteConfig;
