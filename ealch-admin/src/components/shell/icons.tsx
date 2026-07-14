// 15px stroke icon set — exact path data from the mock's IC object.
export const IC: Record<string, string> = {
  home: 'M2 8.5 8 3l6 5.5M4 7.5v6h8v-6',
  users:
    'M6 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM1.5 13.5c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5M10.8 3.3a2.5 2.5 0 0 1 0 4.9M12 10.3c1.5.4 2.5 1.5 2.5 3.2',
  card: 'M1.5 4.5h13v7h-13zM1.5 7h13M4 9.5h3',
  bell: 'M8 2a4 4 0 0 0-4 4c0 3-1.5 4-1.5 4h11S12 9 12 6a4 4 0 0 0-4-4zM6.5 13a1.6 1.6 0 0 0 3 0',
  doc: 'M4 1.5h5.5L13 5v9.5H4zM9.5 1.5V5H13M6 8.5h4M6 11h4',
  spark: 'M8 1.5 9.3 6.2 14 8l-4.7 1.8L8 14.5 6.7 9.8 2 8l4.7-1.8z',
  pulse: 'M1.5 8h3L6 4l3 8 1.5-4h4',
  link: 'M6 10l4-4M7.5 4.5l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M8.5 11.5l-1 1a2.5 2.5 0 0 1-3.5-3.5l1-1',
  rocket:
    'M8 10c3-2 4.5-5 4.5-8-3 0-6 1.5-8 4.5L2 8l2.5 1L6 11.5 8 10zM3.5 12.5c-.8.8-1.5 2-1.5 2s1.2-.7 2-1.5',
  mic: 'M8 1.5a2 2 0 0 1 2 2V8a2 2 0 1 1-4 0V3.5a2 2 0 0 1 2-2zM3.5 8a4.5 4.5 0 0 0 9 0M8 12.5v2',
  film: 'M2 3.5h12v9H2zM5 3.5v9M11 3.5v9M2 6.5h3M2 9.5h3M11 6.5h3M11 9.5h3',
  search: 'M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM14 14l-3.2-3.2',
};

export function NavIcon({ d, size = 15 }: { d: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
      aria-hidden
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
