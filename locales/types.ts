// Define the type for our locale object
export interface Locale {
  navigation: {
    home: string;
    about: string;
    blog: string;
    projects: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      exploreArticles: string;
      viewProjects: string;
    };
    latestArticles: string;
    viewAll: string;
  };
  blog: {
    title: string;
    searchPlaceholder: string;
    clearFilter: string;
    filterByTags: string;
    sort: string;
    newest: string;
    oldest: string;
    showingResults: string;
    readMore: string;
    comments: string;
    noComments: string;
    writeComment: string;
    submitComment: string;
  };
  comments: {
    poweredBy: string;
    note: string;
    enableSteps: {
      createRepo: string;
      enableDiscussions: string;
      installApp: string;
      configure: string;
    };
  };
  projects: {
    title: string;
    showingResults: string;
    github: string;
    demo: string;
  };
  about: {
    title: string;
    profile: {
      technicalSkills: string;
      socialLinks: {
        twitter: string;
        github: string;
      };
    };
    sections: {
      biography: string;
      workExperience: string;
      education: string;
    };
  };
  footer: {
    copyright: string;
    designedBy: string;
  };
  common: {
    loading: string;
    error: string;
    notFound: string;
    backHome: string;
  };
}

// Define the supported languages
export type SupportedLanguage = 'en-US' | 'zh-CN';
