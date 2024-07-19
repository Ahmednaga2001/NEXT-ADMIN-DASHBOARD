import { GiEarthWorm } from "react-icons/gi";


export default function Card() {
  return (
    <section className="cards m-2 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="card p-5 bg-primary rounded-md">
                <h3 className="flex gap-2 items-center">
                    <GiEarthWorm size={18}/>
                    Total Users
                </h3>
                <span className="block py-5">10.988</span>
                <p>12% more previous week</p>

            </div>
            <div className="card p-5 bg-primary rounded-md">
                <h3 className="flex gap-2 items-center">
                    <GiEarthWorm size={18}/>
                    Total Users
                </h3>
                <span className="block py-5">10.988</span>
                <p>12% more previous week</p>

            </div>
            <div className="card p-5 bg-primary rounded-md">
                <h3 className="flex gap-2 items-center">
                    <GiEarthWorm size={18}/>
                    Total Users
                </h3>
                <span className="block py-5">10.988</span>
                <p>12% more previous week</p>

            </div>

        </div>
      
    </section>
  )
}
