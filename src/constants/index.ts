export interface CommonI {
  id: number;
  name: string;
}
export interface DistrictI {
  provinceID: number;
  data: CommonI[];
}
export interface PalikaI {
  districtID: number;
  data: CommonI[];
}
export const GENDER_DATA: CommonI[] = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Others",
  },
];

export const BLOOD_GROUP_DATA: CommonI[] = [
  {
    id: 1,
    name: "A Positive",
  },
  {
    id: 2,
    name: "B Positive",
  },
  {
    id: 3,
    name: "AB Positive",
  },
  {
    id: 4,
    name: "AB Negative",
  },
  {
    id: 5,
    name: "O Positive",
  },
  {
    id: 6,
    name: "O Negative",
  },
];

export const MARITAL_STATUS_DATA: CommonI[] = [
  {
    id: 1,
    name: "Single",
  },
  {
    id: 2,
    name: "Married",
  },
  {
    id: 3,
    name: "Bachelor",
  },
  {
    id: 4,
    name: "Divorce",
  },
];

export const RELIGION_DATA: CommonI[] = [
  {
    id: 1,
    name: "Hinduism",
  },
  {
    id: 2,
    name: "Buddhism",
  },
  {
    id: 3,
    name: "Christian",
  },
  {
    id: 4,
    name: "Muslim",
  },
];

export const RELATION_DATA: CommonI[] = [
  {
    id: 1,
    name: "Father",
  },
  {
    id: 2,
    name: "Mother",
  },
  {
    id: 3,
    name: "Brother",
  },
  {
    id: 4,
    name: "Sister",
  },
  {
    id: 5,
    name: "Uncle",
  },
  {
    id: 6,
    name: "Aunt",
  },
];

export const PROVINCE_DATA: CommonI[] = [
  {
    id: 1,
    name: "Province 1",
  },
  {
    id: 2,
    name: "Province 2",
  },
  {
    id: 3,
    name: "Province 3",
  },
  {
    id: 4,
    name: "Province 4",
  },
  {
    id: 5,
    name: "Province 5",
  },
  {
    id: 6,
    name: "Province 6",
  },
  {
    id: 7,
    name: "Province 7",
  },
];

export const DISTRICT_DATA: DistrictI[] = [
  {
    provinceID: 1,
    data: [
      { id: 1, name: "Taplejung" },
      { id: 2, name: "Panchthar" },
      { id: 3, name: "Ilam" },
    ],
  },
  {
    provinceID: 2,
    data: [
      { id: 4, name: "Sankhuwasabha" },
      { id: 5, name: "Bhojpur" },
      { id: 6, name: "Dhankuta" },
    ],
  },
  {
    provinceID: 3,
    data: [
      { id: 7, name: "Sunsari" },
      { id: 8, name: "Morang" },
      { id: 9, name: "Jhapa" },
    ],
  },
  {
    provinceID: 4,
    data: [
      { id: 10, name: "Gandaki" },
      { id: 11, name: "Lumbini" },
      { id: 12, name: "Karnali" },
    ],
  },
  {
    provinceID: 5,
    data: [
      { id: 13, name: "Mustang" },
      { id: 14, name: "Manang" },
      { id: 15, name: "Dolpa" },
    ],
  },
  {
    provinceID: 6,
    data: [
      { id: 16, name: "Rukum" },
      { id: 17, name: "Rolpa" },
      { id: 18, name: "Salyan" },
    ],
  },
  {
    provinceID: 7,
    data: [
      { id: 19, name: "Bajhang" },
      { id: 20, name: "Bajura" },
      { id: 21, name: "Darchula" },
    ],
  },
];

