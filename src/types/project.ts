export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  category: string | string[];
  featured: boolean;
  grid_config: string;
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    demo?: string;
  };
  theme_color: string;
  video_preview?: string;
}

export interface ProjectFilters {
  category?: string;
  search?: string;
  tags?: string[];
}