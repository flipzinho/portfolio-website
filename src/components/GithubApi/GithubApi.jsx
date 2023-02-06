import './GithubApi.css'
export const GithubApi = ({projects}) => {
    return(
        projects.map(project => (
            <div key={project.id} className='projectContainer'>

             <p>
             <a href={project.html_url}> {project.name} </a>
            </p> 
              
            </div>
          ))
    )
}