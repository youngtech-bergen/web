import { useState, FormEvent } from 'react'
import { NextPage } from 'next'

interface MailFormProps {
  redirect?: string
}

const MailForm: NextPage<MailFormProps> = props => {
  const [mail, setMail] = useState('')

  const subscribe = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: mail
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
        onChange={e => setMail(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <br />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default MailForm
