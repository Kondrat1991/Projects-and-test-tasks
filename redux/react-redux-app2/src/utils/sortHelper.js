export default function sortHelper(a, b) {
  if (a.label === 'web') return -1;
  else if (b.label === 'web') return 1;
  return 0;
}
