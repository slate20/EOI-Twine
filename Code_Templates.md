**Code Templates**<br>

Weapons:<br>
Name = name<br>
class = same as parent datamap<br>
type = weapon type used by other mechanics such as damage modifier<br>
description = description of item displayed to player<br>
damage = damage roll to be used for combat. *MUST* use 'xdx+/-x' format (5 total characters)<br>
tier = grade of weapon. used to control where the item spawns in shops, loot, etc. TL;DR high tier = better weapon<br>
value = gold value used for commerce<br>
equipped = leave as false
```
 "Rusty Sword", (dm: 
        "name", "Rusty Sword",
        "class", "weapon",
        "type", "sword",
        "description", "A blunt sword that has seen better days.",
        "damage", "1d4+2",
        "tier", 0,
        "value", 10,
        "equipped", false
    )
```
Armor:<br>
```
    "Wooden Shield", (dm: 
        "name", "Wooden Shield",
        "class", "armor",
        "type", "shield",
        "description", "A sturdy shield made of oak.",
        "ac", 2,
        "tier", 1,
        "value", 8,
        "equipped", false
    )
```
