cd components && 
mkdir $1 &&  
cd $1 && 
echo "import React from 'react'

const $1Component = () => {
  return (
    <div>$1</div>
  )
}
export default $1Component
" > $1.component.tsx && 
echo "import styled from 'styled-components'

export const $1Container = styled.div`
    width: 100%;
    height: 100%;
`" > $1.styled.ts