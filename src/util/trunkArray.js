const trunkArray = (array, groupSize) => {
    return array.map((item, index) => {
        return index % groupSize === 0 ? array.slice(index, index + groupSize) : null;
      }).filter(item => { return item; });
}

export default trunkArray;