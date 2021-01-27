import React, {useState} from 'react'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
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
    <div className="App">
      Hello World
    <Form values={values} updateForm={updateForm} submitForm={submitForm} />
    </div>
  );
}

export default App;
