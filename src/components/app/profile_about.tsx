interface PorfileAbout {
	title?: string
	content?: string
}
const ProfileAbout: React.FC<PorfileAbout> = ({
	title = "About",
	content = "Dedicated and experienced full-stack developer with a solid academic background in computer science and electrical engineering. Proven ability in developing scalable web and mobile applications using modern frameworks. Passionate about clean code, automation, and continuous learning. Based in Denmark, fluent in Chinese and Korean, and professionally proficient in English."
}) => (
	<>
		<p className="font-bold underline">{title}</p>
		<p className="text-sm">{content}</p>
	</>
)
export default ProfileAbout;