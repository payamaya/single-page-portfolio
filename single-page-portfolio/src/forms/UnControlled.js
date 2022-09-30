//Okontrollerad input med refs
// Data hanteras av DOM

import { useRef } from 'react'
const UnControlled = () => {
  const inputRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    // Kort sagt stoppa browsen från default beteende
    alert('Namn:' + inputRef.current.value)
  }
  return (
    <form
      onSubmit={submitHandler}
      style={{ marginfLeft: '20rem', position: 'relative', bottom: '20rem' }}
    >
      <label htmlFor='name'>Namn:</label>
      <input type='text' name='name' ref={inputRef} />
      <input type='submit' value='submit' />
      <button type='submit'></button>
    </form>
  )
}
export default UnControlled
