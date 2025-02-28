import clsx from "clsx"
import React from "react"
import LinkText from "./link_text"

interface WorkProject {
  project?: {
    id: string
    link?: string
  }
  frameworks?: string
  courses?: string
  GPA?: string
  model?:string
  link?:string
  thesis?: {
    id: string
    link?: string
  }
}
export interface WorkExp {
  date: string
  title: string
  projects: WorkProject[]
  start: boolean 
}

export const EventBox: React.FC<WorkExp> = ({
  date,
  title,
  projects,
  start
}) => (
  <>
    {/* Time Point */}
    <div className={clsx("-left-[7px] w-4 h-4 rounded-full absolute", start ? "top-10" : "top-0")}
      style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderColor: 'rgba(0, 0, 0, 1)', 
        borderWidth: '3px', borderStyle: 'solid', 
      }}
    ></div>
    
      
    {/* Event Content */}
    <div className="ml-6 mt-2 p-4 rounded-lg shadow-md text-black"
      style={{ backgroundColor: 'rgba(243, 244, 246, 1)' }}
    >
      <span className="text-sm">{date}</span>
      <h3 className="text-lg font-bold">{title}</h3>        
      {projects?.map((e) =>(
        <React.Fragment key={date+title+e.project?.id+e.thesis?.id}>
          { 
            Object.entries(e).map(([a,b]) =>(
              <p key={a}>
                {a}:&nbsp;
                {
                  typeof(b) !== "object" ?
                  b
                  :
                  <LinkText id={b.id} link={b.link}/>
                } 
              </p>
            )) 
          }
        </React.Fragment>
      ))}
    </div>
  </>
)