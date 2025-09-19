"use client";

import {
  Select as BaseSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"; // adjust import path

type Option = {
  label: string;
  value: string;
};

type Group = {
  label: string;
  options: Option[];
};

interface SimpleSelectProps {
  data: Option[] | Group[];
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function SimpleSelect({
  data,
  placeholder,
  value,
  onValueChange,
  className,
}: SimpleSelectProps) {
  const isGrouped = Array.isArray(data) && "options" in (data[0] as any);

  return (
    <BaseSelect value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {isGrouped
          ? (data as Group[]).map((group, i) => (
              <SelectGroup key={i}>
                <SelectLabel>{group.label}</SelectLabel>
                {group.options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
          : (data as Option[]).map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
      </SelectContent>
    </BaseSelect>
  );
}