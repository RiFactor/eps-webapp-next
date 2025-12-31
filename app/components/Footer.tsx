import { contactDetails } from "../contact/Contact";

export default function Footer() {
  return (
    <footer className="flex w-screen bg-brand-navy flex-row md:flex-col px-10 text-brand-white gap-5 divide-brand-white divide-y-2">
      {/* inc logo again?? */}
      <div className="flex py-10">
        <img
          src="assets/footerlogo.webp"
          alt="External Pressure Solutions"
          className="h-20"
        ></img>
      </div>
      {/* these all need linsk & animation */}
      {/* mobile responsive */}
      <div className="grid md:grid-cols-2 py-5">
        <div className="flex flex-col gap-2">
          <p className="">Contact Us</p>
          {contactDetails.map((contact) => {
            return (
              <div
                key={contact.id}
                className="flex group rounded"
                id="contact-card"
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex group-hover:text-brand-blue">
                    <p className="flex font-bold">{contact.type}:&nbsp;</p>
                    <p className="flex">{contact.detail}</p>
                  </div>
                </a>
              </div>
            );
          })}
          <p className="">Bournemouth, UK</p>
        </div>
        {/* <div>
          Any questions?
          <br /> Don't hesitate to reach out to us today for a free estimate.
        </div> */}
        {/* social media links */}
        <div className="font-bold">Privacy Notice</div>
      </div>
      <div className="flex py-5">
        <p>© External Pressure Solutions 2025</p>​
      </div>
    </footer>
  );
}
