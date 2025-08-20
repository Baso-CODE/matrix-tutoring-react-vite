import {
  BookOpenText,
  Users,
  GraduationCap,
  ClipboardCheck,
  Edit3,
  Globe,
  CheckCircle,
  FileText,
  Coffee,
} from "lucide-react"; // Import the necessary icons

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/tentang-kami",
  },
  {
    name: "Program",
    subMenu: [
      {
        name: "Les Privat TK",
        desc: "Les privat untuk TK",
        icon: BookOpenText,
        link: "/les-privat-tk",
      },
      {
        name: "Les Privat SD",
        desc: "Les privat untuk SD",
        icon: Users, // Icon untuk SD
        link: "/les-privat-sd",
      },
      {
        name: "Les Privat SMP",
        desc: "Les privat untuk SMP",
        icon: GraduationCap, // Icon untuk SMP
        link: "/les-privat-smp",
      },
      {
        name: "Les Privat SMA",
        desc: "Les privat untuk SMA",
        icon: ClipboardCheck, // Icon untuk SMA
        link: "/les-privat-sma",
      },
      {
        name: "Les Privat TKA",
        desc: "Les privat untuk TKA",
        icon: Edit3, // Icon untuk TKA
        link: "/les-privat-tka-tes-kemampuan-akademik",
      },
      {
        name: "Les Privat Mahasiswa",
        desc: "Les privat untuk Mahasiswa",
        icon: Globe, // Icon untuk Mahasiswa
        link: "/les-privat-mahasiswa",
      },
      {
        name: "Les Privat Bahasa Asing",
        desc: "Les untuk Bahasa Asing",
        icon: CheckCircle, // Icon untuk Bahasa Asing
        link: "/les-privat-bahasa-asing",
      },
      {
        name: "Les Privat SIMAK UI",
        desc: "Les Privat untuk SIMAK UI",
        icon: FileText, // Icon untuk SIMAK UI
        link: "/les-privat-simak-ui",
      },
      {
        name: "Les Privat UTBK",
        desc: "Les Privat untuk UTBK",
        icon: Coffee, // Icon untuk SBMPTN
        link: "/les-privat-sbmptn",
      },
    ],
    gridCols: 2,
  },

  {
    name: "Testimoni",
    link: "/testimoni",
  },
  {
    name: "Promo",
    link: "/promo",
  },
  {
    name: "Term",
    link: "/term",
  },
  {
    name: "ContactUs",
    link: "/contact-us",
  },
];
