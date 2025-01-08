import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const Adminpage = () => {
    return (
        <div className="p-4 flex flex-col gap-4 md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                {/* USER CARDS */}
                <div className="flex flex-row gap-4 justify-between flex-wrap">
                    <UserCard type="Student" />
                    <UserCard type="Teacher" />
                    <UserCard type="Parent" />
                    <UserCard type="Staff" />
                </div>

                {/* MIDDLE CHARTS */}
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>

                    {/* ATTENDANCE CHART */}
                    <div>
                        
                    </div>
                </div>

                {/* BOTTOM CHARTS */}
                <div>
                    
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/3">
                r
            </div>
        </div>
    )
}

export default Adminpage