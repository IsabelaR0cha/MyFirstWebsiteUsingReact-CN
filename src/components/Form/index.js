import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import DropDownBox from '../DropDownBox'
import ButtonComponent from '../Button'


const Form = (props) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSaving = (event) => {
        event.preventDefault()
        props.whenAddingCollaborator({
            name, 
            job, 
            image, 
            team
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return(
        <section className='form-container'>
            <form onSubmit={whenSaving}>
                <h2> Preencha os dados para criar o card do colaborador </h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    inputvalue={name} 
                    whenAltered={inputvalue => setName(inputvalue)} 
                    />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    inputvalue={job}
                    whenAltered={inputvalue => setJob(inputvalue)} 
                    />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    inputvalue={image}
                    whenAltered={inputvalue => setImage(inputvalue)}
                    />
                <DropDownBox 
                    mandatory={true} 
                    label="Team" 
                    items={props.teams}
                    inputvalue={team}
                    whenAltered={inputvalue => setTeam(inputvalue)}
                    />
                <ButtonComponent>
                    Create Card
                </ButtonComponent> 
            </form>
        </section>
    )

}

export default Form