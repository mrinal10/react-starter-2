import React from 'react'

function MemoComponent({name}) {
    console.log('Rendring Memo Component')
  return (
    <div>MemoComponent</div>
  )
}

export default React.memo(MemoComponent)