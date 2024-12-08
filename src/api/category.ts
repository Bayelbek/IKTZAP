import { Category, ICategory } from "../models/category.ts";
import requester from "../utils/requester.ts";

export async function fetchCategories(parentId?: number) {
  const items = await requester.get<{ list: ICategory[] }>("/category", {
    parent_id: parentId,
  });

  return items.payload.list.map((g) => new Category(g));
}
