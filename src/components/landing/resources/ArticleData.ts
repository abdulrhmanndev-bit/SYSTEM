export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
};
export const FILTERS = [
  "all",
  "operations",
  "fleet",
  "product",
  "guides",
  "industry",
] as const;
export type Filter = (typeof FILTERS)[number];
export type ArticleCategory = Exclude<Filter, "all">;
export const articles: Article[] = [
  {
    id: 1,
    slug: "fleet-utilization-revenue",
    title: "Five Signals Your Fleet Utilization Is Leaking Revenue",
    description:
      "The patterns that quietly erode margin — and how to spot them before they compound.",
    date: "Sep 2026",
    readTime: "5 min read",
    category: "fleet",
  },
  {
    id: 2,
    slug: "fleet-efficiency-strategies",
    title: "Maximizing Fleet Efficiency: Key Strategies to Implement",
    description:
      "Proven techniques to enhance your fleet performance and increase profitability.",
    date: "Oct 2026",
    readTime: "6 min read",
    category: "fleet",
  },
  {
    id: 3,
    slug: "hidden-costs-fleet-management",
    title: "The Hidden Costs of Poor Fleet Management",
    description:
      "Identifying the financial impacts of ineffective fleet oversight and how to mitigate them.",
    date: "Nov 2026",
    readTime: "7 min read",
    category: "operations",
  },
  {
    id: 4,
    slug: "fleet-management-technologies",
    title: "Innovative Technologies Transforming Fleet Management",
    description:
      "Exploring cutting-edge solutions that boost operational effectiveness.",
    date: "Dec 2026",
    readTime: "8 min read",
    category: "product",
  },
  {
    id: 5,
    slug: "reducing-fuel-costs",
    title: "Reducing Fuel Costs: Effective Tactics for Fleet Operators",
    description:
      "Strategies to minimize fuel consumption while maintaining productivity.",
    date: "Jan 2027",
    readTime: "5 min read",
    category: "guides",
  },
  {
    id: 6,
    slug: "fleet-management-costs",
    title: "The Hidden Costs of Poor Fleet Management",
    description:
      "Identifying the financial impacts of ineffective fleet oversight and how to mitigate them.",
    date: "Nov 2026",
    readTime: "7 min read",
    category: "industry",
  },
  {
    id: 7,
    slug: "data-analytics-fleet",
    title: "The Role of Data Analytics in Fleet Optimization",
    description:
      "Leveraging data to make informed decisions that drive efficiency and savings.",
    date: "Feb 2027",
    readTime: "6 min read",
    category: "fleet",
  },
  {
    id: 8,
    slug: "fleet-maintenance-practices",
    title: "Best Practices for Fleet Maintenance",
    description:
      "Essential maintenance strategies to ensure vehicle longevity and reliability.",
    date: "Mar 2027",
    readTime: "5 min read",
    category: "guides",
  },
  {
    id: 9,
    slug: "fleet-sustainability",
    title: "Emerging Trends in Fleet Sustainability",
    description:
      "Sustainable practices that reduce environmental impact and enhance corporate responsibility.",
    date: "Apr 2027",
    readTime: "7 min read",
    category: "industry",
  },
  {
    id: 10,
    slug: "connected-fleet-operations",
    title: "Building Connected Fleet Operations",
    description:
      "How connected workflows help transportation teams operate with greater visibility.",
    date: "May 2027",
    readTime: "6 min read",
    category: "operations",
  },
  {
    id: 11,
    slug: "driver-performance",
    title: "Improving Driver Performance with Better Data",
    description:
      "Use operational data to understand performance and improve daily fleet execution.",
    date: "Jun 2027",
    readTime: "5 min read",
    category: "operations",
  },
  {
    id: 12,
    slug: "transportation-automation",
    title: "Where Automation Fits in Transportation Operations",
    description:
      "A practical look at automating repetitive transportation workflows.",
    date: "Jul 2027",
    readTime: "7 min read",
    category: "product",
  },
  {
    id: 13,
    slug: "fleet-planning",
    title: "A Practical Guide to Better Fleet Planning",
    description:
      "Build more predictable fleet plans using connected operational information.",
    date: "Aug 2027",
    readTime: "6 min read",
    category: "guides",
  },
  {
    id: 14,
    slug: "dispatch-visibility",
    title: "Why Dispatch Teams Need Real-Time Visibility",
    description:
      "Understand how real-time information can simplify dispatch decisions.",
    date: "Sep 2027",
    readTime: "5 min read",
    category: "operations",
  },
  {
    id: 15,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 16,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 17,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 18,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 19,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 20,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 21,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 22,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
];
