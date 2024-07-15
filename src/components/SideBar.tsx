"use client"
import Image from "next/image";
import avatar from ""
import { BsDash } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcSettings } from "react-icons/fc";
import { IoHelpBuoy } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
const menuItem = [
    {
        title: "Page",
        section: true
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <BsDash size={20} />
    },
    {
        title: "Products",
        href: "/dashboard/products",
        icon: <FaProductHunt size={20} />
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: <BsDash size={20} />
    },
    {
        title: "Transactions",
        href: "#",
        icon: <TbTransactionRupee size={20} />
    },
    {
        title: "Analytics",
        section: true
    },
    {
        title: "Revenue",
        href: "#",
        icon: <BsDash size={18} />
    },
    {
        title: "Reports",
        href: "#",
        icon: <FaProductHunt size={18} />
    },
    {
        title: "Teams",
        href: "#",
        icon: <BsDash size={18} />
    },

    {
        title: "User",
        section: true
    },
    {
        title: "Setting",
        href: "#",
        icon: <FcSettings size={18} />
    },
    {
        title: "Help",
        href: "#",
        icon: <IoHelpBuoy size={18} />
    },
    {
        title: "Logout",
        href: "#",
        icon: <BiLogOut size={20} />
    },

]
export default function SideBar() {
    const pathname = usePathname().split("/").pop()

    return (
        <div className="min-h-screen bg-primary text-white">
            <div className="container mx-auto p-4">
                <div className="flex gap-2">
                    <Image src="" width={100} height={100} alt="avatar" className="bg-white w-[60px] h-[60px] rounded-full" />
                    <span className="flex flex-col text-sm">Ahmed Naga
                        <span className="mt-2">Adminstrator</span>
                    </span>
                </div>
                <div>
                    <ul>
                        {
                            menuItem.map((item) => (
                                item.section === true ? <li className="pt-4" key={item.title}>{item.title}</li> : <li className={`flex items-center  gap-2 mt-2 pl-4 text-sm  ${item.title.toLowerCase() === pathname ? 'bg-secondry rounded-md p-2' : ""}`} key={item.title}>{item.icon}<Link href={item.href}>{item.title}</Link></li>

                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>

    )
}
