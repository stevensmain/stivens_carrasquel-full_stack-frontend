"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = (formData: FormData) => {
    const query = formData.get("search");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (query) {
      params.set("q", query.toString());
    } else {
      params.delete("q");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <form action={search} className="max-w-[664px] mx-auto relative">
      <Input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Busca un artista..."
        className="w-full p-2 pl-6 min-h-[62px] rounded-4xl bg-foreground text-base font-semibold text-primary-foreground focus-visible:ring-0"
        defaultValue={searchParams.get("q")?.toString()}
      />
      <Button
        type="submit"
        className="absolute right-2 top-3/6 -translate-y-3/6"
      >
        Buscar
      </Button>
    </form>
  );
};

export default SearchBar;
