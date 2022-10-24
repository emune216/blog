import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex  items-center">
      <div className="hidden md:flex text-2xl">
        <Link className="" href={"/"}>
          Home
        </Link>
        <Link href={"/tech"}>Tech</Link>
      </div>

      <div className="md:hidden items-center">
        <span className="text-neutral-500 pointer">menu</span>
      </div>
    </div>
  );
};
export default Nav;
