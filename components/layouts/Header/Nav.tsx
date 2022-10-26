import { useRouter } from "next/router";
import Link from "next/link";

interface Link {
  title: string;
  href: string;
}
const links: Link[] = [
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
  const router = useRouter();

  return (
    <div className="flex  items-center">
      <div className="hidden md:flex text-2xl">
        {links.map(({ title, href }) => {
          const isActive = router.asPath === href;
          return (
            <Link key={title} href={href}>
              <a className={isActive ? activeLinkStyle : linkStyle}>{title}</a>
            </Link>
          );
        })}
      </div>

      <div className="items-center md:hidden">
        <span className="text-neutral-500 pointer">menu</span>
      </div>
    </div>
  );
};
export default Nav;

const linkStyle = "mr-4 hover:border-b-2 hover:border-gray-400";
const activeLinkStyle = "mr-4 border-b-2 border-gray-400";
