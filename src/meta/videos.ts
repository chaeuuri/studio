export const PlatForm = {
  REELS: "reels",
  SHORTS: "shorts",
  YOUTUBE: "youtube",
} as const;
export type PlatForm = (typeof PlatForm)[keyof typeof PlatForm];

export interface IVideo {
  id: string;
  target: PlatForm;
  source?: string;
}

export const videoList: IVideo[] = [
  {
    id: "58cfSW4da_o",
    target: PlatForm.SHORTS,
  },
  {
    id: "vp7xJylV5js",
    target: PlatForm.SHORTS,
  },
  {
    id: "uCK5Odg74b8",
    target: PlatForm.SHORTS,
  },
  {
    id: "EgOjFQuQtTE",
    target: PlatForm.YOUTUBE,
  },
  {
    id: "xQrnKtdWdzo",
    target: PlatForm.YOUTUBE,
  },
  {
    id: "V11owX4GFy8",
    target: PlatForm.YOUTUBE,
  },
  {
    id: "KECcW5ykulE",
    target: PlatForm.SHORTS,
  },
  {
    id: "nV1fijqifeQ",
    target: PlatForm.SHORTS,
  },
  {
    id: "v1prsRpmA9M",
    target: PlatForm.SHORTS,
  },
  {
    id: "IF892wV8SDI",
    target: PlatForm.SHORTS,
  },
  {
    id: "EH8RAdW7o_U",
    target: PlatForm.SHORTS,
  },
  {
    id: "CtbVtpADNlQ",
    target: PlatForm.SHORTS,
  },
  {
    id: "DOszmeggV8J",
    target: PlatForm.REELS,
    source:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.71878-15/550357270_2367117287079342_3472238436911756980_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzcyMzU3NzkzNjM5ODM0Mzk0NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=qAleqlMSMA8Q7kNvwHgpKtj&_nc_oc=Admj0A6CShXvuykLr4MGOI8UA7USBifVIREEb6aThSpDyRq10KrkGrvsFZPH0TkomPo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_gid=3TgCHE7Yfbm6jPALSrN2yg&oh=00_AfauyvkrMPthyZswUyQ_tnQWS5IpQLNi_MHlTIRqXk2yZQ&oe=68D4DB0E",
  },
  {
    id: "DOx3WWAgYIO",
    target: PlatForm.REELS,
    source:
      "https://scontent-gmp1-1.cdninstagram.com/v/t51.71878-15/551029949_24561335490195779_555672248150961151_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzcyNTAwMTc5NDgyOTUxNzMyNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=nGe1qlaZ0y4Q7kNvwGVIXG-&_nc_oc=AdlkOr0lwR6_O37BEsAOe55SjC0t9RsqgteZAgdsq3_o39QgHYfmN452nITDFyE821g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_gid=Cg_mhgQ9pYtonLv58OrJaA&oh=00_Afaac6nsZZHAHI1gQOvGyBARsvTwftZjey2Cmx4K4ft37A&oe=68D4D406",
  },
];
