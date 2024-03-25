import { MdOutlineAccessTime } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";

const StaticData = {
  features: [
    {
      id: 1,
      title: "چرا وقتتو تلف میکنی",
      desc: "با ما وبسایت خود را زیر یک هفته تحویل بگیرید",
      icon: MdOutlineAccessTime,
    },
    {
      id: 2,
      title: "چرا الکی زور میزنی",
      desc: "بدون نیاز به مهارت های فنی تمامی بخشی های وبسایتان  را مدیریت کنید ",
      icon: SlEnergy,
    },
    {
      id: 3,
      title: "چرا پولتو هدر میدی",
      desc: "با کمترین قیمت سرعترین کارکرد را از ما ببرید",
      icon: MdAttachMoney,
    }
  ],
  pricing: [
    {
      id : 1,
      title : "۱ ماهه",
      description : "با خرید این پنل ادمین رویال وب برای یک ماه برای  شما فعال می شود ",
      price: "۲۹۹ هزار تومان"
    },
    {
      id : 2,
      title : "۱ ساله",
      description : "با خرید این پنل ادمین رویال وب برای یک سال برای شما فعال می شود ",
      price: "۳ میلیون",
      off : "۳.۵ میلیون",
      most_popular : "محبوبترین"
    },
    {
      id : 3,
      title : "۳ ماهه",
      description : "با خرید این پنل ادمین رویال وب برای سه ماه برای  شما فعال می شود ",
      price: "۷۹۹ هزار تومان",
      off : "۸۹۷ هزار تومان"
    },
  ]
};

export default StaticData;
