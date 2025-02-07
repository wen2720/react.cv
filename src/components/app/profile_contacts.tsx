import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Contacts } from "@/types/ProfileTypes";
import ColorBox from "@/components/color_box";
import IconLabel from "@/components/icon_label";

const contact_exp: Contacts = [
	{
		icon: IoMdInformationCircleOutline, // React component for LinkedIn icon
		id: "Contact"
	},
	[
		{
			icon: FaLinkedin, // React component for LinkedIn icon
			id: "linkedin.com/in/profile-wenhao-0727/"
		},
		{
			icon: FaGithub, // React component for GitHub icon
			id: "github.com/wen2720"
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
];

const ProfileContact: React.FC = () => (
	/* React.Fragment allows you to return multiple elements without introducing additional DOM elements */
	<>
		{/* Bar */}
		<ColorBox icon={contact_exp[0].icon} id={contact_exp[0].id}></ColorBox>

		<div className="p-4">
			{contact_exp[1].map((e,i) =>
				
				(
					<IconLabel 
						key={e.id}
						theme_font={{ fontsize: i === 0 ? "text-xs" : "text-sm" }} 
						icon_label={{
							icon: e.icon,
							id: e.id
						}}
					/>
				) 
			)}
		</div>
	</>
)

export default ProfileContact;