import { keygen } from "./utils";

export const personalData = [
  [
    [keygen(), "text", "Fullname", "Mayank Tomar"],
    [keygen(), "email", "Email", "github@noreply.com"],
    [keygen(), "tel", "Phone number", "8839202109"],
    [keygen(), "text", "Address", "New Delhi, India"],
  ],
];

export const educationData = [
  [
    [keygen(), "text", "School", "University of Delhi"],
    [keygen(), "text", "Degree", "Bachelor of Computer Science"],
    [keygen(), "month", "Started in", "2016-06"],
    [keygen(), "month", "Finished on", "2019-05"],
    [keygen(), "text", "Location", "New Delhi, India"],
  ],
];

export const experienceData = [
  [
    [keygen(), "text", "Place of Work", "Accenture"],
    [keygen(), "text", "Position Title", "React Engineer"],
    [keygen(), "month", "Started in", "2022-11"],
    [keygen(), "month", "Finished on", ""],
    [keygen(), "text", "Location", "New Delhi, India"],
    [keygen(), "textarea", "Job Description",
      "Designed and prototyped user interface patterns for various clients across diverse fields. Produced interactive documentation and tested & refactored legacy React class based code.",
    ],
  ],
];