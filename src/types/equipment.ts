export interface Equipment {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  parameters: {
    [key: string]: string | number;
  };
  description: string;
  price?: string;
  technicalAnalysis?: {
    title: string;
    features: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}