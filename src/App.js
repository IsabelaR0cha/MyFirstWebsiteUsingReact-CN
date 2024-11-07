import Banner from './components/Banner/Banner.js';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name:'Programming',
      primaryColor:'#57C278',
      secundaryColor:'#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secundaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secundaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const whenAddingNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenAddingCollaborator={collaborator => whenAddingNewCollaborator (collaborator)}/>
      
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secundaryColor={team.secundaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}

        <Footer />

    </div>
  );
}

export default App;
