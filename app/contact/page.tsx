import { contactDetails } from "./Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="">Contact</h1>
      <div className="flex flex-col gap-5 flex-wrap">
        {contactDetails.map((contact) => {
          return (
            <div
              key={contact.id}
              className="flex group bg-blue-200 rounded p-5 md:w-fit hover:bg-dark-green"
              id="contact-card"
            >
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <div className="flex group-hover:text-white">
                  <p className="flex font-bold">{contact.type}:&nbsp;</p>
                  <p className="flex">{contact.detail}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
