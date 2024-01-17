Download Twine Editor here: <br>
https://github.com/klembot/twinejs/releases

Open Twine and at the top select Twine->Set Story Library Folder <br>
Set this to the 'Stories' folder in the repository

the .map file in 'Assets/Maps' can be opened here: <br>
https://azgaar.github.io/Fantasy-Map-Generator/

![image](https://github.com/slate20/Twine_RPG/assets/155096805/27e42004-66b5-4f72-8d0c-6aea6d7466d7)<br><br>

**Code Templates**<br><br>

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
