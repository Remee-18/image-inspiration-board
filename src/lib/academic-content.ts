export type ExperienceStory = {
  category: string;
  title: string;
  subtitle: string;
  overview: string[];
  highlights: { title: string; description: string }[];
  reflection: { title: string; quote?: string; paragraphs: string[] };
  learning: string[];
  culturalNote?: string;
  gallery: string;
};

export const academicExperiences: ExperienceStory[] = [
  {
    category: "Academic exposure · IILM University",
    title: "Academic Immersion at IIM Sirmaur",
    subtitle: "A Week of Management Learning, Collaboration & Experiential Exposure",
    overview: [
      "Participated in a one-week academic immersion programme organised by IILM University at IIM Sirmaur as part of my MBA journey.",
      "The programme offered academic exposure, interaction with faculty and industry experts, and a practical understanding of management through discussions and activities.",
    ],
    highlights: [
      { title: "Faculty & industry sessions", description: "Attended management lectures, interactive faculty sessions and sessions conducted by industry experts." },
      { title: "Case-based learning", description: "Discussed business cases involving Swiggy, Zomato and Starbucks, analysing challenges and developing solutions with fellow students." },
      { title: "Collaboration & campus life", description: "Took part in group activities, discussions and presentations, while experiencing the academic environment and campus life at IIM Sirmaur." },
    ],
    reflection: {
      title: "Key Takeaway",
      quote: "Understanding WHY before HOW.",
      paragraphs: ["Understanding the root cause of a problem before jumping to solutions helped me develop a more analytical approach to business situations and management decisions."],
    },
    learning: ["Explore the root cause before proposing a solution.", "Analyse business situations through practical discussion.", "Learn collaboratively from different perspectives."],
    culturalNote: "On the last day, we visited a Gurudwara as part of the overall cultural experience, separate from the academic sessions.",
    gallery: "IIM Sirmaur Academic Immersion",
  },
  {
    category: "Community engagement · DTEM · IILM University",
    title: "Rural Community Visit",
    subtitle: "Understanding Communities Through Empathy & Experiential Learning",
    overview: [
      "As part of our DTEM subject at IILM University, we visited a nearby village approximately 20 minutes from our college campus.",
      "Through direct interaction and observation, we sought to understand everyday lives, challenges and needs, develop empathy, and participate in a community-support activity.",
    ],
    highlights: [
      { title: "Listening to families", description: "Interacted with community members and families to learn about their daily lives and struggles, and spoke with children about their circumstances." },
      { title: "Understanding everyday challenges", description: "Observed difficulties related to finances, employment opportunities, education, healthcare and basic facilities." },
      { title: "Community support", description: "Collected clothes from our own homes along with classmates and distributed them to people in the community." },
    ],
    reflection: {
      title: "A Moment That Stayed With Me",
      paragraphs: [
        "One of the most impactful observations was that many children were not attending school.",
        "It made me realise how access to education, often taken for granted, can remain a challenge for some communities. I reflected on the importance of equal educational opportunities and community support.",
        "Meaningful social impact begins with listening, understanding and connecting with people.",
      ],
    },
    learning: ["Empathy and understanding different perspectives.", "Social responsibility and community participation.", "Listening before making assumptions.", "Understanding real-life problems through direct interaction."],
    gallery: "Rural Community Visit",
  },
];

export const cafeCaseStudy = {
  title: "Cafe NIFRAAM – Business Case Study",
  subtitle: "Understanding Business Challenges Through Field Research & Strategic Recommendations",
  location: "Noida",
  teamSize: 5,
  fieldworkWeeks: 1,
  overview: "As part of our DTEM academic project, I worked in a team of five students on a business case study involving Cafe NIFRAAM in Noida. Our one-week field visit explored its business challenges, local presence and opportunities to improve visibility and customer engagement.",
  challenge: ["Limited local brand awareness.", "Low social media visibility and engagement.", "Nearby residents being unaware of the cafe.", "Opportunities to attract and connect with more potential customers."],
  objective: "Our objective was to understand these challenges and suggest practical strategies to improve visibility and customer engagement.",
  research: ["Visited the cafe and interacted with its founder.", "Spoke with nearby residents about their awareness and perceptions of the cafe.", "Explored the cafe’s social media presence.", "Identified gaps in local awareness and digital engagement."],
  insight: "The research highlighted the importance of local visibility and consistent digital engagement for a small business.",
  recommendations: [
    { title: "Social Media Content Strategy", description: "Create engaging Instagram reels and posts showcasing the cafe, its offerings and overall experience." },
    { title: "Business Collaborations", description: "Collaborate with other cafes and relevant businesses to increase visibility and reach new audiences." },
    { title: "Influencer Marketing", description: "Explore collaborations with relevant local influencers to improve brand awareness." },
    { title: "Promotional Campaigns", description: "Introduce special offers and promotional campaigns to attract potential customers." },
    { title: "Events & Engagement", description: "Organise events and activities to build stronger connections with the local community." },
  ],
  contribution: ["Collaborated with four team members throughout the project and participated in the one-week field visit.", "Interacted with the cafe founder and nearby residents.", "Contributed to identifying business and marketing challenges and developing practical recommendations.", "Helped prepare and present the final presentation, sharing our suggested solutions with the cafe."],
  outcome: {
    before: { min: 500, max: 600 },
    after: 5000,
    attribution: "observed-after-project",
    intro: "Following our project, the cafe started working on improving its social media engagement. Its Instagram following subsequently grew.",
    explanation: "A positive development observed after our project, reflecting the cafe's increased social media presence.",
    caveat: "This is an observed development, not a claim that our recommendations alone caused the growth or that every recommendation was implemented.",
  },
  learning: ["How small businesses operate in real-world situations.", "How primary research can help identify business challenges.", "The importance of customer behaviour and brand awareness.", "Converting research and observations into practical business recommendations.", "The value of teamwork, communication and presentation skills."],
};