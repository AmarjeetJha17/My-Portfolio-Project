import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  proficiency: number;
  className?: string;
}

export function SkillBar({ name, proficiency, className }: SkillBarProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{name}</span>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">{proficiency}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000"
          style={{ width: `${proficiency}%` }}
          role="progressbar"
          aria-valuenow={proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${proficiency}%`}
        />
      </div>
    </div>
  );
}

export default SkillBar;
