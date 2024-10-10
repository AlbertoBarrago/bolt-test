export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "The Benefits of Morning Yoga Practice",
    excerpt: "Discover how starting your day with yoga can improve your physical and mental well-being.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "Yoga for Stress Relief: 5 Poses to Try",
    excerpt: "Learn about five effective yoga poses that can help reduce stress and promote relaxation.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-05-10"
  },
  {
    id: 3,
    title: "The History and Philosophy of Yoga",
    excerpt: "Explore the ancient roots and philosophical foundations of yoga practice.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-05-05"
  },
  {
    id: 4,
    title: "Yoga for Beginners: Getting Started on Your Journey",
    excerpt: "A comprehensive guide for those new to yoga, including basic poses and breathing techniques.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-04-30"
  },
  {
    id: 5,
    title: "The Connection Between Yoga and Mindfulness",
    excerpt: "Understand how yoga practice can enhance mindfulness and improve overall mental health.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-04-25"
  }
];