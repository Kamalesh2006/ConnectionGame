const adjectives = [
  'Swift', 'Brave', 'Clever', 'Mighty', 'Silent', 'Bright', 'Lucky', 'Nimble', 'Bold', 'Calm',
];

const animals = [
  'Fox', 'Tiger', 'Eagle', 'Wolf', 'Panda', 'Dolphin', 'Lion', 'Hawk', 'Otter', 'Bear',
];

export function generateRandomUsername() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const num = Math.floor(100 + Math.random() * 900); // 100-999
  return `${adj}${animal}${num}`;
}
