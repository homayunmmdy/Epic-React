import SiteConfig from "../config/site";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4">
        <aside className="items-center grid-flow-col">
          <p className="text-base">
            کپی رایت © {new Date().getFullYear()} - {SiteConfig.name}
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {SiteConfig.socialMedia.map((item) => {
            const LinkIcon = item.icon;
            return (
              <a
                key={item.id}
                href={item.name}
                title={item.name}
                target="_blank"
              >
                <LinkIcon size={20} />
              </a>
            );
          })}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
