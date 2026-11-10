import { LayoutGrid, List, LucideIcon } from "lucide-react"

export type ViewType = "grid" | "list"

interface GridProps {
  name: ViewType
  index: number
  icon: LucideIcon
}

export const viewMode: GridProps[] = [
  {
    name: "grid",
    index: 0,
    icon: LayoutGrid
  },
  {
    name: "list",
    index: 1,
    icon: List
  }
]