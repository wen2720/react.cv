import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ColorBox, type IconText , IconLabel } from "@/components";

type Contact = {
		title?: IconText
		contacts?: IconText[]
}

const ProfileContact: React.FC<Contact> = ({
	title = {
		icon: IoMdInformationCircleOutline, // React component for LinkedIn icon
		id: "Contact"
	},
	contacts = [
		{
			icon: FaLinkedin, // React component for LinkedIn icon
			id: "linkedin.com/in/profile-wenhao-0727/",
			link: "https://linkedin.com/in/profile-wenhao-0727/"
		},
		{
			icon: FaGithub, // React component for GitHub icon
			id: "github.com/wen2720",
			link: "https://github.com/wen2720/"
		},
		{
			icon: FaEnvelope, // React component for Email icon
			id: "wenhao2720@gmail.com"
		},
		{
			icon: FaPhone, // React component for Phone icon
			id: "53776999"
		}
	]
}) => (
	/* React.Fragment allows you to return multiple elements without introducing additional DOM elements */
	<>
		{/* Bar */}
		<ColorBox icon={title.icon} id={title.id} />

		<div className="p-4">
			{contacts.map((e,i) =>
				(
					<IconLabel 
						key={e.id}
						theme_font={{ fontsize: i === 0 ? "text-xs" : "text-sm" }} 
						icon_label={{ icon: e.icon, id: e.id, link:e.link }}
					/>
				) 
			)}
		</div>
	</>
)

export default ProfileContact;