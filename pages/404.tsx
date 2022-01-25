import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
const PageNotFound: NextPage = () => {
  return (
    <div className="container">
      <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto  d-flex align-items-center">
        <Image
          src="/Error.png"
          alt="Picture of the error"
          width={500}
          height={500}
        />
        <div className="card-body mx-auto">
          <Link href="/">
            <a
              type="button"
              className="btn btn-lg btn-primary text-white d-flex justify-content-center"
            >
              <span className="font-16">الرجوع إلى الصفحة الرئيسية</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
