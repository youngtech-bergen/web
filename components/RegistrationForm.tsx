import css from '../styles/main.scss'
import { NextPage } from 'next'
import { FormEvent, useState } from 'react'

interface RegistrationFormProps {
  id: string
  redirect: string
}

const RegistrationForm: NextPage<RegistrationFormProps> = props => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')

  const register = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch(`/api/events/${props.id}/register`, {
      body: JSON.stringify({
        name: name,
        email: email,
        company: company
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    if (res.ok) {
      window.location.pathname = props.redirect
    }
  }

  return (
    <div className={css.formCard}>
      <h2>Påmelding</h2>
      <form onSubmit={register}>
        <label htmlFor="name">Navn:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label htmlFor="company">Bedrift:</label>
        <input
          id="company"
          type="text"
          name="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <br />
        <label htmlFor="email">Epost:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Registrer deg</button>
      </form>
    </div>
  )
}

export default RegistrationForm
