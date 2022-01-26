import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>مرحبا بك</title>
      </Head>
      <div className="home_container">
        <div className="overlay">
          <div className="content">
            <div
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="logo-title">
                <h1 className=" text-white">Room Smart</h1>
                <h3 className=" text-white">Booking Room</h3>
              </div>
              <Image src="/authlogo.png" width="112px" height="102px" alt="" />
            </div>
            <div className="btnscontainer mt-3">
              <div className=" btn mb-24">
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="btn  btnscontainer__btn bg-white"
                >
                  تسجيل الدخول
                </button>
              </div>
              <div className="btn  ">
                <button
                  className=" btn btnscontainer__btn text-white "
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  إنشاء الحساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
