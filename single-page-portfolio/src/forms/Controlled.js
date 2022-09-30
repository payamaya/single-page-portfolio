//Kontrolled komponent /input med state
import { useState } from 'react'
const Controlled = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    if (email) {
      alert('Fyll i email')
    } else {
      setEmail('')
    }
  }
  return (
    <div style={{ marginLeft: '20rem', position: 'relative', bottom: '20rem' }}>
      <h3>Kontrollerad input</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <button type='submit'>press button</button>
      </form>
    </div>
  )
}
export default Controlled
