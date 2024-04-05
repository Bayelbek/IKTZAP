import { getStorageFullUrl } from "../utils/config.ts";

export class Category {
  id?: number;
  title?: string;
  parent_id?: number;
  image_path?: string;

  constructor(json: ICategory) {
    this.id = json.id;
    this.title = json.title;
    this.parent_id = json.parent_id;
    this.image_path = json.image_path;
  }

  get image_url() {
    return getStorageFullUrl("images", this.image_path || "");
  }
}

export interface ICategory {
  id?: number;
  title?: string;
  parent_id?: number;
  image_path?: string;
}
