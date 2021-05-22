export const makeId = (length=6) => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = [];
  for(let i=0; i<length; i++){
    str.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return str.join('');
};
