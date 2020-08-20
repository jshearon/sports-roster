const convertFirebaseCollection = (data) => {
  const fbCollection = data;
  const newArray = [];

  if (fbCollection) {
    Object.keys(fbCollection).forEach((itemId) => {
      fbCollection[itemId].id = itemId;
      newArray.push(fbCollection[itemId]);
    });
  }

  return newArray;
};

export default { convertFirebaseCollection };
