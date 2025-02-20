import { ColorBox, EventBox, type WorkExp } from "@/components";
import { FaSchool } from "react-icons/fa";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}


const ProfileEducation: React.FC<PorfileWorked> = ({
	title = "Educations",
	events = [
		{ 
			date: "September-2024 ~ January in DTU", title: "Single Course", 
			projects:
			[
				{
					project: "",
					courses: "Deep learning and MLOps",
					GPA: "10",
					models: "FFNN, CNN, GNN, MPNN and PaiNN",
					frameworks: "Python, Pytorch, HPC and Google Cloud"
				},
			]
		},
		{ 
			date: "January-2022 in DTU", title: "MSc in Computer Science Engineering", 
			projects:
			[
				{
					project: "",
					frameworks: "",
					GPA: "7.12"
				},
			]
		},
		{ 
			date: "June-2021 in DTU", title: "Master thesis", 
			projects: 
			[
				{
					project: "Formal modeling and analysis of an eHealth Protocol",
					frameworks: "(\u03B1,\u03B2)-privacy, context-free grammar and first-order logic"
				},	
			]
		},
		{ 
			date: "June-2016 in DTU", title: "Bachelor Eletrical Engineering ", 
			projects:
			[
				{
					project: "",
					frameworks: "",
					GPA: "7.82" 
				},
			]
		},
	]
}) =>{
	if (events === null) {
		return (
			<></>
		)
	} else {
		const show_events = events.length > 1
		const first_event = events[events.length-1]
		return (
			<>
				<ColorBox icon={FaSchool} id={title} />
	
				<div className="relative mt-4">
					{/* Vertical Line */}
					{
						show_events &&
						<div className="absolute top-0 -bottom-10 w-0.5 bg-[#888]"></div>
						
					}
					
					{
						show_events &&
						events.slice(0,-1).map((event) => (
							<div key={event.date} className="relative flex items-start gap-6">
								<EventBox date={event.date} title={event.title} start={false} projects={event.projects} />
							</div>
						))
					}
				</div>	
					
				<div key={events[events.length-1].date} className="relative flex items-start gap-6 mb-8">
					<EventBox date={first_event.date} title={first_event.title} projects={first_event.projects} start={true} />
				</div>
			</>
		)
	}

}

export default ProfileEducation