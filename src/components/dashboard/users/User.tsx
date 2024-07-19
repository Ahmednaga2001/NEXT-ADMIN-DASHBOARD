import Image from "next/image"
import Link from "next/link"
import Search from "@/components/dashboard/Search"

export default function User() {
    return (
        <section className="m-2 bg-primary text-white p-5 font-JanatLT">
            <div className="flex justify-between items-center">
                {/* <span className="block">{pathname.split("/").pop()}</span> */}
                <Search/>
                <Link className="bg-blue-500 px-2 py-1 rounded-md hover:bg-white hover:text-black" href="/dashboard/users/adduser">Add User</Link>
                </div>

                <div className="overflow-auto py-5">
                    <table className="w-full text-center">
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="text-sm flex justify-center gap-2 p-3">
                                    <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full" />
                                    Ahmed Naga
                                </td>
                                <td className="p-3 text-sm">Ahmed@gmail.com</td>
                                <td className="p-3 text-sm">10/20/2022</td>
                                <td className="p-3 text-sm">Admin</td>
                                <td className="p-3 text-sm">active</td>
                                <td className="p-3 text-sm">
                                    <Link href="/dashboard/users/id" className="bg-red-500 px-2 py-1 rounded-md">View</Link>
                                    <Link href="" className="bg-blue-600 px-2 py-1 rounded-md ml-2">Delete</Link>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="text-sm flex justify-center gap-2 p-3">
                                    <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full" />
                                    Ahmed Naga
                                </td>
                                <td className="p-3 text-sm">pending</td>
                                <td className="p-3 text-sm">10/20/2022</td>
                                <td className="p-3 text-sm">$20</td>
                            </tr>
                            <tr className="">
                                <td className="text-sm flex justify-center gap-2 p-3">
                                    <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full" />
                                    Ahmed Naga
                                </td>
                                <td className="p-3 text-sm">pending</td>
                                <td className="p-3 text-sm">10/20/2022</td>
                                <td className="p-3 text-sm">$20</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

        </section>
    )
}
