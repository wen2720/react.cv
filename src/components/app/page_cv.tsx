import { LeftColumn, RightColumn } from "@/components";
import TestParticles from "@/components/app/particles_test"

const CvPage = () => (
    <div className="flex h-screen w-full">
      {/* Left Side plane (3/8 of the screen) */}
      <TestParticles/>
      <aside className="w-[33%] p-6 h-screen overflow-y-auto z-10">
        <LeftColumn/>
      </aside>
  
      {/* Main Content Area (5/8 of the screen) */}
      <main className="w-[67%] p-6 z-10">
        <RightColumn/>
      </main>
    </div>
  )
  
export default CvPage