import { Star, StarHalf } from 'lucide-react'

export default function StarRating({ value = 5, className = '' }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5

  return (
    <div className={`flex items-center gap-0.5 text-gold ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-current" />}
    </div>
  )
}
