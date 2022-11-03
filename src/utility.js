const length = 6;
const str = "qwertyuiopasdfghjklzxcvbnmqwertyuiopaSDFGHJKLZXCVBNM";
export const randomStr = () => {
  let _id = "";

  for (let i = 0; i < length; i++) {
    _id += str[Math.round(Math.random() * str.length)];
  }
  return _id;
};



