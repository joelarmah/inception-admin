"use client";

import { useEffect, useState } from "react";
import useApi from "@/hooks/use-api";
import { Loader2 } from "lucide-react";
import { Company } from "@/types";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CreateCompanyModal } from "@/sections/companies/create-company-modal";
import { fetchCompanies } from "@/services/companyService"

export default function CompaniesPage() {

  const api = useApi();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[] | null>(null);

  useEffect(() => {
   loadData();
  }, []);

  const loadData = async () => {
      try {
        const companyData = await fetchCompanies();
        setCompanies(companyData);
      } catch (error) {
        setCompanies([]);
        console.log("No existing company profile", error);
      } finally {
        setLoading(false);
      };
  }
   
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* List content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 border-[#e0e5f2]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2b3674]">
                Companies
              </h3>
              <Button onClick={() => setOpen(true)}>Create Company</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-[#e0e5f2]">
                  <TableHead className="text-[#a3aed0] font-medium">
                    <div className="flex items-center gap-2">Company</div>
                  </TableHead>

                  <TableHead className="text-[#a3aed0] font-medium">
                    <div className="flex items-center gap-2">Business Type</div>
                  </TableHead>

                  <TableHead className="text-[#a3aed0] font-medium">
                    <div className="flex items-center gap-2">Company Size</div>
                  </TableHead>

                  <TableHead className="text-[#a3aed0] font-medium"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  
                }
                <TableRow className="border-[#e0e5f2]">
                  <TableCell className="text-[#2b3674] font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#a3aed0] rounded-full"></div>
                      Ampersand Technologies
                    </div>
                  </TableCell>

                  <TableCell className="text-[#a3aed0]">Ecommerce</TableCell>

                  <TableCell className="text-[#a3aed0]">1-10</TableCell>

                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#a3aed0]"
                    ></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>

      {/* Create Content Content */}
      <CreateCompanyModal open={open} setOpen={setOpen} />
    </div>
  );
}
