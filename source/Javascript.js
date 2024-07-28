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

// Update the background image based on the current biome
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


// Function to check quest status and include the appropriate passage
window.questCheck = function(questTitle, questPassage) {
    var quest = State.variables.playerQuests.find(q => q.title === questTitle);
    var completedQuest = State.variables.completedQuests.find(q => q.title === questTitle);

    if (completedQuest) {
        State.variables.currentQuestState = "complete";
    } else if (quest) {
        var objectiveSet = false;
        for (var i = 0; i < quest.objectives.length; i++) {
            if (!quest.objectives[i].completed) {
                State.variables.currentQuestState = "objective" + (i + 1);
                objectiveSet = true;
                break;
            }
        }
        if (!objectiveSet) {
            State.variables.currentQuestState = "turnIn";
        }
    } else {
        State.variables.currentQuestState = "start";
    }
};