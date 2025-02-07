/* 
	IconLabel is an react component which shows icon and text in a row.
	The icon, font are change able to show differently.
	The styles can also be develop for further reqirement.
*/
import { IconText } from "@/types/ProfileTypes"
import { TextTheme } from "@/types/Theme"

interface ALabel {
	theme_font: TextTheme
	icon_label: IconText
}

const IconLabel: React.FC<ALabel> = ({
	theme_font: {bold, fontsize},
	icon_label: {icon:Icon, id}
}) => (
	<div className="flex items-center">
		{/* Icon: Takes 1/5 of the space */}
		<div className="flex-shrink-0 w-1/5">
			<Icon className="text-xl text-white" />
		</div>

		{/* Label: Takes the remaining 2/5 of the space */}
		<div className="w-2/5 pl-4">
			<span className={`text-lg ${bold} ${fontsize} text-white`}>{id}</span>
		</div>
	</div>
)

export default IconLabel