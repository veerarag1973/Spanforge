export const trustStats = [
  { label: 'Release cadence', value: 'Bi-weekly' },
  { label: 'Support window', value: 'N-1 minor' },
  { label: 'Issue triage target', value: '<72h' },
  { label: 'Docs freshness target', value: 'Monthly' },
]

export const caseStudies = [
  {
    title: 'Platform Team: Incident Triage Acceleration',
    metric: '62% faster triage',
    summary: 'A multi-agent platform shifted from log-only debugging to trace-first workflows and reduced median incident triage time from 48 to 18 minutes.',
  },
  {
    title: 'Applied AI Team: Safer Model Upgrades',
    metric: '31 regressions blocked pre-prod',
    summary: 'By adding llm-diff threshold gates in CI, the team prevented low-quality prompt/model changes from reaching production in a single quarter.',
  },
  {
    title: 'FinOps + ML: Cost Hotspot Detection',
    metric: '24% lower token spend',
    summary: 'Event-level cost telemetry surfaced expensive chains and enabled focused optimization on the top 3 latency/cost outliers.',
  },
]
