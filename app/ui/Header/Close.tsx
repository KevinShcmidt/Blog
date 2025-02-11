import { X } from 'lucide-react';
import { ReactNode } from 'react';

export function Close({
  onClose,
}: {
  onClose: (value: boolean) => void;
}): ReactNode {
  return (
    <div className="py-2" onClick={() => onClose(false)}>
      <X size={32} />
    </div>
  );
}
