import { SidePlane, MainCol } from "@/components";

const CvPage = () => (
    <div className="flex h-screen w-full">
      {/* Left Side plane (3/8 of the screen) */}
      <aside className="w-[33%] bg-transparent p-6 h-screen overflow-y-auto z-10">
        <SidePlane/>
      </aside>
  
      {/* Main Content Area (5/8 of the screen) */}
      <main className="w-[67%] bg-gray-100 p-6">
        <MainCol/>
      </main>
    </div>
  )
  
export default CvPage