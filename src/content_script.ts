import { pages } from './pages';

function runRemove(): boolean {
  return pages.some(({ match, removeComments, title }) => {
    if (match()) {
      removeComments();
      console.log(`[NoComment Chrome extension] removed comments from ${title}.`);
      return true;
    }
  
    return false;
  });
}

runRemove();

const observer = new MutationObserver((mutations) => {
  const removed = mutations.some(() => runRemove());    
  if (removed) {
    observer.disconnect();
  }
});
 
observer.observe(document.body, { childList: true, subtree: true });
