// Shared shell for every /admin/content/* route: the section tab strip.
// Each page keeps its own data fetching; this layout only adds navigation.
import ContentTabs from './ContentTabs';
import styles from './content.module.css';

export default function ContentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.section}>
      <ContentTabs />
      {children}
    </div>
  );
}
