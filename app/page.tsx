// import Image from 'next/image'
import { ProfileForm } from './landing'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black text-white flex-col items-center justify-between p-24">
      <ProfileForm/>
    </main>
  )
}
