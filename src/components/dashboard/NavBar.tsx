"use client"
import { FaEarthAmericas } from "react-icons/fa6";
import { FiAlertCircle, FiMessageSquare } from "react-icons/fi";
import Search from "@/components/dashboard/Search"
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="bg-primary text-white py-2 px-5 m-1">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <span className="block md:text-start text-center md:mb-0 mb-2">{pathname.split("/").pop()}</span>
          <div className="flex flex-col gap-4 justify-center md:flex-row md:items-center md:justify-start">
          <Search/>
            <div className="flex gap-4 flex-row md:items-center items-start justify-center ">
              <FiMessageSquare size={20} />
              <FiAlertCircle size={20} />
              <FaEarthAmericas size={20} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
