import Image from "next/image";

const Hero = () => {

  return (
    <div>
      <div className="h-full w-full">
        <div className="mx-auto max-w-7xl pt-10">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="block px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                    <h1 className="text-4xl font-bold  sm:text-5xl md:text-6xl leading-10 tracking-wide">
                    با ما <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">درآمد</span> خود را چند برابر کنید
                    </h1>
            </div>

            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div className="h-full w-full">
                  <div>
                    <Image
                      width={400}
                      height={400}
                      alt="website"
                      src="/web.avif"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
