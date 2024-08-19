import footerStyles from "./footer.module.css";

export default function SocialLinks() {
  const socials = [
    {
      icon: "facebook.svg",
      link: "https://www.facebook.com/kiriromdigital",
    },
    {
      icon: "note.svg",
      link: "https://note.com/kirirom_ac/n/n3dd0016d6280",
    },
    {
      icon: "twitter.svg",
      link: "https://twitter.com/kiriromdigital",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center">
      {socials.map((item, idx) => (
        <div className="d-flex" key={idx} style={{ height: "100%" }}>
          <a
            target="_blank"
            href={item.link}
            rel="noopener noreferrer"
            className={footerStyles.socialIcon}
          >
            <img
              src={"/icons/socials/" + item.icon}
              alt="social icon"
              style={{ cursor: "pointer" }}
            />
          </a>
          {idx !== socials.length - 1 && <div className="px-4"></div>}
        </div>
      ))}
    </div>
  );
}
