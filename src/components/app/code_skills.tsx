import { FaRegFileCode } from "react-icons/fa";
import ColorBox from "../color_box";
import { SpecialSkills } from "../../types/ProfileTypes";

const skills_exp: SpecialSkills = [
	{
		icon: FaRegFileCode,
		id: "Specialization"
	},
	["Python", "Elixir", "Dart", "TypeScript", "C#", "F#", "JavaScript", "HTML", "CSS", "Shell Script", "C++", "Java", "C"]
]

const CodeSkills: React.FC = () => (
    <>
			<ColorBox icon={skills_exp[0].icon} id={skills_exp[0].id}></ColorBox>

			<div className="p-4 item-center">
				{skills_exp[1].map((e) =>(
					<p key={e} className="mt-2 text-xs text-center">{e}</p> 
				))}
			</div>
		
    </>
)

export default CodeSkills;