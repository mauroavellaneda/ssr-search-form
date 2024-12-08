import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  const query = resolvedParams?.query;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="pink_container">
        <h1 className="heading">Home</h1>
        <p className="sub-heading !max-w-3xl">Welcome to the home page</p>
        <SearchForm query={query} />
      </section>
    </div>
  );
}
