"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { theme } from "@/lib/theme"

interface WorkExperienceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (data: WorkExperienceData) => void
}

interface WorkExperienceData {
  title: string
  company: string
  city: string
  country: string
  startDate: string
  endDate: string
  description: string
}

export function WorkExperienceModal({ open, onOpenChange, onSave }: WorkExperienceModalProps) {
  
  const [formData, setFormData] = useState<WorkExperienceData>({
    title: "",
    company: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
  })

  const handleInputChange = (field: keyof WorkExperienceData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onSave?.(formData)
    onOpenChange(false)
    setFormData({
      title: "",
      company: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: "",
    })
  }

  const isFormValid = formData.title && formData.company && formData.city && formData.country

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-800">Add Work Experience</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-slate-700">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="h-12 rounded-sm border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-slate-700">
              Company
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="h-12 rounded-sm border-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-slate-700">
                City
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="h-12 rounded-sm border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="text-sm font-medium text-slate-700">
                Country
              </Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="h-12 rounded-sm border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-sm font-medium text-slate-700">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                className="h-12 rounded-sm border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-sm font-medium text-slate-700">
                End Date
              </Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
                className="h-12 rounded-sm border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-slate-700">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="What roles did you play"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="min-h-32 rounded-sm border-gray-300 resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleSave}
            disabled={!isFormValid}
            className="h-12 px-8 rounded-sm"
            style={{
              backgroundColor: isFormValid ? theme.colors.primary.blue : "#94a3b8",
              color: "white",
            }}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
