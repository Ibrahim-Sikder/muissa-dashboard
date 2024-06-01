import React from "react";
import Container from "./Container/Container";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/payment/payment.png"
              alt="payment"
              width={600}
              height={600}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center mb-32">
            <h2 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
              Now its time to change payment method.
            </h2>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </h3>
            <Link
              href={"/"}
              className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
            >
              Learn more{" "}
              <Image
                src="/assets/people/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <h2 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
              Make better business decisions with Paidin.
            </h2>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </h3>
            <Link
              href={"/"}
              className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
            >
              Learn more{" "}
              <Image
                src="/assets/people/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </Link>
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image
              src="/assets/business/business.png"
              alt="business"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CTA;
