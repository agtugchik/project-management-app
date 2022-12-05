export const activeClassHandler = (isActive: boolean, baseClass: string, activeClass: string) =>
  isActive ? `${baseClass} ${activeClass}` : `${baseClass}`;
