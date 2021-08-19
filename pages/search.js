import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({searchResults}) {

    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMM");
    const formattedEndDate = format(new Date(endDate), "dd MMM");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="pt-14 px-6 flex-grow">
                    <p className="text-sm">
                        300+ stays · {range} · {noOfGuests} guests</p>
                    <h1 className="text-4xl font-semibold mt-2 mb-6">
                        Stays in {location}</h1>
                    <div className="flex mb-5 whitespace-nowrap">
                    {/* so many classes get cumbersome so here, we will create our own 
                        custom tailwind utility class in global.css file 
                        and will import it in app.js */}
                        <p className="button md:hidden">Filters</p>
                        <p className="button hidden md:inline-flex">Cancellation flexibility</p>
                        <p className="button mx-3 hidden md:inline-flex">Type of place</p>
                        <p className="button mr-3 hidden md:inline-flex">Price</p>
                        <p className="button mr-3 hidden md:inline-flex">Rooms and beds</p>
                        <p className="button hidden md:inline-flex">More filters</p>
                    </div>

                    <div className="flex flex-col">
                    {/* if we want to return directly then use () */}
                    {/* else wrap () inside {} and then return what is in () */}
                    {searchResults.map(({img, location, title, description, 
                        star, price, total}) => (
                        <InfoCard key={img} img={img} location={location} title={title}
                            description={description} star={star} price={price} 
                            total={total}/>
                    ))}
                    </div>
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[510px]">
                    <Map searchResults={searchResults}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search;

// server side rendering 
export async function getServerSideProps() {
    // here we are passing a dummy api 
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then((response) => response.json());

    return {
        props: {
            searchResults: searchResults,
        },
    };
};