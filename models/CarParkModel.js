const getFloors = numberOfFloors => {
  let floors = [];
  for (let i = 1; i <= numberOfFloors; i++) {
    floors.push(_generateLabel(i));
  }
  return floors;
};

const _generateLabel = floorNumber => {
  return {
    floorLabel: `Floor ${floorNumber}`,
    floorValue: floorNumber
  };
};

export default getFloors;
