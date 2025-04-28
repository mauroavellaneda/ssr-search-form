export function formatDate(date: string): string {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
  });
}

export interface Article {
  id: string;
  publishedAt: string;
  author: string;
  content: string;
  description: string;
  url: string;
  title: string;
  source: { name: string };
  urlToImage: string;
}
