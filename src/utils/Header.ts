export interface ILinks {
  label: string;
  path: string;
}

export interface ISocialLinks {
  label: string;
  url: string;
  icon: React.ReactNode;
}

export interface MenuProps {
  links: ILinks[];
  socialLinks: ISocialLinks[];
}
