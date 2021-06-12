import { useState, FormEvent } from 'react'
import { NextPage } from 'next'

interface MailFormProps {
  redirect?: string
}

const MailForm: NextPage<MailFormProps> = props => {
  const [email, setEmail] = useState('')

  const subscribe = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/newsletter/subscribe', {
      body: JSON.stringify({
        email
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
    <form onSubmit={subscribe}>
      <input
        id="email"
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Registrer deg</button>
    </form>
  )
}

export default MailForm
