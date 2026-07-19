export interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  mainImage: any;
  author: {
    name: string;
  };
  categories: {
    title: string;
  }[];
}