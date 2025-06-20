export interface Topic {
  id: string;
  title: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export const biologyContent: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'The nature and variety of living organisms',
    description: 'Understanding the fundamental characteristics that define life and exploring the incredible diversity of living organisms on Earth.',
    topics: [
      {
        id: 'characteristics-living-organisms',
        title: 'Characteristics of living organisms'
      },
      {
        id: 'variety-living-organisms',
        title: 'Variety of living organisms'
      }
    ]
  },
  {
    id: 'chapter-2',
    title: 'Structure and functions in living organisms',
    description: 'Examining the organization of life from cellular level to complex organ systems and understanding how structure relates to function.',
    topics: [
      {
        id: 'level-organisation',
        title: 'Level of organisation'
      },
      {
        id: 'cell-structure',
        title: 'Cell structure'
      },
      {
        id: 'biological-molecules',
        title: 'Biological_molecules'
      },
      {
        id: 'movement-substances',
        title: 'Movement of substances into and outof cells'
      },
      {
        id: 'nutrition',
        title: 'Nutrition'
      },
      {
        id: 'respiration',
        title: 'Respiration'
      },
      {
        id: 'gas-exchange',
        title: 'Gas exchange'
      },
      {
        id: 'transport',
        title: 'Transport'
      },
      {
        id: 'excretion',
        title: 'Excretion'
      },
      {
        id: 'coordination-response',
        title: 'Coordination and response'
      }
    ]
  },
  {
    id: 'chapter-3',
    title: 'Reproduction & Inheritance',
    description: 'Exploring how organisms reproduce and pass genetic information to their offspring, including the mechanisms of heredity.',
    topics: [
      {
        id: 'reproduction',
        title: 'Reproduction'
      },
      {
        id: 'inheritance',
        title: 'Inheritance'
      }
    ]
  },
  {
    id: 'chapter-4',
    title: 'Ecology and the Environment',
    description: 'Understanding the relationships between organisms and their environment, including ecosystem dynamics and human impact.',
    topics: [
      {
        id: 'organism-environment',
        title: 'The organism in the environment'
      },
      {
        id: 'feeding-relationships',
        title: 'Feeding Relationships'
      },
      {
        id: 'cycles-ecosystems',
        title: 'Cycles within ecosystems'
      },
      {
        id: 'human-influences-environment',
        title: 'Human influences on the environment'
      }
    ]
  },
  {
    id: 'chapter-5',
    title: 'Use of Biological Resources',
    description: 'Examining how humans utilize biological resources and the technologies involved in food production and genetic manipulation.',
    topics: [
      {
        id: 'food-production',
        title: 'Food production'
      },
      {
        id: 'selective-breeding',
        title: 'Selective breeding'
      },
      {
        id: 'genetic-modification',
        title: 'Genetic modification (genetic engineering)'
      },
      {
        id: 'cloning',
        title: 'Cloning'
      }
    ]
  }
];

// Helper function to get all topics across all chapters
export const getAllTopics = (): Topic[] => {
  return biologyContent.flatMap(chapter => chapter.topics);
};

// Helper function to get a specific chapter by ID
export const getChapterById = (id: string): Chapter | undefined => {
  return biologyContent.find(chapter => chapter.id === id);
};

// Helper function to get a specific topic by ID with chapter and topic IDs
export const getTopicById = (chapterId: string, topicId: string): { topic: Topic; chapter: Chapter } | undefined => {
  const chapter = biologyContent.find(c => c.id === chapterId);
  if (!chapter) return undefined;
  
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return undefined;
  
  return { topic, chapter };
};

// Helper function to get the next topic
export const getNextTopic = (chapterId: string, topicId: string): { chapterId: string; topicId: string } | null => {
  const currentChapterIndex = biologyContent.findIndex(c => c.id === chapterId);
  if (currentChapterIndex === -1) return null;
  
  const currentChapter = biologyContent[currentChapterIndex];
  const currentTopicIndex = currentChapter.topics.findIndex(t => t.id === topicId);
  if (currentTopicIndex === -1) return null;
  
  // Check if there's a next topic in the current chapter
  if (currentTopicIndex < currentChapter.topics.length - 1) {
    return {
      chapterId: chapterId,
      topicId: currentChapter.topics[currentTopicIndex + 1].id
    };
  }
  
  // Check if there's a next chapter
  if (currentChapterIndex < biologyContent.length - 1) {
    const nextChapter = biologyContent[currentChapterIndex + 1];
    if (nextChapter.topics.length > 0) {
      return {
        chapterId: nextChapter.id,
        topicId: nextChapter.topics[0].id
      };
    }
  }
  
  return null;
};

// Helper function to get the previous topic
export const getPreviousTopic = (chapterId: string, topicId: string): { chapterId: string; topicId: string } | null => {
  const currentChapterIndex = biologyContent.findIndex(c => c.id === chapterId);
  if (currentChapterIndex === -1) return null;
  
  const currentChapter = biologyContent[currentChapterIndex];
  const currentTopicIndex = currentChapter.topics.findIndex(t => t.id === topicId);
  if (currentTopicIndex === -1) return null;
  
  // Check if there's a previous topic in the current chapter
  if (currentTopicIndex > 0) {
    return {
      chapterId: chapterId,
      topicId: currentChapter.topics[currentTopicIndex - 1].id
    };
  }
  
  // Check if there's a previous chapter
  if (currentChapterIndex > 0) {
    const previousChapter = biologyContent[currentChapterIndex - 1];
    if (previousChapter.topics.length > 0) {
      return {
        chapterId: previousChapter.id,
        topicId: previousChapter.topics[previousChapter.topics.length - 1].id
      };
    }
  }
  
  return null;
};

// Helper function to get total number of topics
export const getTotalTopicsCount = (): number => {
  return biologyContent.reduce((total, chapter) => total + chapter.topics.length, 0);
};