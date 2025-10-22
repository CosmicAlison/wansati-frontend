'use server';

import { signIn } from '@/auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn(formData);
  } catch (error: any) {
    const msg = error?.message ?? 'Something went wrong.';
    if (msg.toLowerCase().includes('credentials')) return 'Invalid credentials.';
    return msg;
  }
}