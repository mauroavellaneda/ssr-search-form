import { ReactElement } from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }): ReactElement => {
  console.log(query);
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={""}
        className="search-input"
        placeholder="search..."
      />

      <div className="flex gap-2">
        {<SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-50" />
        </button>
      </div>
    </Form>
  );
};
export default SearchForm;
