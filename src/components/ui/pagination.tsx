"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      if (currentPage > 3) pages.push(1, "...");
      const middlePages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ].filter((p) => p > 1 && p < totalPages);
      pages.push(...middlePages);
      if (currentPage < totalPages - 2) pages.push("...", totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-start space-x-2">
      <Button
        variant="ghost"
        size="icon"
        disabled={currentPage === 1}
        className="hover:bg-transparent hover:text-foreground/80"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </Button>

      {getPages().map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={index}
            variant="ghost"
            disabled={page === currentPage}
            className={cn(
              "w-8 h-8 hover:bg-transparent hover:text-foreground/80",
              page === currentPage ? "text-primary" : "text-foreground"
            )}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={index} className="text-foreground px-2">
            {page}
          </span>
        )
      )}

      <Button
        variant="ghost"
        size="icon"
        disabled={currentPage === totalPages}
        className="hover:bg-transparent hover:text-foreground/80"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </Button>
    </div>
  );
};

export default Pagination;
