/**
 * Data structure returned by getProduct().
 */

type HTMLString = string;

export type Seo = any[];
export interface Medium {
  name: string;
  resource_type: string; // e.g., "video", "image", etc.
  resource_value: string; // e.g., video ID or URL
  thumbnail_url: string;
}
export interface Checklist {
  color: string;
  icon: string; // URL to the icon image
  id: string;
  list_page_visibility: boolean;
  text: string;
}
export interface CtaText {
  name: string;
  value: string;
}
export interface SectionValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string; // ISO date string
  id: string;
  start_at: string; // ISO date string
  template: string;
  text: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: HTMLString;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
