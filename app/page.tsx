const servicesList = [
  { id: 1, service: "Block Tile Cleaning" },
  { id: 2, service: "Tile Sealing" },
  { id: 3, service: "Gutter Unblocking" },
  { id: 4, service: "Fascia Cleaning" },
  { id: 5, service: "Power Washing" },
  { id: 6, service: "Jet Washing" },
  { id: 7, service: "Driveway Cleaning" },
  { id: 10, service: "Pressure Washing" },
  { id: 11, service: "Power Washing Services" },
];

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col p-5 gap-5">
        <h1 className="flex justify-center text-brand-white bg-brand-blue p-2">
          External Pressure Solutions
        </h1>
        <div className="flex -z-10 -m-10">
          <img
            src="assets/images/driveway-stock.jpg"
            alt="driveway"
            className="object-fit"
          ></img>
        </div>
        <h2 className="flex text-center">
          External Pressure Solutions is dedicated to ensuring that homes and
          businesses are kept pristine in the Dorset and Hampshire area.
        </h2>
        {/* cleaning? */}
        <div className="flex flex-wrap text-center bg-brand-blue">
          With over 20 years' experience in all aspects of residential and
          commercial cleaning and associated services, External Pressure
          Solutions (EPS) are the <strong>&nbsp;#1&nbsp;</strong>choice for
          property owners in Dorset & Hampshire. We provide unrivalled customer
          service and value for money. We are competitively priced in the area
          and we take pride in the trust that our customers have for the EPS
          range of servies.
        </div>
        <p>Our services include:</p>
        <div className="flex flex-wrap gap-5 justify-center">
          {servicesList?.map((service) => {
            return (
              <p
                className="bg-brand-blue p-2 rounded text-brand-white text-xl"
                key={service.id}
              >
                {service.service}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
