import { z } from "zod";
import { defineTool } from "../utils/func-tool.js";
import { searchPythonBook } from "../lib/qdrant.js";

async function search({ query, limit = 5 }) {
  return await searchPythonBook(query, limit);
}

export const pythonBookTool = defineTool({
  name: "search_python_book",
  description:
    "在 Python 教科書中搜尋相關內容，回答 Python 語法、概念、API 用法問題時可使用",
  fn: search,
  parameters: z.object({
    query: z.string().describe("要搜尋的關鍵字或描述"),
    limit: z.number().default(5).describe("回傳筆數上限，預設 5"),
  }),
});
