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
    <div className="grid grid-cols-1 sm:grid-cols-3 grid-sep border-b-chalk">
      {stats.map((stat, i) => (
        <div key={stat.num} className={`bg-white p-6 sm:p-8 ${i < stats.length - 1 ? 'border-b-chalk sm:border-b-0' : ''}`}>
          <div className="font-display text-[2rem] sm:text-[2.5rem] leading-none mb-2">{stat.num}</div>
          <div className="text-[13px] text-[var(--text-secondary)] leading-[1.45] sm:max-w-[180px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
