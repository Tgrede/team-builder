import React from 'react'

import styled from 'styled-components'

export default function Member(props) {
     const {details} = props
     return (
          <StyledMemberCard>
               <StyledName>{details.name}</StyledName>
               <StyledInfo>
                    <p><b>Email:</b> {details.email}</p>
                    <p><b>Role:</b> {details.role}</p>
               </StyledInfo>
          </StyledMemberCard>
     )
}

const StyledMemberCard = styled.div`
     border:2px solid #b49db1;
     border-radius:10px;
     box-shadow:;
     margin: 20px 15px 1px;
     padding: 0px 20px 10px;
`
const StyledName = styled.h2`
     font-size:2rem;
`
const StyledInfo = styled.div`
     margin-left:30px;
     font-size:1.5rem;
`