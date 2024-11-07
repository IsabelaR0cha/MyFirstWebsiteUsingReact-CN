import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    return(
        <section className='team' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator colorBack={props.primaryColor} key={collaborator.name} name={collaborator.name} job={collaborator.job} image={collaborator.image} />)}
            </div>
        </section>
    )
}

export default Team