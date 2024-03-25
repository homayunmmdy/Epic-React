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
};

export default StaticData;
