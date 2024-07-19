import { MdSearch } from "react-icons/md";


export default function Search() {
  return (
    <div className="bg-dark flex items-center gap-2 rounded-md p-2">
    <MdSearch/>
    <input type="text" className="bg-transparent outline-none flex-grow" placeholder="Search..." />
  </div>
  )
}
