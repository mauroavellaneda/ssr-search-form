import React from "react";
import Navbar from "../../components/Navbar";
import "../globals.css";
import SearchForm from "../../components/SearchForm";
import { ResultCard } from "@/components/ResultCard";
import { Article } from "@/utils/utils";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || "";

  let articles: Article[] = [];
  if (query) {
    try {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      const fromDate = oneMonthAgo.toISOString().split("T")[0];
      console.log("get articles", fromDate);

      const newApiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&sortBy=popularity&from=${fromDate}&apiKey=${
          process.env.NEXT_PUBLIC_NEWSAPI_KEY
        }`,
        { cache: "force-cache" }
      );
      if (!newApiResponse.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await newApiResponse.json();
      articles = data.articles || [];
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }
  console.log(query, "s");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="blank_container">
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p>
          {query
            ? `You searched for "${query}".`
            : "You have not searched yet."}
        </p>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ul className="mt-7 card_grid" key={article.url}>
              {article.title}
              <ResultCard article={article} />
            </ul>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </section>
    </div>
  );
}
