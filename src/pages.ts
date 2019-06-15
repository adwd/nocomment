type Page = {
  title: string;
  match: () => boolean;
  removeComments: () => void;
};

export const pages: Page[] = [
  {
    title: 'Yahoo! News',
    match: () => window.location.host.includes('yahoo.co.jp'),
    removeComments: () => {
      const comments =
        document.getElementById('socialComments') ||
        document.getElementById('comment');

      if (comments) {
        comments.remove();
      }
    },
  },
];
