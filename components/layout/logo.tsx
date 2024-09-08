import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
  return (
    <p className="text-black font-bold text-2xl">Satria
    <span className="text-blue-500">Tama</span>
    </p>
  )
}
