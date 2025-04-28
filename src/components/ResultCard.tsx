import { Article } from "@/utils/utils";
import { EyeIcon } from "lucide-react";

export const ResultCard = (props: { article: Article }) => {
  const { article } = props;
  console.log("result card");

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {new Date().toLocaleDateString("en-US")}
          {article.publishedAt}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">0</span>
        </div>
      </div>
    </li>
  );
};
