import { ColorBox, EventBox, type WorkExp } from "@/components";
import { IoBagRemoveSharp } from "react-icons/io5";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}


const ProfileWorked: React.FC<PorfileWorked> = ({
	title = "Working Experiences",
	events = [
		{ date: "May-2025 ~ now at CostBits ApS", title: "Back-end Developer", 
			projects:
			[
				{
					project: { id: "Dangdi Web App", link: "https://costbits.com/" },
					frameworks: "Git, .NET, C#, PostgreSql, CI/CD, Docker, React DigitalOcean",
					tasks: [
						"⊠ Design & imeplement Backend CRUD, Unit testing",
						"⊠ Provision, backing-up and partitioning Database",
						"⊠ Deploy production level Front and Backend application deployment",
						"⊠ Automate version patching, container shipping for all staged software",
						"⊠ Design & imeplement Financial service"
					]
				},
			]
		},
		{ date: "October-2022 ~ July-2024 at Sinolab ApS", title: "Full-stack developer", 
			projects:
			[
				{
					project: { id: "Dangdi Web App", link: "https://dangdi.life/" },
					frameworks: "Vue.js, Sails.js, MySql, Docker, CI/CD and AWS"
				},
				{
					project:  { id: "Dangdi Mobile App" },
					frameworks: "Flutter, FlutterFlow, Docker, CI/CD, App store Connect and Google Play Console",
					tasks: [
						"⊠ Design & imeplement Backend CRUD, Unit testing",
						"⊠ Design & imeplement Frontend UI and UX",
						"⊠ Apply 3rd Party services, e.g., OAuth Protocol Map Services",
						"⊠ Container shipping for all staged software",
						"⊠ Design & imeplement CMS and User service"
					]
				},
			]
		},
		{ date: "July-2022 ~ June-2022 at make!mpact ApS", title: "Back-end development internship", 
			projects: 
			[
				{
					project: { id: "Stock trading API" },
					frameworks: "Node.js, Firebase and Google Cloud",
					tasks: [
						"⊠ Design & imeplement Backend CRUD, Unit testing"
					]
				},
			]
		},
		{ date: "Feburary-2018 ~ May-2019 at DTU", title: "DTU Teaching Assistant", 
			projects: 
			[
				{
					project: { id: "System Integaration" },
					frameworks: "UML, Agile and Scurm ",
					tasks: [
						"⊠ Supervise students",
						"⊠ Review assignments"
					]
				},
			]
		},
		// { date: "January-2016 ~ June-2016 at Merus Audio", title: "DTU Bachelor Thesis", 
		// 	projects: 
		// 	[
		// 		{
		// 			thesis: { id: "FPGA Scan Test" },
		// 			frameworks: "VHDL and FPGA "
		// 		},
		// 	]
		// },
		// { date: "January-2013 ~ June-2013 in Neusoft", title: "Android app testing internship", 
		// 	projects: 
		// 	[
		// 		{
		// 			project: { id: "Tencent Library" },
		// 			frameworks: "Java and Android"
		// 		},
		// 	]
		// }
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
				<ColorBox icon={IoBagRemoveSharp} id={title} />
	
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

export default ProfileWorked