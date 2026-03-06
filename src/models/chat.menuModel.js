const menu = [
    { id: 1, name: "Paneer Butter Masala", price: 250, type: "veg" },
    { id: 2, name: "Veg Biryani", price: 200, type: "veg" },
    { id: 3, name: "Dal Tadka", price: 180, type: "veg" },
    { id: 4, name: "Chicken Curry", price: 320, type: "non-veg" }
];

const getMenu = () => {
    return menu;
};

export default getMenu;