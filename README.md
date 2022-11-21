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
	This section is for a short description of the plugin and what does.

## Installation Instructions
	This section is for detailing how to install the plugin into a project.

## Requirements -- Optional
	If needed, this section can be used to identify other required plugins for this
	plugin.

## How does it Work?
	This section should be a somewhat more detailed version of the What is This section.

## Features
	This section should be broken down into subsections for each of the features
	that the plugin prodives.

### Feature 1
	This feature allows you to add random pokemon to your game.  Good luck not getting sued by Nintendo.


## Plugin Settings - Optional
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
