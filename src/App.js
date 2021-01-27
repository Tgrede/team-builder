import React, {useState} from 'react'
import Form from './Form'
import Member from './Member'
import styled from 'styled-components'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [teamList, setTeamList] = useState([])
  const [values, setValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setValues({
      ...values,
      [inputName]:inputValue
    })
  }
  
  const submitForm = () => {
    const newMember = {
      name:values.name.trim(),
      email:values.email.trim(),
      role:values.role
    }
  
    if(!newMember.name || !newMember.email || !newMember.role){
      return
    }
  
    setTeamList([newMember, ...teamList])
    setValues(initialFormValues)
  }

  return (
    <StyledApp>
      <h1>Members Form</h1>
      <Form values={values} updateForm={updateForm} submitForm={submitForm} />
      {teamList.map(member => {
        return <Member details={member} />
      })}
      <div> <br/></div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #2f376a;
  color: #b49db1;
`