import Image from "next/image";

const UserCard = ({ type }:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1">
            <div className="flex justify-between">
                <h1 className="text-xs bg-white rounded-md px-2 py-1">2024/25</h1>
                <Image src="/more.png" className="cursor-pointer" alt="more" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold mt-6">1,234</h1>
            <span className="text-sm font-medium text-gray-600">{type}</span>
        </div>
    );
}

export default UserCard;