import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import newsList from "../dummy/newsList.json";
import portalList from "../dummy/portalList.json";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>STARTPAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-8">
          <h2 className="text-2xl font-semibold pb-5 sm:ml-12 md:ml-12 lg:ml-20 ">뉴스</h2>

          {/* Pull some data from a server -API endpoints */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
            {newsList?.map(({ no, url, name, img }) => (
              <SmallCard key={no} url={url} name={name} img={img} />
            ))}
          </div>
        </section>

        {/* Card section  */}
        <section>
          <h2 className="text-2xl font-semibold py-8 mt-4 sm:ml-12 md:ml-12 lg:ml-20">
            포털 사이트
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 md:ml-8 lg:ml-16">
            {portalList?.map(({ no, url, name, img }) => (
              <MediumCard key={no} url={url} name={name} img={img} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="항상 감사합니다"
          // description="Wishlists curated by Airbnb"
          buttonText="for Last Lee"
        />
      </main>
    </div>
  );
}
