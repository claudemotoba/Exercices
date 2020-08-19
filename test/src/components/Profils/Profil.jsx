import React from 'react'
import styled from 'styled-components'

const StyledDiv= styled.div`

`

const Profil = ({profile}) => {
    return (
        <StyledDiv>
            <p>{profile.title}</p>
        </StyledDiv>
    )
}

export default Profil
