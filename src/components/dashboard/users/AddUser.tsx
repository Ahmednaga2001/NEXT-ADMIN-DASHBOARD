import React from 'react'

export default function AddUser() {
  return (
    <section className="m-2 bg-primary h-[calc(100vh-176px)] lg:min-h-[calc(100vh-108px)] text-white p-5 font-JanatLT">
        <form action="">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='username' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='email' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='password' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='phone' />
            <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='address' />
            <select name="isAdmin" id="role" className='outline-none bg-dark p-4'>
                <option value="false" disabled selected>isAdmin</option>
                <option value="true" className=''>true</option>
                <option value="false">false</option>
            </select>
            <select name="isActive" id="role" className='outline-none bg-dark p-4'>
                <option value="" disabled selected>isActive</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <button className='block p-2 bg-blue-900 hover:bg-white hover:text-black col-span-2 rounded-md'>Submit</button>

        </div>
        </form>
        
    </section>
  )
}
