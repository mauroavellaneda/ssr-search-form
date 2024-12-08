"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SearchFormReset = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };
  return (
    <>
      {query ? (
        <button type="reset" onClick={reset}>
          <Link href="/" className="search-btn text-white">
            <X className="size-5" />
          </Link>
        </button>
      ) : null}
    </>
  );
};
export default SearchFormReset;
