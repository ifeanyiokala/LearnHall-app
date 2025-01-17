import { nanoid } from "nanoid";

const FaqData = [
  {
    title: "What is Learnhall and what does it do?",
    content:
      "Learnhall is an online tutoring marketplace where you can hire tutors from anywhere in the world. In addition, we meet at the pupil's home or local library and we also offer online lessons.",
    id: nanoid(),
  },
  {
    title: "How do I hire a tutor?",
    content: `Inquire about our tutoring services by filling out and submitting the “Book a Session” form.
      Within 24 hours an advisor will contact you to go over the student's tutoring goals & needs.
      The advisor will find an ideal tutor match and set up a free session to ensure that s/he is the right fit.`,
    id: nanoid(),
  },
  {
    title: "How do I contact customer support at Learnhall ?",
    content:
      "For any questions or help, please shoot us an email at info@learnhall.com.",
    id: nanoid(),
  },
  {
    title: "What countries does Learnhall serve?",
    content:
      "Learnhall is open to any student, parent, and tutor throughout the world. Our interface is currently in English, but anyone from anywhere can use our platform.",
    id: nanoid(),
  },
  {
    title: "Is Tutoring with Learnhall safe?",
    content:
      "Our tutors are personally checked and interviewed before they are approved for tutoring. Further, we monitor the feedback and performance of our tutors periodically, especially new ones.",
    id: nanoid(),
  },
];
export default FaqData;
