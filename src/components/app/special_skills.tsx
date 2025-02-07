import { FaBook } from "react-icons/fa6";
import { SpecialSkills } from "@/types/ProfileTypes";
import ColorBox from "@/components/color_box";

const skills_exp: SpecialSkills = [
	{
		icon: FaBook,
		id: "Specialization"
	},
	["MLOps", "HPC", "Android App", "iOS App", "Micro-service", "Front-end", "Back-end", "CI/CD", "Data Security and Privacy", "Communication protocols", "Data Structure", "Functional Programming", "Context-free grammar", "OO programming"]
]

const ProfileSpecials: React.FC = () => (
	<>
		<ColorBox icon={skills_exp[0].icon} id={skills_exp[0].id}></ColorBox>

		<div className="p-4 item-center">
			{skills_exp[1].map((e,i) =>(
				<p key={i} className="mt-2 text-xs text-center">{e}</p> 
			))}
		</div>
	</> 
)

export default ProfileSpecials;
