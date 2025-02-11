import { Bell } from 'lucide-react';
import { ReactNode } from 'react';

export function Notification(): ReactNode {
  return (
    <div className="relative text-[#00b4d8] dark:text-white">
      <Bell size={24} />
      <div className="absolute -top-2 -right-1 flex items-center justify-center bg-primary dark:bg-[#00b4d8] rounded-full min-w-4 h-4 px-1">
        <span className="text-[10px] text-white font-medium leading-none">
          2
        </span>
      </div>
    </div>
  );
}
