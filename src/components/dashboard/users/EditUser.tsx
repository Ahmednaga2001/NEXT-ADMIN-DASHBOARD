import Image from "next/image";

export default function EditUser() {
  return (
    <section className="m-2 bg-primary min-h-[calc(100vh-176px)] lg:min-h-[calc(100vh-108px)] text-white p-5 font-JanatLT">
        <div className="flex flex-col gap-10 lg:flex-row">
            <div className="user-img bg-slate-200 rounded-md w-full lg:w-1/4">
                <Image src="/nouser.png" width={300} height={200} alt="" className="w-full object-cover lg:h-[400px] h-[200px]"/>

            </div>
            <div className="w-full lg:w-3/4">
            <div className='grid grid-cols  gap-4'>
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='username' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='email' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='password' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='phone' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='address' />
            <select name="isAdmin" id="role" className='outline-none p-4 bg-dark'>
                <option value="false" disabled selected>isAdmin</option>
                <option value="true" className=''>true</option>
                <option value="false">false</option>
            </select>
            <select name="isActive" id="role" className='outline-none p-4 bg-dark'>
                <option value="" disabled selected>isActive</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>

        </div>

            </div>

        </div>
        
    </section>  
    
  )
}
