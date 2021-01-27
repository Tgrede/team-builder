import React from 'react'

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
                    <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    ></input>
               </label>
               <label>
                    Email:
                    <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    ></input>
               </label>
               <label>
                    Role
                    <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option value=''>---Select Role---</option> 
                        <option value='family'>Family</option> 
                        <option value='friend'>Friend</option> 
                        <option value='coworker'>CoWorker</option> 
                        <option value='acquaintance'>acquaintance</option> 
                    </select>
               </label>
               <button>Submit</button>    
          </form>
     )
}
