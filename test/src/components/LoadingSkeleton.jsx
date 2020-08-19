import React from 'react'
import styled from 'styled-components'

const styledLoad = styled.div`
    width: 100vh;
    height: 100vh;
    display: inline-block;
    background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
`

const LoadingSkeleton = () => {
    return (
        <styledLoad>
            <h1>Loading</h1>
        </styledLoad>
    )
}

export default LoadingSkeleton
