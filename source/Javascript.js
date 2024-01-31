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

