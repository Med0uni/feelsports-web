export interface Team {
  id: number;
  name: string;
  logo: string;
  slug: string;
  city: string;
  founded: string;
  league?: string; // Optional field for the league
}

const division1Teams = [
  {
    id: 1,
    name: "الترجي الرياضي",
    logo: "/logos/est.png",
    slug: "esperance",
    city: "تونس",
    founded: "1919",
    league: "division1"
  },
  {
    id: 2,
    name: "النادي الإفريقي",
    logo: "/logos/ca.png",
    slug: "club-africain",
    city: "تونس",
    founded: "1920",
    league: "division1"
  },
  {
    id: 3,
    name: "النادي الصفاقسي",
    logo: "/logos/css.png",
    slug: "css",
    city: "صفاقس",
    founded: "1928",
    league: "division1"
  },
  {
    id: 4,
    name: "النجم الساحلي",
    logo: "/logos/ess.png",
    slug: "ess",
    city: "سوسة",
    founded: "1925",
    league: "division1"
  },
  {
    id: 5,
    name: "الاتحاد المنستيري",
    logo: "/logos/usm.png",
    slug: "usm",
    city: "المنستير",
    founded: "1923",
    league: "division1"
  },
  {
    id: 6,
    name: "الملعب التونسي",
    logo: "/logos/st.png",
    slug: "st",
    city: "تونس",
    founded: "1921",
    league: "division1"
  },
  {
    id: 7,
    name: "اتحاد بن قردان",
    logo: "/logos/usbg.png",
    slug: "usbg",
    city: "بن قردان",
    founded: "1936",
    league: "division1"
  },
  {
    id: 8,
    name: "النادي البنزرتي",
    logo: "/logos/cab.png",
    slug: "cab",
    city: "بنزرت",
    founded: "1928",
    league: "division1"
  },
  {
    id: 9,
    name: "مستقبل سليمان",
    logo: "/logos/ms.png",
    slug: "ms",
    city: "سليمان",
    founded: "1955",
    league: "division1"
  },
  {
    id: 10,
    name: "الأولمبي الباجي",
    logo: "/logos/ob.png",
    slug: "ob",
    city: "باجة",
    founded: "1944",
    league: "division1"
  },
  {
    id: 11,
    name: "اتحاد تطاوين",
    logo: "/logos/ust.png",
    slug: "ust",
    city: "تطاوين",
    founded: "1996",
    league: "division1"
  },
  {
    id: 12,
    name: "نجم المتلوي",
    logo: "/logos/esm.png",
    slug: "esm",
    city: "المتلوي",
    founded: "1944",
    league: "division1"
  },
  {
    id: 13,
    name: "الترجي الجرجيسي",
    logo: "/logos/asg.png",
    slug: "asg",
    city: "جرجيس",
    founded: "1947",
    league: "division1"
  },
  {
    id: 14,
    name: "مستقبل الرجيش",
    logo: "/logos/emr.png",
    slug: "emr",
    city: "المهدية",
    founded: "1948",
    league: "division1"
  },
];

const division2Teams = [
  {
    id: 15,
    name: "مستقبل القصرين",
    logo: "/logos/esk.png",
    slug: "esk",
    city: "القصرين",
    founded: "1948",
    league: "division2"
  },
  {
    id: 16,
    name: "قوافل قفصة",
    logo: "/logos/esg.png",
    slug: "esg",
    city: "قفصة",
    founded: "1945",
    league: "division2"
  },
  {
    id: 17,
    name: "الملعب القابسي",
    logo: "/logos/sg.png",
    slug: "sg",
    city: "قابس",
    founded: "1957",
    league: "division2"
  },
  {
    id: 18,
    name: "نادي حمام الأنف",
    logo: "/logos/cshl.png",
    slug: "cshl",
    city: "حمام الأنف",
    founded: "1944",
    league: "division2"
  },
  {
    id: 19,
    name: "مستقبل المرسى",
    logo: "/logos/asm.png",
    slug: "asm",
    city: "المرسى",
    founded: "1939",
    league: "division2"
  },
  {
    id: 20,
    name: "النادي القربي",
    logo: "/logos/csك.png",
    slug: "csk",
    city: "قربة",
    founded: "1946",
    league: "division2"
  },
  {
    id: 21,
    name: "سبورتينغ المكنين",
    logo: "/logos/ssm.png",
    slug: "ssm",
    city: "المكنين",
    founded: "1948",
    league: "division2"
  },
  {
    id: 22,
    name: "نادي كرة القدم بالحمامات",
    logo: "/logos/och.png",
    slug: "och",
    city: "الحمامات",
    founded: "1944",
    league: "division2"
  },
  {
    id: 23,
    name: "الأولمبي للنقل",
    logo: "/logos/ot.png",
    slug: "ot",
    city: "تونس",
    founded: "1961",
    league: "division2"
  },
  {
    id: 24,
    name: "جمعية أريانة",
    logo: "/logos/as.png",
    slug: "as",
    city: "أريانة",
    founded: "1958",
    league: "division2"
  },
  {
    id: 25,
    name: "نجم رادس",
    logo: "/logos/eor.png",
    slug: "eor",
    city: "رادس",
    founded: "1930",
    league: "division2"
  },
  {
    id: 26,
    name: "مستقبل وادي الليل",
    logo: "/logos/eol.png",
    slug: "eol",
    city: "وادي الليل",
    founded: "1962",
    league: "division2"
  },
];

export const getAllTeams = () => [...division1Teams, ...division2Teams]

export const getTeamBySlug = (slug: string) => {
  return getAllTeams().find(team => team.slug === slug)
}
