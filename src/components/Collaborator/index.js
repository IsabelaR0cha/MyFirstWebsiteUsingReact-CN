import './Collaborator.css'

const Collaborator = ({ name, image, job, colorBack}) => {
    return(
        <div className='collaborator'>
            <div className='collaborator-header' style={{backgroundColor: colorBack}}>
                <img src={image} alt={name}/>
            </div>
            <div className='collaborator-footer'>
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>

    )
}

export default Collaborator