import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ChevronDown } from "lucide-react"

const billingHistory = [
  {
    id: 1,
    name: "White Zinc - Milestone 1",
    amount: "€20,000.00",
    date: "15 Aug, 2023",
    status: "paid",
  },
  {
    id: 2,
    name: "Venus - Milestone 4",
    amount: "$120,000.00",
    date: "12 Jul, 2023",
    status: "pending",
  },
  {
    id: 3,
    name: "Daffodil - Milestone 1",
    amount: "$400,000.00",
    date: "11 Jul, 2023",
    status: "pending",
  },
  {
    id: 4,
    name: "Jimma - Milestone 1",
    amount: "$2,000,000.00",
    date: "9 Jun, 2023",
    status: "pending",
  },
  {
    id: 5,
    name: "Inception - Milestone 2",
    amount: "€45,290.00",
    date: "3 Jun, 2023",
    status: "pending",
  },
]

export function BillingSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#e0e5f2]">
      <div className="flex items-center justify-between p-6 border-b border-[#e0e5f2]">
        <h2 className="text-xl font-semibold text-[#2b3674]">Billing History</h2>
        <Button variant="ghost" size="sm" className="text-[#a3aed0]">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e0e5f2]">
              <th className="text-left p-4 text-sm font-medium text-[#a3aed0]">
                <div className="flex items-center gap-2">
                  Name
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-[#a3aed0]">
                <div className="flex items-center gap-2">
                  Amount
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-[#a3aed0]">
                <div className="flex items-center gap-2">
                  Title
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-[#a3aed0]">
                <div className="flex items-center gap-2">
                  Status
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item) => (
              <tr key={item.id} className="border-b border-[#e0e5f2] last:border-b-0">
                <td className="p-4 text-sm font-medium text-[#2b3674]">{item.name}</td>
                <td className="p-4 text-sm text-[#2b3674]">{item.amount}</td>
                <td className="p-4 text-sm text-[#2b3674]">{item.date}</td>
                <td className="p-4">
                  <Badge
                    className={
                      item.status === "paid"
                        ? "bg-[#4318ff] text-white hover:bg-[#4318ff]/90"
                        : "bg-[#e535ab] text-white hover:bg-[#e535ab]/90"
                    }
                  >
                    {item.status === "paid" ? "Paid" : "Pending"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
