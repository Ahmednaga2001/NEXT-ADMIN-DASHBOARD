import Image from "next/image";

export default function EditProduct() {
    return (
        <section className="m-2 bg-primary min-h-[calc(100vh-176px)] lg:min-h-[calc(100vh-108px)] text-white p-5 font-JanatLT">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="user-img bg-slate-200 rounded-md w-full lg:w-1/4">
                    <Image src="/nouser.png" width={300} height={200} alt="" className="w-full object-cover lg:h-[400px] h-[200px]" />

                </div>
                <div className="w-full lg:w-3/4">
                  <form action="">
                  <div className='grid grid-cols  gap-4'>
                        <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='title' />
                        <select name="isAdmin" id="role" className='outline-none bg-dark rounded-md p-4'>
                            <option value="general" disabled>Category</option>
                            <option value="computer" className="">Computer</option>
                            <option value="kitchen">Kitchen</option>
                        </select>
                        <input type="number" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='price' />
                        <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='stock' />
                        <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='color' />
                        <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='size' />
                        <textarea placeholder="description" name="description" id="desc" rows={5} className="w-full bg-dark p-4 outline-none resize-none col-span-2 rounded-md"></textarea>

                    </div>
                  </form>

                </div>

            </div>

        </section>

    )
}
