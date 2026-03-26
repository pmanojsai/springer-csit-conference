export const starryBackground = {
  backgroundImage: 'radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 1px)',
  backgroundSize: '30px 30px',
  backgroundColor: '#0f172a',
  position: 'relative',
  overflow: 'hidden',
} as const;

export const starryOverlay = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))',
  zIndex: 1,
} as const;
