


export interface Blog {
  id: number;
  thumbnail?: string;
  title: string;
  description: string;
  content: string;
  created_time: string;
}

export type NewBlogPayLoad = Omit<Blog, 'id' | 'thumbnail' | 'created_time'>;