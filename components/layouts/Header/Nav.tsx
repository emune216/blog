import Link from "next/link";

const links: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "/resume",
  },
];

const Nav = () => {
  return (
    <div className="flex  items-center">
      <div className="hidden md:flex text-2xl">
        {links.map(({ title, href }) => (
          <Link key={title} href={href}>
            <a className="mr-2">{title}</a>
          </Link>
        ))}
      </div>

      <div className="md:hidden items-center">
        <span className="text-neutral-500 pointer">menu</span>
      </div>
    </div>
  );
};
export default Nav;
