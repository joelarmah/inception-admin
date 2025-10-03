"use client";

import { useEffect, useState } from "react";
import { AddReferenceModal } from "@/sections/references/add-reference-modal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Loader2,
  MoreHorizontal
} from "lucide-react";

import { fetchReference } from "@/services/referenceService";

export default function ReferencesPage() {

  const referenceData = [
    {
      title: "Tech Stacks",
      key: "tech-stacks",
      // path: `${baseUrl}/admin/reference/tech-stacks`,
      description: "View all available technologies and frameworks",
    },
    {
      title: "Project Categories",
      key: "project-categories",
      // path: `${baseUrl}/admin/reference/project-categories`,
      description: "Browse project categories and types",
    },
    {
      title: "Experience Levels",
      key: "experience-levels",
      // path: `${baseUrl}/admin/reference/experience-levels`,
      description: "See developer experience level definitions",
    },
    {
      title: "Project Scopes",
      key: "project-scopes",
      // path: `${baseUrl}/admin/reference/project-scopes`,
      description: "View project scope and duration options",
    },
    {
      title: "Budget Types",
      key: "budget-types",
      // path: `${baseUrl}/admin/reference/budget-types`,
      description: "Browse budget type options",
    },
    {
      title: "Project Types",
      key: "project-types",
      // path: `${baseUrl}/admin/reference/project-types`,
      description: "View available project types",
    },
  ];

  const [activeKey, setActiveKey] = useState(referenceData[0].key);
  const [dataMap, setDataMap] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (dataMap[activeKey]) return;
    fetchData();
  }, [activeKey]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const ep = referenceData.find((e) => e.key === activeKey)!;
      const json = await fetchReference(activeKey);
      // const json = await res.json();
      setDataMap((prev) => ({ ...prev, [activeKey]: json }));
    } catch (e) {
      console.error(e);
      setDataMap((prev) => ({ ...prev, [activeKey]: [] }));
    } finally {
      setLoading(false);
    }
  };

  const activeEndpoint = referenceData.find((e) => e.key === activeKey)!.path;

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex flex-wrap gap-2 border-b mb-4">
        <nav className="flex space-x-8">
          {referenceData.map((e) => (
            <button
              key={e.key}
              onClick={() => setActiveKey(e.key)}
              className={cn(
                "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                activeKey === e.key
                  ? "border-[#4318ff] text-[#4318ff]"
                  : "border-transparent text-[#a3aed0] hover:text-[#2b3674] hover:border-[#e0e5f2]"
              )}
            >
              {e.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-[#e0e5f2]">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {referenceData.find((e) => e.key === activeKey)?.title}
          </h2>
          <Button onClick={() => setModalOpen(true)}>Add New</Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : (
          <Table>
            <TableBody>
              <TableRow className="border-[#e0e5f2]">
                <TableCell className="text-[#2b3674] font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#a3aed0] rounded-full"></div>
                    {JSON.stringify(dataMap[activeKey], null, 2)}
                  </div>
                </TableCell>
                {/* <TableCell className="text-[#a3aed0]">Admin</TableCell> */}
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
        )}
      </div>

       {/* Modal */}
       <AddReferenceModal
       title={"title"}
        open={modalOpen}
        setOpen={setModalOpen}
        endpoint={activeEndpoint}
        activeKey={activeKey}
        onCreated={(item) =>
          setDataMap((prev) => ({
            ...prev,
            [activeKey]: [...(prev[activeKey] || []), item],
          }))
        }
      />

    </div>
  );
}
