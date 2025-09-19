import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoreHorizontal } from "lucide-react"

export function CompanySettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#e0e5f2]">
      <div className="flex items-center justify-between p-6 border-b border-[#e0e5f2]">
        <h2 className="text-xl font-semibold text-[#2b3674]">Company Details</h2>
        <Button variant="ghost" size="sm" className="text-[#a3aed0]">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-[#2b3674]">Logo</Label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#a3aed0] rounded-lg flex items-center justify-center text-white font-semibold text-lg">
              AT
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company-name" className="text-sm font-medium text-[#2b3674]">
            Company Name
          </Label>
          <Input
            id="company-name"
            defaultValue="Ampersand Technologies"
            className="border-[#e0e5f2] focus:border-[#4318ff]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="text-sm font-medium text-[#2b3674]">
            Country
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇬🇭</span>
            <Input id="country" defaultValue="Ghana" className="border-[#e0e5f2] focus:border-[#4318ff]" />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium text-[#2b3674]">Address</Label>

          <div className="space-y-2">
            <Label htmlFor="address-1" className="text-xs text-[#a3aed0]">
              *Address line 1
            </Label>
            <Input id="address-1" className="border-[#e0e5f2] focus:border-[#4318ff]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address-2" className="text-xs text-[#a3aed0]">
              Address line 2
            </Label>
            <Input id="address-2" className="border-[#e0e5f2] focus:border-[#4318ff]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-xs text-[#a3aed0]">
                City*
              </Label>
              <Input id="city" className="border-[#e0e5f2] focus:border-[#4318ff]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="text-xs text-[#a3aed0]">
                State/Region
              </Label>
              <Input id="state" className="border-[#e0e5f2] focus:border-[#4318ff]" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip" className="text-xs text-[#a3aed0]">
              Zip Code / Ghana Post GPS
            </Label>
            <Input id="zip" className="border-[#e0e5f2] focus:border-[#4318ff]" />
          </div>
        </div>
      </div>
    </div>
  )
}
