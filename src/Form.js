import React from 'react'
import styled from 'styled-components'

export default function Form(props) {
     const {values, updateForm, submitForm} = props

     const onChange = (e) => {
          const {name, value} = e.target
          updateForm(name,value)
     }

     const onSubmit = (e) => {
          e.preventDefault()
          submitForm()
     }


     return (
          <form onSubmit={onSubmit}>
               <label>
                    Name:
                    <StyledTextBox
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    ></StyledTextBox>
               </label>
               <label>
                    Email:
                    <StyledTextBox
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    ></StyledTextBox>
               </label>
               <label>
                    Role:
                    <StyledSelect
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option value=''>---Select Role---</option> 
                        <option value='family'>Family</option> 
                        <option value='friend'>Friend</option> 
                        <option value='coworker'>CoWorker</option> 
                        <option value='acquaintance'>acquaintance</option> 
                    </StyledSelect>
               </label>
               <button>Submit</button>    
          </form>
     )
}

const StyledTextBox = styled.input`
     padding:5px;
     margin:10px;
     border-radius:5px;
     border:1px solid #b49db1;
     &:focus{
          padding:6px;
          background-color:#e0e4e6;
          border-radius:10px;
     }
`

const StyledSelect = styled.select`
     padding:4px;
     margin:8px;
     border-radius:3px;
`
