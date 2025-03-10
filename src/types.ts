import { Metadata } from 'next';
import { ReactNode } from 'react';

export type ExtendedMetadata = Metadata & {
  image: any;
  links: { title: string; id: string }[];
  read: number;
  date: string;
};

export interface IItem {
  id: string;
  label: ReactNode;
  labels?: string[];
}



export type ImageField = {
  type?: string;
  file: Blob;
  url: string;
};


export type PersonalImage = { type: string; id: string; url: string };
