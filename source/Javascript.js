// Function for using consumable items
window.useItem = function(itemIndex) {
    var item = State.variables.inventory[itemIndex];
    // Check if the item exists in the $consumables object
    if (item && State.variables.consumables[item.name]) {
        switch (item.effect) {
            case "heal":
                State.variables.currentStats.health += item.amount; 
                if (State.variables.currentStats.health > State.variables.baseStats.health) { 
                    State.variables.currentStats.health = State.variables.baseStats.health;
                }
                break;
            case "replenish":
                State.variables.currentStats.energy += item.amount;
                if (State.variables.currentStats.energy > State.variables.baseStats.energy) {
                    State.variables.currentStats.energy = State.variables.baseStats.energy;
                }
                break;
            // Add cases for other effects here
        }
        // Remove the used item from the inventory
        State.variables.inventory.splice(itemIndex, 1);
    }
};

var biomeClasses = {
    'forest': 'biome-forest',
    'desert': 'biome-desert',
    'mountain': 'biome-mountain'
    // Add more biomes here as needed
};

function updateBiomeBackground() {
    var currentBiome = State.variables.currentBiome;
    
    // Remove all biome classes first
    for (var biome in biomeClasses) {
        $('body').removeClass(biomeClasses[biome]);
    }

    // Add the class for the current biome
    if (biomeClasses[currentBiome]) {
        $('body').addClass(biomeClasses[currentBiome]);
    }
}

$(document).on(':passagerender', function() {
    updateBiomeBackground();
});

