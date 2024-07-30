export const randomAvatar = (style = "miniavs") => {
  const numeroRandom = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/9.x/${style}/svg?seed=${numeroRandom}`;
};
