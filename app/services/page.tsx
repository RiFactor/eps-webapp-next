"use client";
import { useState } from "react";
import DrivewayCleaning from "./DrivewayCleaning";
import GutterCleaning from "./GutterCleaning";

const servicesDetailList = [
  {
    id: 1,
    service: "Gutter Cleaning",
    detail: <GutterCleaning />,
  },
  // include icons or cover images?
  { id: 2, service: "Roof Cleaning", detail: "" },
  { id: 3, service: "Driveway Cleaning", detail: <DrivewayCleaning /> },
  { id: 4, service: "Commercial Pressure Cleaning ", detail: "" },
  // { id: 5, service: "", detail: "" },
  // { id: 6, service: "", detail: "" },
  // { id: 7, service: "", detail: "" },
];

// <ol>Gutter Cleaning</ol>
// <ol>Guttering Clearing</ol>
// <ol>Roof and solar panel cleaning</ol>
// <ol>Driveway Cleaning</ol>
// <ol>Patio Cleaning</ol>
// <ol>Residential Jet Washing</ol>
// <ol>Commercial Pressure Cleaning</ol>

const ServicesPage = () => {
  const [displayPage, setDisplayPage] = useState(false);

  const handleDisplayPage = (service: any) => {
    console.log(service);
    setDisplayPage(!displayPage);
  };
  // esc to leave
  return (
    <>
      <div>
        Services and what we offer
        {/* TODO FEAT: make this a card, then clicking on it should navigate to  another page*/}
        <ul>Services</ul>
        <div className="flex flex-col md:flex-row gap-2">
          {servicesDetailList.map((service) => {
            return (
              <button
                key={service?.id}
                onClick={() => {
                  handleDisplayPage(service);
                }}
              >
                {/* navigate to another page */}
                <div className="bg-brand-navy text-brand-white rounded p-2">
                  <h2>{service?.service}</h2>
                  {/* <p>{service?.detail}</p> */}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {displayPage && (
        // fixed!
        <div className="flex fixed top-0 left-0 z-50  min-w-screen min-h-screen justify-center p-5 rounded bg-brand-white text-center items-center opacity-95">
          <div className="flex flex-col bg-brand-blue w-full h-full">
            {" "}
            {/* work out a nice way to style it - sizing etc */}
            Display the Page here
            <button
              onClick={() => setDisplayPage(false)}
              className="flex absolute right-0 top-0 p-5 text-2xl text-brand-blue hover:text-brand-navy"
            >
              X{/* TODO: esc key or click out to leave */}
              {/* another button at end to 'EXIT' or is that over engineering  */}
            </button>
          </div>
          {/* render content here */}
        </div>
      )}
    </>
  );
};

export default ServicesPage;
