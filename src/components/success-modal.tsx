"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { theme } from "@/lib/theme"
import { CheckIcon } from "lucide-react"

interface ClientSuccessModalProps {
  open: boolean
  onClose: () => void
}

export function SuccessModal({ open, onClose }: ClientSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="items-center space-y-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FCB76D" }}
          >
            <CheckIcon className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          <DialogTitle className="text-2xl font-semibold text-slate-800">Company Created Successfully</DialogTitle>

          <DialogDescription className="text-slate-600 text-base">
            Your project was submitted successfully and is under review by our team
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <Button
            onClick={onClose}
            className="px-8 py-2 rounded-sm"
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
            }}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
