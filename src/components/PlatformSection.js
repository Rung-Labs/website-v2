import platformsImage from "../assets/platforms.png";

export default function PlatformSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Already Using A CRM?
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            No problem. Rung works with your existing CRM and chat platform
            taking your historic data and making it available in a new way.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <img
            src={platformsImage}
            alt="CRM Platforms"
            className="w-full max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
}
