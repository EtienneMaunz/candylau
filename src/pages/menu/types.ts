interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  information?: string;
}
