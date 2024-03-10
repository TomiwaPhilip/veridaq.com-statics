import { ReactNode } from 'react';

export interface Item {
  paragraph: ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export const items: Item[] = [
  {
    paragraph: <p>This is paragraph 1.</p>,
    imgSrc: 'image1.jpg',
    imgAlt: 'Image 1',
  },
  {
    paragraph: (
      <>
        <p>This is paragraph 2.</p>
        <p>Another paragraph.</p>
      </>
    ),
    imgSrc: 'image2.jpg',
    imgAlt: 'Image 2',
  },
  // Add more items as needed
];
