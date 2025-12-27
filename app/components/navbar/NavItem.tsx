import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  label: string;
  // linkKey?: string, // hyperlink text
  id?: string; // is this needed here as an interface if not passed down
}

export default function NavItem({ href, label, id = "navbar_item" }: IProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      // key={linkKey}
      // add this colour to styles instead of hardcoding
      className={`${
        isActive ? "bg-[#f9eee3]" : ""
      } rounded-full p-2 hover:bg-amber-900 hover:text-white`}
      id={id}
    >
      {label}
    </Link>
  );
}
