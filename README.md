# Main Header - This is the name for the plugin
	Version Number: V2.0.0<br>
	[Project](http://www.lmpgames.com/RRMV/Plugins/LMPGames_MagicSchools_ProjectV2.0.0.zip)<br>
	[Demo](http://www.lmpgames.com/RRMV/Plugins/LMPGames_MagicSchools_DemoV2.0.0.zip)<br>
	Conflicts: Unknown<br>
	Terms of Use: Free for commercial and non-commercial use; accreditation required.  Game keys/downloads, while not required, are welcome.

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
		YEP_MessageCore - YanFly Message Core
		YEP_X_ExtMesPack1 - YanFly Message Core Extension Pack 1

	Optional Plugins:
		LMPGames_MagicCrafting - LMPGames Magic Crafting
			This is required if you enable the Crafting Support plugin setting

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

	Primary:
		Grade 1: Fire 1
		Grade 2: Fire 1, Fire 2
		Grade 3: Fire 1, Fire 2, Fire 3

	Secondary:
		Grade 1: Fire 1
		Grade 2: Fire 1
		Grade 3: Fire 1, Fire 2

	If the character learns the Fire School as a primary school, they will be able to learn both Fire 1 and Fire 2.

	However, if the character learns the Fire School as a secondary school, they will only be able to learn Fire 1 and at most as a Wizard be able to learn Fire 2.

	More grade can be added via the plugin JS file, specific instructions will be added at a later date.


### Cost Systems
	The Item and Gold Cost Systems are optional systems to impose extra requirements on unlocking schools and learning spells.  These costs are calculated via formulas and static values configured within each school and, optionally, within a skill's note tag to supply some additional values for the calculation.

	The Gold System is pretty simple, turn it and go.  If you need to modify the formulas or values, check the Plugin Settings section first for important about these and how they are used.

	The Item Cost System is a bit more complex.  In addition to the cost formulas and static values you must also set up the item(s) to used as the cost item.  There three settings for this:
		- The global cost item which applied to all schools and skills that don't have a cost item assigned
		- The school cost item which will override the global cost item and apply to skills that do not have a cost item assigned.
		- The skill cost item which wil override the school cost item if assigned in the note tag.

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
	Optional if there are no plugin settings.

	This section should be used to detail each plugin setting, its usage, valid values or at least expected values.

	If a setting is a mode setting, explain each mode's function and include visual aid where possible.

### Plugin Setting 1
	Allows you to make each character in a text box a different color as defined in the list of color hex codes in this setting.

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
