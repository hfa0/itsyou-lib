import {
  NavEntry,
  TDashboardNav,
} from '../components/base/DashboardNav';

export const getNestedRoute = (
  nav: TDashboardNav,
  currentPath: string,
): NavEntry[] => {
  const matchedRoutes: NavEntry[] = [];

  const findMatch = (
    entries: NavEntry[],
    path: string,
  ): boolean => {
    for (const entry of entries) {
      if (
        path === entry.href ||
        (path.startsWith(entry.href) && entry.href !== '/')
      ) {
        matchedRoutes.push(entry);
        if (entry.children) {
          if (findMatch(entry.children, path)) {
            return true;
          }
        }
        return true;
      }
    }
    return false;
  };

  Object.values(nav).forEach((group) => {
    findMatch(group, currentPath);
  });

  return matchedRoutes;
};
