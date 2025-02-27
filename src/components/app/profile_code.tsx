import { FaRegFileCode } from "react-icons/fa";
import { ColorBox, IconText } from "@/components";
import React from "react";

interface ProfileCode {
	title?: IconText
	skills?: {
		language: string,
		framework?: string[]
	}[]
}

const ProfileCode: React.FC<ProfileCode> = ({
	title = {
		icon: FaRegFileCode,
		id: "Programming"
	},
	//skills = ["Python", "Elixr", "Dart", "TypeScript", "C#", "F#", "JavaScript", "HTML", "CSS", "Shell Script", "C++", "Java", "C"]
	skills = [
		{ language: "Python", framework: ["CookieCutter"] },
		{ language: "Elixr", framework: ["Phoenix"] },
		{ language: "TypeScript", framework: ["Next", "React", "Vue"] },
		{ language: "C#", framework: [".NET"] }, 
		{ language: "JavaScript", framework: ["Sails", "Node"] },
		{ language: "HTML" },
		{ language: "CSS", framework: ["Tailwind"] },
		{ language: "Shell Script" },
		{ language: "C++" },
		{ language: "Java", framework: ["Spring"] },
		{ language: "C" }

		
	]
}) => (
	<>
		<ColorBox icon={title.icon} id={title.id}></ColorBox>

		<div className="p-4 grid grid-cols-2">
			{skills.map((e) =>(
				<React.Fragment key={e.language}>	
						<p>{e.language}</p> 
						<div>
						{e.framework?.map((e)=>(
							<p key={e}>{e}</p> 
						))}
						</div>
				</React.Fragment>
			))}
		</div>
	</>
)

export default ProfileCode;