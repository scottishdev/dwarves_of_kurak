import React from 'react';
import Job from './Job.js';

const JobList = (props) =>{

  if( !props.jobs){
    return ("No work for the bums.....")
  }

  const allJobs = props.jobs.map((job, index) => {
    return(

        <div key={index}>
          <Job  job={job} />
        </div>

    )
  })

return (
  <ul>
    {allJobs}
  </ul>

  )
}

export default JobList;
