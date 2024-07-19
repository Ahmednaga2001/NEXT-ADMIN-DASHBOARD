
export default function AddProduct() {
    return (
        <section className="m-2 bg-primary h-[calc(100vh-176px)] lg:min-h-[calc(100vh-108px)] text-white p-5 font-JanatLT">
                <form action="">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='title' />
                    <select name="isAdmin"  id="role" className='outline-none bg-dark rounded-md p-4'>
                        <option value="general" disabled>Category</option>
                        <option value="computer" className="">Computer</option>
                        <option value="kitchen">Kitchen</option>
                    </select>
                    <input type="number" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='price' />
                    <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='stock' />
                    <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='color' />
                    <input type="text" className='block w-full p-4 rounded-md outline-none bg-dark' placeholder='size' />
                    <textarea placeholder="description" name="description" id="desc" rows={5} className="w-full bg-dark p-4 outline-none resize-none col-span-2 rounded-md"></textarea>
                    <button className="block rounded-md col-span-2 text-center p-2 bg-blue-900 hover:bg-white hover:text-black w-full">Submit</button>


            </div>
                </form>
        </section>
    )
}
