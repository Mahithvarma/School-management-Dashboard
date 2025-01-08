import Image from "next/image"

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex border-gray-300 border-2 rounded-full px-2 py-1 items-center gap-4">
            <Image src="/search.png" alt="search" width={20} height={20} />
            <input className="outline-none bg-transparent" type="text" placeholder="Search..." />
        </div>

        {/* ICONS AND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white w-7 h-7 rounded-full cursor-pointer flex items-center justify-center ">
                <Image src="/message.png" alt="mesaage" width={30} height={30} />
            </div>
            <div className="bg-white w-7 h-7 rounded-full cursor-pointer flex items-center justify-center relative">
                <Image src="/announcement.png" alt="announcement" width={30} height={30} />
                <div className="absolute -top-3 -right-3  w-5 h-5 bg-purple-500 text-white text-xs flex items-center justify-center rounded-full">2</div>
            </div>
            <div className="flex flex-col mt-2">
                <span className="text-sm leading-3 font-medium">Mahith varma</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <div className="">
                <Image src="/avatar.png" alt="avatar" className="rounded-full" width={30} height={30}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar