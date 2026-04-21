const stats = [
  {
    num: '$30M+',
    label: 'In ad spend managed across growth-stage brands',
  },
  {
    num: '$20M+',
    label: 'In attributable revenue driven across client engagements',
  },
  {
    num: '45+',
    label: 'Companies taken from stalled growth to scalable pipeline',
  },
]

export default function ProofBar() {
  return (
    <div
      className="grid grid-cols-3 border-b-chalk"
      style={{ gap: '1px', background: 'var(--border)' }}
    >
      {stats.map((stat) => (
        <div key={stat.num} className="bg-white p-8">
          <div className="font-display text-[2.5rem] leading-none mb-2">{stat.num}</div>
          <div className="text-[13px] text-[var(--text-secondary)] leading-[1.45] max-w-[180px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
