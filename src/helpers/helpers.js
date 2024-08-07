export const randomAvatar = () => {
  const numeroRandom = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/9.x/miniavs/svg?seed=${numeroRandom}`;
};
