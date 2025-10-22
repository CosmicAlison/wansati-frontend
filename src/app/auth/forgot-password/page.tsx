'use client'

import { useState } from 'react'
import { MailIcon, CheckCircle2 } from 'lucide-react'
import button from '@/components/ui/Button'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }

    setError('')
    try {
      // TODO: call your backend endpoint to send reset link
      // await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {!submitted ? (
          <>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-gray-800">
              Forgot your password?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Enter your email and we’ll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative mt-1">
                  <MailIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Send Reset Link
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Remember your password?{' '}
              <Link
                href="/auth/login"
                className="font-medium text-black underline hover:text-gray-700"
              >
                Go back to login
              </Link>
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Check your email
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              If an account with <span className="font-medium text-gray-700">{email}</span> exists,
              a reset link has been sent.
            </p>
            <Link
              href="/auth/login"
              className="mt-4 inline-block text-sm font-medium text-black underline"
            >
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
