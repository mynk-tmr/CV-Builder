export const personal = [
  {
    fullname: "Mayank Tomar",
    email: "github@noreply.com",
    phone: "123456789",
    address: "New Delhi, India",
  },
];

export const education = [
  {
    school: "University of Delhi",
    degree: "Bachelor of Science",
    startedIn: "2016-06",
    finishedOn: "2019-05",
    location: "New Delhi, India",
  },
];

export const experience = [
  {
    place: "Accenture",
    title: "React Engineer",
    startedIn: "2022-11",
    finishedOn: "2023-07",
    location: "New Delhi, India",
    description:
      "Designed and prototyped user interface patterns for various clients across diverse fields. Produced interactive documentation and tested & refactored legacy React class based code.",
  },
];

export function clearValues(obj) {
  let proto = {};
  for (let key in obj[0]) proto[key] = "";
  return proto;
}
