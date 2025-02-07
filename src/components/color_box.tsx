/* 
	ColorBox is a reuseable react component. .It has fading edges for both top and bottom.
	Initially it's created for showing a bar with a row items and they are made as a component 'IconLabel'
	which can be reused easily.
	It is fully extendable for adding attributes to develop more diverse 
*/
import { IconText } from "@/types/ProfileTypes";
import IconLabel from "@/components/icon_label";

const ColorBox: React.FC<IconText> = (
	{
		icon,
		id
	}
) => (
	<>
		<div className="bg-zinc-800 mt-4 p-4 rounded-md shadow-lg relative overflow-hidden">
			{/* Fading top edge */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white via-transparent to-transparent"></div>

			{/* Fading bottom edge */}
			<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white via-transparent to-transparent"></div>

			{/* bar */}
			<IconLabel 
					theme_font={{bold: "font-semibold"}} 
					icon_label={{
						icon: icon,
						id: id
					}}
				/>
		</div>
	</>
)

export default ColorBox;