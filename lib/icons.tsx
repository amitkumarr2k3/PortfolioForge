import * as LucideIcons from 'lucide-react';
import { Code2 } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { IconName } from '@/config/site.config';

/**
 * Resolves an icon name string (as used in config/site.config.ts, e.g. "Brain")
 * to the matching lucide-react component. Falls back to Code2 if the name
 * doesn't match a known icon, so a typo in the config never crashes the page.
 */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const LucideIconsMap = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const IconComponent = LucideIconsMap[name] ?? Code2;
  return <IconComponent {...props} />;
}
