"use client"
import Image from "next/image";
import {BsDashCircleDotted } from "react-icons/bs";
import {FaProductHunt } from "react-icons/fa";
import {TbReportAnalytics, TbTransactionRupee } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcSettings } from "react-icons/fc";
import { IoBagRemoveOutline, IoHelpBuoy } from "react-icons/io5";
import { BiLogOut, BiUserCircle } from "react-icons/bi";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
const menuItem = [
    {
        title: "Page",
        section: true
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <BsDashCircleDotted size={20} />
    },
    {
        title: "Products",
        href: "/dashboard/products",
        icon: <FaProductHunt size={20} />
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: <BiUserCircle size={20} />
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
        icon: <IoBagRemoveOutline size={18} />
    },
    {
        title: "Reports",
        href: "#",
        icon: <TbReportAnalytics size={18} />
    },
    {
        title: "Teams",
        href: "#",
        icon: <PiMicrosoftTeamsLogo size={18} />
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
                                item.section === true ? <li className="pt-4" key={item.title}>{item.title}</li> : <li className={`flex items-center  gap-2 mt-2 pl-4 text-lg p-2  ${item.title.toLowerCase() === pathname ? 'bg-secondry rounded-md' : ""}`} key={item.title}>{item.icon}<Link href={item.href}>{item.title}</Link></li>

                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>

    )
}