export const PALIKA_DATA: PalikaI[] = [
  {
    districtID: 1,
    data: [
      { id: 1, name: "Taplejung Palika 1 " },
      { id: 2, name: "Taplejung Palika 2" },
      { id: 3, name: "Taplejung Palika 3" },
    ],
  },
  {
    districtID: 2,
    data: [
      { id: 1, name: "Panchthar Palika 1" },
      { id: 2, name: "Panchthar Palika 2" },
      { id: 3, name: "Panchthar Palika 3" },
    ],
  },
  {
    districtID: 3,
    data: [
      { id: 1, name: "Ilam Palika 1" },
      { id: 2, name: "Ilam Palika 2" },
      { id: 3, name: "Ilam Palika 3" },
    ],
  },
  {
    districtID: 4,
    data: [
      { id: 1, name: "Sankhuwasabha Palika 1" },
      { id: 2, name: "Sankhuwasabha Palika 2" },
      { id: 3, name: "Sankhuwasabha Palika 3" },
    ],
  },
  {
    districtID: 5,
    data: [
      { id: 1, name: "Bhojpur Palika 1" },
      { id: 2, name: "Bhojpur Palika 2" },
      { id: 3, name: "Bhojpur Palika 3" },
    ],
  },
  {
    districtID: 6,
    data: [
      { id: 1, name: "Dhankuta Palika 1" },
      { id: 2, name: "Dhankuta Palika 2" },
      { id: 3, name: "Dhankuta Palika 3" },
    ],
  },
  {
    districtID: 7,
    data: [
      { id: 1, name: "Sunsari Palika 1" },
      { id: 2, name: "Sunsari Palika 2" },
      { id: 3, name: "Sunsari Palika 3" },
    ],
  },
  {
    districtID: 8,
    data: [
      { id: 1, name: "Morang Palika 1" },
      { id: 2, name: "Morang Palika 2" },
      { id: 3, name: "Morang Palika 3" },
    ],
  },
  {
    districtID: 9,
    data: [
      { id: 1, name: "Jhapa Palika 1" },
      { id: 2, name: "Jhapa Palika 2" },
      { id: 3, name: "Jhapa Palika 3" },
    ],
  },
  {
    districtID: 10,
    data: [
      { id: 1, name: "Gandaki Palika 1" },
      { id: 2, name: "Gandaki Palika 2" },
      { id: 3, name: "Gandaki Palika 3" },
    ],
  },
  {
    districtID: 11,
    data: [
      { id: 1, name: "Lumbini Palika 1" },
      { id: 2, name: "Lumbini Palika 2" },
      { id: 3, name: "Lumbini Palika 3" },
    ],
  },
  {
    districtID: 12,
    data: [
      { id: 1, name: "Karnali Palika 1" },
      { id: 2, name: "Karnali Palika 2" },
      { id: 3, name: "Karnali Palika 3" },
    ],
  },
  {
    districtID: 13,
    data: [
      { id: 1, name: "Mustang Palika 1" },
      { id: 2, name: "Mustang Palika 2" },
      { id: 3, name: "Mustang Palika 3" },
    ],
  },
  {
    districtID: 14,
    data: [
      { id: 1, name: "Manang Palika 1" },
      { id: 2, name: "Manang Palika 2" },
      { id: 3, name: "Manang Palika 3" },
    ],
  },
  {
    districtID: 15,
    data: [
      { id: 1, name: "Dolpa Palika 1" },
      { id: 2, name: "Dolpa Palika 2" },
      { id: 3, name: "Dolpa Palika 3" },
    ],
  },
  {
    districtID: 16,
    data: [
      { id: 1, name: "Rukum Palika 1" },
      { id: 2, name: "Rukum Palika 2" },
      { id: 3, name: "Rukum Palika 3" },
    ],
  },
  {
    districtID: 17,
    data: [
      { id: 1, name: "Rolpa Palika 1" },
      { id: 2, name: "Rolpa Palika 2" },
      { id: 3, name: "Rolpa Palika 3" },
    ],
  },
  {
    districtID: 18,
    data: [
      { id: 1, name: "Salyan Palika 1" },
      { id: 2, name: "Salyan Palika 2" },
      { id: 3, name: "Salyan Palika 3" },
    ],
  },
  {
    districtID: 19,
    data: [
      { id: 1, name: "Bajhang Palika 1" },
      { id: 2, name: "Bajhang Palika 2" },
      { id: 3, name: "Bajhang Palika 3" },
    ],
  },
  {
    districtID: 20,
    data: [
      { id: 1, name: "Bajura Palika 1" },
      { id: 2, name: "Bajura Palika 2" },
      { id: 3, name: "Bajura Palika 3" },
    ],
  },
  {
    districtID: 21,
    data: [
      { id: 1, name: "Darchula Palika 1" },
      { id: 2, name: "Darchula Palika 2" },
      { id: 3, name: "Darchula Palika 3" },
    ],
  },
];

