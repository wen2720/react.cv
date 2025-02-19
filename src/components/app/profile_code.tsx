import { FaRegFileCode } from "react-icons/fa";
import { ColorBox, IconText } from "@/components";

interface ProfileCode {
	title?: IconText
	skills?: string[]
}

const ProfileCode: React.FC<ProfileCode> = ({
	title = {
		icon: FaRegFileCode,
		id: "Programming"
	},
	skills = ["Python", "Elixir", "Dart", "TypeScript", "C#", "F#", "JavaScript", "HTML", "CSS", "Shell Script", "C++", "Java", "C"]
}) => (
	<>
		<ColorBox icon={title.icon} id={title.id}></ColorBox>

		<div className="p-4 item-center">
			{skills.map((e) =>(
				<p key={e} className="mt-2 text- text-center">{e}</p> 
			))}
		</div>
	</>
)

export default ProfileCode;