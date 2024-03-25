import StaticData from "../config/data";
import Feature from "./Feature";

const Features = () => {
  return (
    <div>
      <section className="relative block px-6 py-10 md:py-20 md:px-10">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className=" my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            چرا ما را انتخاب کنید
          </span>
          <h2 className="block w-full  font-bold  text-3xl leading-loose sm:text-4xl">
            وب سایتی بسازید که مشتریان شما آن را دوست داشته باشند
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl  text-center font-medium leading-relaxed tracking-wide">
            بدون نیاز به مهارت های فنی وبسایت خود را مدیریت کنید
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 ">
          {StaticData.features.map((feature, index) => (
            <Feature data={feature} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
