const HEAD = [
  {
    id: 0,
    content: "Sign In",
    link: "/login",
  },
  {
    id: 1,
    content: "My Starbugs",
    link: "/",
  },
  {
    id: 2,
    content: "Customer Service",
    link: "/",
  },
  {
    id: 3,
    content: "Cart",
    link: "/cart",
  },
];

const HEAD1 = [
  {
    id: 0,
    title: "커피",
    content: [
      { menu_title: "스타벅스 원두", menu_link: "/productlist" },
      { menu_title: "스타벅스 비아", menu_link: "/productlist" },
      { menu_title: "스타벅스 오리가미", menu_link: "/productlist" },
    ],
    link: "/productlist",
  },
  {
    id: 1,
    title: "나와 어울리는 커피",
    content: [],
    link: "",
  },
  {
    id: 2,
    title: "STARBUGS 리저브",
    content: [{ menu_title: "RESERVE MAGAZINE", menu_link: "/" }],
    link: "",
  },
  {
    id: 3,
    title: "에스프레소 음료",
    content: [
      { menu_title: "도피오", menu_link: "/" },
      { menu_title: "에스프레소 마키아또", menu_link: "/" },
      { menu_title: "아메리카노", menu_link: "/" },
      { menu_title: "마끼아또", menu_link: "/" },
      { menu_title: "카푸치노", menu_link: "/" },
      { menu_title: "라떼", menu_link: "/" },
    ],
    link: "",
  },
  {
    id: 4,
    title: "최상의 커피를 즐기는 법",
    content: [
      { menu_title: "커피 프레스", menu_link: "/" },
      { menu_title: "푸어 오버", menu_link: "/" },
      { menu_title: "아이스 푸어 오버", menu_link: "/" },
      { menu_title: "커피 메이커", menu_link: "/" },
    ],
    link: "",
  },
];

const HEAD2 = [
  {
    id: 0,
    title: "음료",
    content: [
      { menu_title: "콜드 브루", menu_link: "/productlist" },
      { menu_title: "에스프레소", menu_link: "/productlist" },
      { menu_title: "프라프치노", menu_link: "/productlist" },
      { menu_title: "콜드 브루", menu_link: "/productlist" },
      { menu_title: "블랜디드", menu_link: "/productlist" },
      { menu_title: "스타벅스 파지오", menu_link: "/productlist" },
    ],
    link: "/productlist",
  },
  {
    id: 1,
    title: "푸드",
    content: [
      { menu_title: "브레드", menu_link: "/" },
      { menu_title: "케이크", menu_link: "/" },
      { menu_title: "샌드위치", menu_link: "/" },
      { menu_title: "샐러드 & 커피", menu_link: "/" },
      { menu_title: "과일", menu_link: "/" },
      { menu_title: "요거트", menu_link: "/" },
    ],
    link: "/mypage",
  },
  {
    id: 2,
    title: "상품",
    content: [
      { menu_title: "머그", menu_link: "/" },
      { menu_title: "글라스", menu_link: "/" },
      { menu_title: "플라스틱 텀블러", menu_link: "/" },
      { menu_title: "보온병", menu_link: "/" },
      { menu_title: "악세사리", menu_link: "/" },
      { menu_title: "커피 용품", menu_link: "/" },
      { menu_title: "STARBUGS 플래너", menu_link: "/" },
    ],

    link: "/service",
  },
  {
    id: 3,
    title: "카드",
    content: [
      { menu_title: "실물카드", menu_link: "/" },
      { menu_title: "e-Gift 카드", menu_link: "/" },
    ],

    link: "/cart",
  },
  {
    id: 4,
    title: "메뉴이야기",
    content: [
      { menu_title: "나이트로 콜드브루", menu_link: "/" },
      { menu_title: "콜드 브루", menu_link: "/" },
      { menu_title: "STARBUGS 티바나", menu_link: "/" },
    ],

    link: "/cart",
  },
];

export { HEAD, HEAD1, HEAD2 };
