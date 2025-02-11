import { ReactNode } from 'react';
import { ChangeLangue } from './ChangeLangue';
import { ChangeMode } from './ChangeMode';
import { Notification } from './Notification';
import { ProfilButton } from './ProfilButton';

export function ButtonBar(): ReactNode {
  return (
    <div className="p-2 flex items-center justify-center gap-6">
      <ChangeLangue pathname="/images/flag/frs.webp" />
      <ChangeMode />
      <Notification />
      <ProfilButton pathname="/images/avatar.webp" />
    </div>
  );
}
