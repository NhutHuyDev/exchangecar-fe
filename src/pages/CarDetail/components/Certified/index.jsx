import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Certified() {
  const certificates = [
    {
      title: "Procedures in accordance with regulations",
      image: "/img/car-detail/car-certified/no_accidents.svg",
    },
    {
      title: "Không cháy nổ",
      image: "/img/car-detail/car-certified/no_fire.svg",
    },
    {
      title: "Không ngập nước",
      image: "/img/car-detail/car-certified/no_flood.svg",
    },
  ];
  return (
    <section
      id="certificate"
      className="px-3 py-8 xl:px-20 xl:py-12 bg-grey-color"
    >
      <div className="text-secondary-color p-11 mt-10 mb-14 rounded-2xl shadow-2xl background-primary-linear flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-start lg:justify-around items-stretch">
        <div className="h-full flex lg:justify-center items-center">
          <div className="border-y-secondary-color">
            <p>Certificate</p>
            <p className="text-3xl font-bold">ExchangeCar</p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
          <img
            className="w-11 h-11"
            alt=""
            src="/img/certificate-car/certificate-1.png"
          />
          <span className="font-bold text-center">Score 160 test points</span>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
          <img
            className="w-11 h-11"
            alt=""
            src="/img/certificate-car/certificate-2.png"
          />
          <span className="font-bold text-center">Free Maintenance</span>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
          <img
            className="w-11 h-11"
            alt=""
            src="/img/certificate-car/certificate-3.png"
          />
          <span className="font-bold text-center">One year warranty</span>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
          <img
            className="w-11 h-11"
            alt=""
            src="/img/certificate-car/certificate-4.png"
          />
          <span className="font-bold text-center">Quality assurance</span>
        </div>

        <div className="flex flex-row lg:flex-col space-x-2 lg:justify-between items-center">
          <img
            className="w-11 h-11"
            alt=""
            src="/img/certificate-car/certificate-5.png"
          />
          <span className="font-bold text-center">5 days money back</span>
        </div>
      </div>
      <div>
        <div className="flex items-center text-center mb-4">
          <span className="flex-1 h-[2px] bg-primary-color"></span>
          <h1 className="text-center text-primary-color font-bold mb-3 mx-5 ">
            Commitment
          </h1>
          <span className="flex-1 h-[2px] bg-primary-color"></span>
        </div>
        <div className="text-center text-base font-semibold mb-8">
          Rest assured and buy with confidence when you purchase a car at
          <span className="ms-2 text-2xl font-bold text-primary-color">
            ExchangeCar
          </span>
        </div>
        {/* <div className="flex justify-around md:justify-center items-baseline md:gap-28">
          {certificates.map((certificate) => (
            <div className="flex flex-col justify-center items-center">
              <img className="w-100 mb-2" src={certificate.image} alt="" />
              <span className="font-semibold text-base">
                {certificate.title}
              </span>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="video col-span-2 xl:col-span-1 h-[320px] md:h-[500px] xl:h-[320px]">
            <img src="/img/commitment.png" className="w-full rounded-lg" alt="" />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <p className="text-start text-lg text-primary-color font-bold mb-3">
              Ensurance
            </p>
            <div className="rounded-lg p-6 border border-grey-color-200 border-opacity-25">
              <div className="flex justify-between items-center text-secondary-color">
                <div className="flex gap-2">
                  <img
                    src="/img/car-detail/car-inspection/road-tests-checks.svg"
                    alt=""
                  />
                  <span className="font-bold text-base">
                    All vehicles pass a thorough road test for safety and
                    performance.
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3"></div>
              <div className="flex justify-between items-center text-secondary-color">
                <div className="flex gap-2">
                  <img
                    src="/img/car-detail/car-inspection/exterior-checks.svg"
                    alt=""
                  />
                  <span className="font-bold text-base">
                    The exterior is in excellent condition, free from major
                    damage.
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3"></div>

              <div className="flex justify-between items-center text-secondary-color">
                <div className="flex gap-2">
                  <img
                    src="/img/car-detail/car-inspection/interior-checks.svg"
                    alt=""
                  />
                  <span className="font-bold text-base">
                    The interior is clean, odor-free, and fully functional.
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>
              </div>
              <div className="w-full h-[1px] bg-grey-color-200 bg-opacity-25 rounded-full my-3"></div>
              <div className="flex justify-between items-center hover:text-primary-color">
                <div className="flex gap-2">
                  <img
                    src="/img/car-detail/car-inspection/underbody-and-under-the-hood-checks.svg"
                    alt=""
                  />
                  <span className="font-bold text-base">
                    The frame and roof are undamaged and in perfect condition.
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certified;
