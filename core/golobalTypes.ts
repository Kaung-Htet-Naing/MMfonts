export interface SelectOptionType {
  label: string;
  value: string;
}

export interface FontType {
  nameEn: string;
  name: string;
  fileName: string;
  fontSupportType: string;
  fontStyle: string;
  createdBy: string;
  enSupport?: string;
  acceptToDownload?: string;
  downloadLink?: string;
  creatorLink?: string;
}

export interface PremiumFontType extends FontType {
  fbLink: string;
  images: string;
  price: string;
}

export interface FontJsonType {
  [fontName: string]: FontType;
}
