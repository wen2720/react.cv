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
    link: string
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
    <div className={clsx("-left-[7px] w-4 h-4 bg-white rounded-full border-4 border-black absolute", start ? "top-10" : "top-0")}></div>
    
      
    {/* Event Content */}
    <div className="ml-6 mt-2 p-4 rounded-lg shadow-md text-black"
      style={{ backgroundColor: '#f3f4f6'}}
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