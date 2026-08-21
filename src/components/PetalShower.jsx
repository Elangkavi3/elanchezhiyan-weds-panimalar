/**
 * PetalShower: Renders floating flower petals & sparkles across the screen
 */
export default function PetalShower({ petals }) {
  if (!petals || petals.length === 0) return null

  return (
    <>
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            fontSize: `${petal.size}px`,
          }}
          aria-hidden="true"
        >
          {petal.icon}
        </span>
      ))}
    </>
  )
}
