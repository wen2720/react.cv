import { ColorBox, EventBox, type WorkExp } from "@/components";
import { IoBagRemoveSharp } from "react-icons/io5";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}


const ProfileWorked: React.FC<PorfileWorked> = ({
	title = "Working Experiences",
	events = [
		{ date: "October-2022 ~ July-2024 in Sinolab ApS", title: "Full-stack developer", 
			projects:
			[
				{
					project: "Dangdi web app",
					frameworks: "Vue.js, Docker, Sails.js, MySql, Docker, CI/CD and AWS"
				},
				{
					project: "Dangdi mobile app",
					frameworks: "Flutter, FlutterFlow, Docker, CI/CD, and App store Connect, Google Play Console"
				},
			]
		},
		{ date: "July-2022 ~ June-2022 in make!mpact ApS", title: "Back-end development internship", 
			projects: 
			[
				{
					project: "Stock trading API",
					frameworks: "Node.js, Firebase and Google Cloud"
				},
			]
		},
		{ date: "Feburary-2018 ~ May-2019 in make!mpact ApS", title: "DTU Teaching Assistant", 
			projects: 
			[
				{
					project: "System Integaration",
					frameworks: "UML, Agile and Scurm "
				},
			]
		},
		{ date: "January-2016 ~ June-2016 in Merus Audio", title: "DTU Bachelor Thesis", 
			projects: 
			[
				{
					project: "FPGA Scan Test",
					frameworks: "VHDL and FPGA "
				},
			]
		},
		{ date: "January-2013 ~ June-2013 in Neusoft", title: "Android app testing internship", 
			projects: 
			[
				{
					project: "Online library",
					frameworks: "Java and Android"
				},
			]
		}
	]
}) =>{
	if (events === null) {
		return (
			<></>
		)
	} else {
		let show_events = events.length > 1
		let first_event = events[events.length-1]
		return (
			<>
				<ColorBox icon={IoBagRemoveSharp} id={title} />
	
				<div className="relative mt-4">
					{/* Vertical Line */}
					{
						show_events &&
						<div className="absolute top-0 -bottom-10 w-0.5 bg-[#888]"></div>
						
					}
					
					{
						show_events &&
						events.slice(0,-1).map((event, index) => (
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

export default ProfileWorked