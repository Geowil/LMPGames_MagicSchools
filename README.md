# Magic Schools Plugin
	Version Number: V2.0.0<br><br>

	Project Link: [Version 2.0.0](http://www.lmpgames.com/RMMV/Plugins/LMPGames_MagicSchools_Prj_V200.zip)<br>
	Demo Link: [Version 2.0.0.0](http://www.lmpgames.com/RMMV/Plugins/LMPGames_MagicSchools_Demo_V200.zip)<br><br>

	### Conflicts
		None yet reported<br><br>

	### Terms of Use
		Free non-commercially or commercially; just give credit.  Copies of games appriciated, but not required.<br><br>


	Image(s)

## What is This?
This plugin is designed to allow you to alter how players learn magic in your game.  This is accomplished by setting elemental schools of magic and then assigning spells to trees within those schools.

While designed with spells in mind, this plugin can be used to set up any kind of hierarchical skill structure, such as schools of martial arts.

## Installation Instructions
Download the plugin JS file from the files section above and place it into your js/plugins folder.

In your game project, open the plugin manager and add a new plugin.  Select LMPGames_MagicSchools from the drop down list and configure the plugin as needed.

More information about plugin settings can be found below.

## Requirements
There are some required third party plugins:
<ul>
    <li>YEP_MessageCore - YanFly Message Core</li>
    <li>YEP_X_ExtMesPack1 - YanFly Message Core Extension Pack 1</li>
</ul>

Optional Plugins:
<ul>
    <li>LMPGames_MagicCrafting - LMPGames Magic Crafting</li>
    <ul>
        <li>This is required if you enable the Crafting Support plugin setting</li>
    </ul>
</ul>


## How does it Work?
This plugin uses plugin setting objects to configure each school.  Each school has some specific settings that apply only to that school.  Other settings override global settings or are overridable by lower level settings.

Each school has a list of tree objects that contain two methods of configuration for each tree.  These are the Primary and Secondary configuration settings.

Each of these is broken down into grade settings which relate to the class learning the spells from the school.

For more detailed information, see the Features section below.

## Features
### Schools
The general expected set up for this plugin is that each school represents one of the elements you have defined in the Types database tab.

Schools contain a multitude of settings, all of which will be covered in the Plugin Settings section.  Many of these are optional depending on the features you have enabled.

One of the major components of schools are the skill trees.  These are objects that define skill progress for like skils (IE: Fire -> Fira -> Firaga) and allow to configure how and how far a particular class can delve into the skill trees.

This is accomplished by two settings.  The first is setting up primary and secondary skill tree configurations.

In this plugin a "Primary School" is a school that the character can master, learn all of the spells contain with it.

A "Secondary School" is a school that the character can not master and can only learn up to a specific point within the tree.

The second setting are the Class Grade settings.  These settings are used gate certain spells to certain levels of a mage class.  For example, consider this class tree for mage:

Mage, Warlock, Wizard

You can configre the Mage to be a Grade 1 class, the Warlock to be a Grade 2 class, and the Wizard to be a Grade 3 class.  Then you have used the Grade configurations to set which spells from the tree each class can learn for both Primary and Secondary tree configurations.

Consider a Warlock class configured as a Grade 2 class and a skill tree configured like so:

<ul>
    <li>Primary:</li>
    <ul>
        <li>Grade 1: Fire 1</li>
        <li>Grade 2: Fire 1, Fire 2</li>
        <li>Grade 3: Fire 1, Fire 2, Fire 3</li>
    </ul>
    <li>Secondary:</li>
    <ul>
        <li>Grade 1: Fire 1</li>
        <li>Grade 2: Fire 1</li>
        <li>Grade 3: Fire 1, Fire 2</li>
    </ul>
</ul>


If the character learns the Fire School as a primary school, they will be able to learn both Fire 1 and Fire 2.

However, if the character learns the Fire School as a secondary school, they will only be able to learn Fire 1 and at most as a Wizard be able to learn Fire 2.

More grade can be added via the plugin JS file, specific instructions will be added at a later date.


### Cost Systems
The Item and Gold Cost Systems are optional systems to impose extra requirements on unlocking schools and learning spells.  These costs are calculated via formulas and static values configured within each school and, optionally, within a skill's note tag to supply some additional values for the calculation.

The Gold System is pretty simple, turn it and go.  If you need to modify the formulas or values, check the Plugin Settings section first for important about these and how they are used.

The Item Cost System is a bit more complex.  In addition to the cost formulas and static values you must also set up the item(s) to used as the cost item.  There three settings for this:
    <ul>
        <li>The global cost item which applied to all schools and skills that don't have a cost item assigned</li>
        <li>The school cost item which will override the global cost item and apply to skills that do not have a cost item assigned.</li>
        <li>The skill cost item which wil override the school cost item if assigned in the note tag.</li>
    </ul>

For more information on the settings and note tag attributes, see the respective sections below.


### Information Display Mode
This plugin allows you to change how information is displayed to the player.  For more details on this feature, please see the Spell Info Display Mode plugin setting section below.


### Auto-Unlock
This feature allows you to either set spells to unlock automatically once learned or, if disabled, allows you to work unlock new spells into game mechanics such as spell books, teachers, as rewards for quests, or a multitude of other possibilities.

If this feature is turned off, you will need to use a plugin command to enable the next spell within a tree to be learned.

The functionality of this feature changes a bit if you have the Magic Crafting plugin support turned on and instead of unlocking the spell to be learned through this plugin, it enable the next spell to be crafted.


### Crafting Plugin Support
This plugin was originally designed to work in tandem wiht my Magic Crafting plugin, but along the way during development it was deicded that this plugin should also be able to function on its own.

As such, an optional support feature for the Magic Crafting plugin has been added to this one.  When enabled, before magic be learned, unless set up otherwise, it must first be crafted.

For more information on how to set skills up when using the Magic Crafting plugin along side this one, see the Skill note tag section below.



## Plugin Settings
The following is a list of plugin settings available with this plugin and descriptions of what they are used for.  This also includes the default values in case these need to be restored.


### Main Settings
#### Magic Crafting Support
**Description**<br>
When enabled, enables support for the Magic Crafting plugin which changes
some of the functionality on this plugin.  Mainly, skills, when learned, do not unlock the next skill in a tree to be learned.  Instead, the skill is marked "Craftable" and must be crafted before it can be learned.

This also depend on the Auto-Unlock setting.

**Type**<br>
Boolean (True/False)

**Default**<br>
False


#### Enable Gold Cost System
**Description**<br>
When enabled, activates a cost system that calculates a currency cost to unlock shools and learn spells.

Formulas that are used in these calculations can be found in the settings for each school.

**Type**<br>
Boolean (True/False)

**Default**<br>
False


#### Enable Item Cost System
**Description**<br>
When enabled, activates a cost system that calculates a cost in items to unlock schools and learn spells.

Formuals that are used in these calculations can be found in the settings for each school.

When enabled, some plugin settings become required.  At the very least, the Default Cost Item Id setting is required, but there are also cost item id settings per school and these can also be set per skill.

If there are any skills with a cost item id assigned, these will override the school setting or default settings.

If there any schools with a cost item id assigned, these will override the default setting and be applied to spells within the trees of that school.


**Type**<br>
Boolean (True/False)

**Default**<br>
False<br><br>


#### Default Cost Item Id
**Description**<br>
When the Item Cost System is enabled, this sets the default cost item id to be used by that system.  This setting applies globally to the plugin unless overridden by a lower-level setting (a school cost item id or a skill cost item id setting).

Any school or skill that does not have a cost item id defined will use this item when removing items from the party inventory.


**Type**<br>
Item

**Default**<br>
0


#### Spell Info Display Mode
**Description**<br>
This setting allows you to define how certain information will be displayed to the player.

This setting affects the Spell Information displayed while picking a spell tree to learn from.

There are three Modes:

<ul>
    <li>Mode 0</li>
    <ul>
        This mode is the default mode.  It shows spells that you are able to learn and hides those spells that have yet to be unlocked.
    </ul>
    <li>Mode 1</li>
    <ul>
        In this mode, all spells in a tree are shown, however if a spell is not learnable it will show up with a different text color than ones that can be or have learned.
    </ul>
    <li>Mode 2</li>
    <ul>
        I this mode, all spells in the tree are shown, however if a spell is not learnable it will show up obfuscated based on the obfuscation plugin setting values.
    </ul>
</ul>


Insert Images

**Type**<br>
Number (0, 1, 2)

**Default**<br>
0


#### Obfuscation Character
**Description**<br>
This setting allows you to choose what character is used to hide spell data when the Spell Info Display Mode setting is set to 2.

Some characters might have adverse reactions so be careful when using non-standard or language specific special characters.

**Type**<br>
Text

**Default**<br>
?


#### Max Obfuscation Characters
**Description**<br>
This setting allows you to set the maximum number of characters to use during obfuscation of spell information.  This means that any section of text longer than this setting will be truncated, and only the specified number of characters will be used.

Use this when you want to both hide spell information and prevent the player from being able to guess what the spell names are based on the length of the name.

Example<br>
A skill named Megaflare with obfuscation turned on and a max character setting of 5 will produce the following output:
```
????? (Megaf)
```

**Type**<br>
Number (1-20)

**Default**<br>
1



#### Enable Spell Auto-Unlock
**Description**<br>
When enabled, this setting will automatically unlock the next spell in a tree when a spell has been learned.  When Magic Crafting support is enabled; instead of unlocking the spell in the school tree, the spell is marked as "Craftable" and can be immediatly crafted.

When this setting is disabled, you will be required to manually enable spells via the Enable Learning plugin command for this plugin or the Enable Crafting plugin command if you have support for the Magic Crafting plugin enabled.

**Type**<br>
Boolean (True/False)

**Default**<br>
False



#### Enable Learned Label
**Description**<br>
When enabled, this setting will add a " - Learned" label to spell names in the tree list window spell info so that players can easily keep track of what they have learned from each tree.

**Type**<br>
Boolean (True/False)

**Default**<br>
False



#### Enable Name Aliasing
**Description**<br>
When enabled, this setting allows for long item and spell names to be displayed by an abbrviated name so that they can be properly shown in some plugin windows.

When this is enabled, note tag attributes for skills and items are not required, however, in order for a name to be shortened, a note tag attribute must be added to the skill or item.  More information on these note tags can be found in the respective tag section below.

**Type**<br>
Boolean

**Default**<br>
False



#### Info Formatting
**Description**<br>
Do not change this setting unless you know what you are doing.  This setting sets the formatting used by the plugin to display information within the plugin.  Removing anything from this may result in unexpected behavior or invalid data being shown.


**Type**<br>
Note

**Default**<br>
"<WordWrap>\n%1\n%2\n%3\n%4\n%5\n%6"




#### Requirement Not Met Color
**Description**<br>
This setting sets the text color for when there are requirements that the player doesn't meet when unlocking a school or skill.  The format of the value in this setting is an 8-digit color hex code without the hashtag.

**Type**<br>
Text (ABCDEF)

**Default**<br>
A80000



### School Settings
This section will break down a school setting.  To remove or add school settings from the plugin, please see the Configuration section above where the steps to do so are detailed.  If you need to modify the number of schools needed, please wait until after following those steps before continuing here for help with configuring the school settings.

Each school setting is identified with the word "School" followed by a number.  This number is required and is extremely important for the operation of the plugin.  Below we will cover the School setting object; this object is the same for every school you configure the plugin to have.


#### Name
**Description**<br>
This setting is required<br>
This is the name for the school.  Generally this will be the name of the element that this school represents.

**Type**<br>
Text


#### Trees
This is an inner object that contains the configuration setting for each tree within the school.  To add or remove trees from a school, see the Configuration section above.



##### Id
**Description**<br>
This setting is required<br>
This is the ID for the tree.  This should be the same value as the number in the Tree #.


**Type**<br>
Text



##### Name




## Plugin Commands - Optional
	Optional if there are no plugin commands.

	This section should be used to detail each plugin command available, its usage,
	what each argument is for and the values expected, and should show examples for
	each use case.

### LMP.Plugin Open <Mode> <CharacterId>
	- Mode - Data display mode
		- Valid Values: 0, 1, 2
	- CharacterId - Id of a character in the party

	This plugin command allows you to open a window with the information for the specific character indiciated by the CharacterId argument.  Mode can be supplied to change the way the information is displayed.

	Example:

	```
	LMP.Plugin Open 0 1
	```
		Opens plugin scene in Mode 0 for Character Id 1

## Note Tags - Optional
	Optional if there are no note tags

	This section should be used to exhaustively detail any note tags being used.

### Weapon Note Tag
	This plugin uses note tag attributes on weapons.

#### ClassId:0
	This attribute is optional

	This attribute allows you to set the class that can use this weapon.  The value after : should be the class id.

#### ItemId:0
	This attribute is required if you have turned on the option to have weapons
	complete a follow-up attack with an item.  It is otherwise optional.

	This attribute allows you to set the item that will be used against the target
	when you execute a normal attack on an enemy.  The value after the : should be the item id.

Example:
```
	<LMP_PluginSettings>
	ClassId:10
	ItemId:20
	</LMP_PluginSettings>
```

### Known Issues
	This section should detail any known problems either in general or with specific types of settings and or data set up so that the developer knows about them and can plan around until they are fixed.

### Known Conflicts
	This section should detail if there are any known conflicts and if a compatibility patch is available.


### Planned Features
	This section should detail planned future features and their targeted release version window.

#### Planned Feature 1
	This feature will allow you to turn Therese into a smurf.
	Target Release Version:
		V2.0.1 - V2.2.0


### Changelog
	This is where all versioning information should go.  Any changes, updates, or bug fixes should be listed here.

#### Version 2.0.1
##### Changes
	- Changed plugin setting type from string to true/false
	- Updated default value for plugin setting to 10 from 2
	- Addede a new plugin setting to control the color of the window
		- Supply a starting and ending hex color code

##### Bugs Fixed
	- Fixed a bug there having Therese in your party turned everyone else into smurfs.
	- Fixed issue where characters flagged to become smurfs was not updating in the character data.
		- ***This impacts save files***