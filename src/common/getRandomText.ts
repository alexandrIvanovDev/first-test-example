const letters = 'abcdefghijklmnopqrstuvwxyz';

export const getRandomText = (length: number) => {
  const res: Array<string> = [];

  for (let i = 0; i < length; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    res.push(randomLetter);
  }
  return res.join('');
};
