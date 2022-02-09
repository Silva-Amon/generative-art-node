const layersOrder = [
    { name: 'Backgrounds', number: 3 },
    { name: 'Skins', number: 3 },
    { name: 'Eyes', number: 3 },
    { name: 'Mouth', number: 3 },
    { name: 'Nose', number: 3 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 243;

module.exports = { layersOrder, format, rarity, defaultEdition };