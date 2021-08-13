import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import MediumCard2 from '../components/MediumCard2';
import Footer from '../components/Footer';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes & ...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5
            text-gray-800">Explore nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          
          {/* now we need to access data one by one  */}
          {/* {exploreData?.map((item) => ( */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              xl:grid-cols-4">
            {/* destructuring data  */}
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard img={img} location={location} 
                distance={distance} key={img}/>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-7">Live anywhere</h2>
          <div className="flex space-x-4">
            {cardsData?.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
        </section>
        <section>
          <LargeCard img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
        <section className="mt-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-1">Discover Experiences</h2>
          <h3 className="text-3xl mb-6">Unique activities with local experts – in person or online.</h3>
          <div className="flex space-x-4 items-center justify-start">
          <div className="flex space-x-4 flex-col">
              <MediumCard2 key={1} img="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720" 
                title="Experiences" description="Local things to do, wherever you are."/>
          </div>
          <div className="flex flex-col space-x-4">
              <MediumCard2 key={2} img="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720" 
                title="Online Experiences" description="Live, interactive activities led by Hosts."/>
          </div>
          <div className="flex flex-col space-x-4 relative">
              <p className="bg-white text-xs rounded-md absolute z-10 top-5 
                left-8 py-0.5 px-2 font-semibold cursor-pointer">FEATURED</p>
              <MediumCard2 key={3} img="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=720" 
                title="Olympians & Paralympians" description="Online activities hosted by athletes."/>
          </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

// this link has links of images in json format 
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then((response) => response.json());

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then((response) => response.json());

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
};