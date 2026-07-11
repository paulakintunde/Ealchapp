'use client';
// Screen shell — lifts composer title/body so the live phone preview updates
// as you type, and wires the empty-state CTA to focus the composer.
import { useCallback, useRef, useState } from 'react';
import type { CampaignDTO, TemplateDTO } from './types';
import Composer from './Composer';
import CampaignList from './CampaignList';
import PhonePreview from './PhonePreview';
import TemplateLibrary from './TemplateLibrary';
import styles from './notifications.module.css';

export default function NotificationsClient({
  templates,
  initialCampaigns,
  canWrite,
}: {
  templates: TemplateDTO[];
  initialCampaigns: CampaignDTO[];
  canWrite: boolean;
}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);

  const focusComposer = useCallback(() => {
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className={styles.grid}>
      <div className={styles.leftCol}>
        <Composer
          templates={templates}
          canWrite={canWrite}
          title={title}
          body={body}
          onTitleChange={setTitle}
          onBodyChange={setBody}
          titleRef={titleRef}
        />
        <CampaignList
          initialCampaigns={initialCampaigns}
          canWrite={canWrite}
          onCompose={focusComposer}
        />
      </div>
      <div className={styles.rightCol}>
        <PhonePreview title={title} body={body} />
        <TemplateLibrary templates={templates} canWrite={canWrite} />
      </div>
    </div>
  );
}
