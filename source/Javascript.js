// Function for using consumable items
window.useItem = function(itemIndex) { 
    var item = State.variables.inventory[itemIndex];
    if (item && item.type === "consumable") {
        switch (item.effect) {
            case "heal":
                State.variables.currentStats.health += item.amount; 
                if (State.variables.currentStats.health > State.variables.baseStats.health) { 
                    State.variables.currentStats.health = State.variables.baseStats.health;
                }
                break;
            // Add cases for other effects here
        }
        // Remove the used item from the inventory
        State.variables.inventory.splice(itemIndex, 1);
    }
};
