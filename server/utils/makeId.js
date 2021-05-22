exports.makeId = (length = 6) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const str = [];
  for (let i = 0; i < length; i++) {
    str.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return str.join('');
};
