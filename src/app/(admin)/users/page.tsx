import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal, ChevronDown, User } from "lucide-react";
import { members } from "@/data/members-data";
import Image from "next/image";
import { PiDotsThree, PiDotsThreeBold } from "react-icons/pi";
// import { Avatar } from "@/components/ui/avatar"
// import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 border-[#e0e5f2]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2b3674]">Users</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-[#e0e5f2]">
                <TableHead className="text-[#a3aed0] font-medium">
                  <div className="flex items-center gap-2">
                    Email <ChevronDown className="w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead className="text-[#a3aed0] font-medium">
                  <div className="flex items-center gap-2">
                    Role <ChevronDown className="w-3 h-3" />
                  </div>
                </TableHead>

                <TableHead className="text-[#a3aed0] font-medium"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-[#e0e5f2]">
                <TableCell className="text-[#2b3674] font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#a3aed0] rounded-full"></div>
                    hamra64@gmail.com
                  </div>
                </TableCell>
                <TableCell className="text-[#a3aed0]">Admin</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#a3aed0]"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
