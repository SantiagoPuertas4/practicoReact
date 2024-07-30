export const generateRandomAvatar = (style = "miniavs") => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;
};

export const randomAvatar = () => {
  const numeroRandom = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/7.0x/miniavs/svg?seed=${numeroRandom}`;
};
