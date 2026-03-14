/**
 * Patient reviews for the homepage rotating carousel.
 * To add a new review: append an object { quote: "...", name: "First Last" } to the array.
 * See README.md for full instructions.
 */
export type PatientReview = {
  quote: string;
  name: string;
};

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    quote:
      "The office and staff is very professional and discreet. Recommend their services to anyone 👍🏽 Dr. Kella is the best",
    name: "Elva D.",
  },
  {
    quote:
      "Dr. Kella and his staff are so amazing and compassionate! The ladies at the front desk are beyond sweet and I leave each visit healed in body and soul! Highly recommend!",
    name: "Clinton M.",
  },
  {
    quote:
      "Last week was my first visit at The Urology Place, I am very confident with the treatment I am receiving for ED... a combination of hormones and later GAINSWave therapy. This office offers pelleting much cheaper than all the other places that I called and visited. The front desk was very helpful and I was able to order my prescriptions through them also cheaper than my pharmacy!",
    name: "Brian H.",
  },
  {
    quote:
      "Now that I am 17 months out from my surgery, I am so thankful I decided to go this direction. You can rest assured that you are in good hands with the team at The Urology Place. I was back in action quickly and a year and a half later I am still cancer-free with a minimum of side effects. The robotic prostatectomy is a miracle of modern medicine and Dr. Kella is the best in the business!",
    name: "Bill P.",
  },
  {
    quote:
      "Having this treatment done was life changing, miracle-like experience for me. I would definitely recommend it to all my family and friends. The treatment was fast, easy, and smooth with little to no down time, pain, or discomfort. I am able to notice many improvements in my body. and I am very satisfied with the changes. Not to mention the staff is very friendly and helpful, which made the process easier than it already was.",
    name: "Vanessa M.",
  },
  {
    quote:
      "I've heard wonderful things about this place. Two of my good friends go here. I've heard Dr. Hlavinka's experise in the area of urology and hormone replacement therapy works wonders and his new staff is wonderful.",
    name: "DeAnna H.",
  },
  {
    quote:
      "Helpful staff. Very nice facility and excellent doctors! I will be returning to the urology place and recommend them to my friends.",
    name: "Bee B.",
  },
  {
    quote:
      "Love The Urology Place, we drove over 3 hours each way to see Dr. Kella and Dr. Hlavinka. They are amazing! Clean, new office and very friendly staff. I am very happy.",
    name: "Jacob V.",
  },
];
