export const randomId = () => {
  return window.self.crypto.randomUUID();
};

export const randomAvatar = () => {
  const numeroRandom = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/9.x/thumbs/svg?seed=${numeroRandom}`;
};
