import Image from "next/image";

export default function Transaction() {
  return (
    <section className="m-2 bg-primary text-white p-5 font-JanatLT">
        <div>
            <h3 className="text-gray-600 font-JanatWT font-bold text-xl">Latest Transactions</h3>
          <div className="overflow-auto py-5">
          <table className="w-full text-center">
                <thead>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="text-sm flex justify-center gap-2 p-3">
                            <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full"/>
                            Ahmed Naga
                        </td>
                        <td className="p-3 text-sm">pending</td>
                        <td className="p-3 text-sm">10/20/2022</td>
                        <td className="p-3 text-sm">$20</td>
                    </tr>
                    <tr className="">
                        <td className="text-sm flex justify-center gap-2 p-3">
                            <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full"/>
                            Ahmed Naga
                        </td>
                        <td className="p-3 text-sm">pending</td>
                        <td className="p-3 text-sm">10/20/2022</td>
                        <td className="p-3 text-sm">$20</td>
                    </tr>
                    <tr className="">
                        <td className="text-sm flex justify-center gap-2 p-3">
                            <Image src="" width={20} height={20} alt="photo" className="w-[20px] h-[20px] rounded-full"/>
                            Ahmed Naga
                        </td>
                        <td className="p-3 text-sm">pending</td>
                        <td className="p-3 text-sm">10/20/2022</td>
                        <td className="p-3 text-sm">$20</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      
    </section>
  )
}
