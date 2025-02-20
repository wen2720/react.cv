interface PorfileAbout {
	title?: string
	content?: string
}
const ProfileAbout: React.FC<PorfileAbout> = ({
	title = "About",
	content = "I'm looking for a full stack developer role. I've worked as an associated full stack developer for developing web and mobile applications."
}) => (
	<>
		<p className="font-bold underline">{title}</p>
		<p className="text-sm">{content}</p>
	</>
)
export default ProfileAbout;