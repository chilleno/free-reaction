import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image className="h-10 w-auto" width={600} height={600} src="/logo.png" alt="Logo" />
      <h4 className="text-xl font-bold">Reaction Free</h4>
    </div>

  )
}
