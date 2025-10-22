'use client'

import { useState } from 'react'
import { LockIcon, CheckCircle2 } from 'lucide-react'
import  Button  from '@/components/ui/Button'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    setSuccess(true)
    // TODO: call backend reset endpoint here with token from URL
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {!success ? (
          <>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-gray-800">
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Enter your new password below. Make sure it’s secure.
            </p>

            <form onSubmit={handleReset} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative mt-1">
                  <LockIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-black"
                    placeholder="Enter new password"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <LockIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-black"
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Reset Password
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Password Reset Successful
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              You can now log in with your new password.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-block text-sm font-medium text-black underline"
            >
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
