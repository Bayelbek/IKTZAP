import requester from "../utils/requester.ts";

export async function fetchProducts(categoryId: number) {
  const items = await requester.get<{ list: any[] }>("/product", {
    category_id: categoryId,
  });

  return items.payload.list;
}
