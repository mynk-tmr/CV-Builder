import { keygen } from "./utils";

export const personalData = [
  [
    [keygen(), "fullname", "Mayank Tomar", "text"],
    [keygen(), "email", "github@noreply.com", "email"],
    [keygen(), "phone", "8839202109", "tel"],
    [keygen(), "address", "New Delhi, India", "text"],
  ],
];

export const educationData = [
  [
    [keygen(), "school", "University of Delhi", "text"],
    [keygen(), "degree", "Bachelor of Science", "text"],
    [keygen(), "started in", "2016-06", "month"],
    [keygen(), "finished on", "2019-05", "month"],
    [keygen(), "Location", "New Delhi, India", "text"],
  ],
];

export const experienceData = [
  [
    [keygen(), "Place of Work", "Accenture, New Delhi", "text"],
    [keygen(), "Position Title", "React Engineer", "text"],
    [keygen(), "started in", "2022-11", "month"],
    [keygen(), "finished on", "", "month"],
    [keygen(), "Job Description", "", "textarea"],
  ],
];