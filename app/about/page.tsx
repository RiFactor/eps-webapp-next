export default function AboutPage() {
  const aboutMeText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br.> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const AboutMe = aboutMeText.split("<br/>");

  const newText = [];

  return (
    <div className="flex flex-col gap-5 p-10">
      {/* pics of them?  */}
      <h1>About Us</h1>
      <div>
        <article className="">
          <img
            src="assets/all-about-me.png"
            alt="profile photo"
            className="float-right h-80 w-80"
          ></img>
          <div className="">
            {AboutMe.map((paragraph) => {
              return (
                <p key={paragraph} className="flex pt-5">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
