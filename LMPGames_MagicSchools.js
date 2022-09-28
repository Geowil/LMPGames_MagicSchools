/*:
* @plugindesc Enables magic schools system.  Replaces magic learning with a new system
* @author LMPGames
*
*
* @param Enable Gold Cost System
* @desc When enabled, makes learning schools and spells
* require gold as as well as skill level.
* @type boolean
* @default false
*
*
* @param Enable Item Cost System
* @desc When enabled, makes learning schools and spells
* require items as as well as skill level.
* @type boolean
* @default false
*
*
* @param Enable Spell Auto-Unlock
* @desc When enabled, will allow the next spell in the same tree to be unlocked automatically.  See gitHub for more info.
* @type boolean
* @default false
*
*
* @param Spell Info Display Mode
* @desc Sets how the spell list while selecting a tree is displayed.  See GitHub for more info.
* @type number
* @min 0
* @max 2
* @default 0
*
*
* @param Obfuscation Character
* @desc When display mode 2 is enabled, sets the character used to hide skill names when selecting a tree.
* @type text
* @default ?
*
*
* @param Max Obfuscation Characters
* @desc When display mode 2 is enabled, this sets the max number of characters to use when hiding skill names.
* @type number
* @min 0
* @max 20
* @default 0
*
*
* @param Default Cost Item Id
* @desc Sets the item Id for the default cost item for the Item Cost system.
* @type item
* @default 0
*
*
* @param Enable Magic Crafting support
* @desc When enabled, prevents skills from showing in the
* school selection list until they have been crafted
* @type boolean
* @default false
*
*
* @param Enable Learned Label
* @desc When enabled, shows which spells in the spell info window of the
* tree list view are already learned.
* @type boolean
* @default false
*
*
* @param Info Formatting
* @desc Formatting for spell blueprint info display
* @type note
* @default "<WordWrap>\n%1\n%2\n%3\n%4\n%5\n%6"
*
*
* @param Requirement Not Met Color
* @desc Sets the color used when the player has cannot
* use a catalyst when crafting
* @type text
* @default A80000
*
*
* @param School 1
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 2
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 3
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 4
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 5
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 6
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 7
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @param School 8
* @desc Allows you to define a magic spell schools
* @type struct<School>
* @default {}
*
*
* @help
*
*
*
*/

/*~struct~School:
* @param Name
* @desc Sets the name for this school
* @type text
* @default School Name
*
*
* @param Trees
* @desc Allows you to define the magic spell trees for this
* school.
* @type struct<Trees>
* @default {}
*
*
* @param Cost Item Id
* @desc If set, this setting will override default global setting for this school
* @type item
* @default 0
*
* @param Primary School Configuration
* @default
*
*
* @param Initial Primary School Spell Gold Formula
* @desc Sets formula used to calc gold cost when learning a skill
* in the initial primary school
* @type text
* @default Math.ceil((baseCost/1.5)+((skLvl*(baseCost/1.5))/costMod))
* @parent Primary School Configuration
*
*
* @param Initial Primary School Spell Base Cost
* @desc Sets the base spell learn cost for
* the initial primary school spells.
* @type text
* @default 100
* @parent Primary School Configuration
*
*
* @param Initial Primary School Spell Cost Modifier
* @desc Sets a cost modifier to alter spell learn cost for
* the initial primary school spells.
* @type text
* @default 125
* @parent Primary School Configuration
*
*
* @param Initial Primary School Spell Item Base Cost
* @desc Sets the base cost in items to unlock a spell in the initial pri. school
* @type text
* @default 5
* @parent Primary School Configuration
*
*
* @param Initial Primary School Spell Item Cost Modifier
* @desc Sets the cost mod in items to unlock a spell in the initial pri. school.
* @type text
* @default 2
* @parent Primary School Configuration
*
*
* @param Initial Primary School Spell Item Formula
* @desc Sets the item cost formula for spells in the initial pri. school
* @type text
* @default Math.ceil((baseCost/1.5)+((skLvl*(baseCost/1.5))/costMod))
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Cost Modifier
* @desc Sets a cost modifier to alter spell learn cost for
* additional primary schools
* @type text
* @default 175
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Base Cost
* @desc Sets the base spell learn cost for
* the additional primary school spells.
* @type text
* @default 300
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Item Base Cost
* @desc Sets the base cost in items to unlock a spell in tadditional pri. schools
* @type text
* @default 10
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Item Cost Modifier
* @desc Sets the cost mod in items to unlock a spell in additional pri. schools.
* @type text
* @default 3
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Item Formula
* @desc Sets the item cost formula for spells in additional pri. schools
* @type text
* @default Math.ceil(baseCost+(sklLvl/skillCostMod))
* @parent Primary School Configuration
*
*
* @param Additional Primary School Spell Gold Formula
* @desc Sets the item cost formula for spells in additional pri. schools
* @type text
* @default Math.ceil(baseCost+(sklLvl/skillCostMod))
* @parent Primary School Configuration
*
*
* @param Additional Primary School Gold Formula
* @desc Sets formula used to calc gold cost When
* unlocking additonal primary schools.
* @type text
* @default Math.ceil(baseCost*(numOfSchools+schoolMulti)*(costMod**(numOfSchools/5)))
* @parent Primary School Configuration
*
*
* @param Additional Primary School Cost Modifier
* @desc Sets a cost modifier to alter school unlock cost
* for additional primary schools
* @type text
* @default 375
* @parent Primary School Configuration
*
*
* @param Additional Primary School Base Cost
* @desc Sets the base school unlock cost for
* the additional primary schools.
* @type text
* @default 1500
* @parent Primary School Configuration
*
*
* @param Additional Primary School Cost Multi
* @desc Sets the cost multiplier for additional primary schools.
* @type text
* @default 120
* @parent Primary School Configuration
*
*
* @param Additional Primary School Item Base Cost
* @desc Sets the base cost in items to unlock an additonal pri. school.
* @type text
* @default 5
* @parent Primary School Configuration
*
*
* @param Additional Primary School Item Cost Modifier
* @desc Sets the cost mod in items to unlock an additonal pri. school.
* @type text
* @default 2
* @parent Primary School Configuration
*
*
* @param Additional Primary School Item Cost Multi
* @desc Sets the item cost multiplier for additional primary schools.
* @type text
* @default 120
* @parent Primary School Configuration
*
*
* @param Additional Primary School Item Formula
* @desc Sets the item cost formula for additonal pri. schools.
* @type text
* @default Math.ceil(baseCost*(numOfSchools+schoolMulti)*(schoolCostMod**(numOfSchools/5)))
* @parent Primary School Configuration
*
*
* @param Secondary School Configuration
* @default
*
*
* @param Secondary School Gold Formula
* @desc Sets formula used to calc gold cost to unlock a
* secondary school.
* @type text
* @default Math.ceil((baseCost/2)*(numOfSchools+schoolMulti)*(costMod**(numOfSchools/5)))
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Gold Formula
* @desc Sets formula used to calc gold cost for learning secondary school spells.
* @type text
* @default Math.ceil((baseCost/2)+((sklLvl*(baseCost/4))/skillCostMod))
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Cost Modifier
* @desc Sets a cost modifier to alter spell learn cost for
* secondary schools
* @type text
* @default 135
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Item Base Cost
* @desc Sets the base cost in items to unlock a spell in secondary schools
* @type text
* @default 15
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Item Cost Modifier
* @desc Sets the cost mod in items to unlock a spell in secondary schools
* @type text
* @default 4
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Item Formula
* @desc Sets the item cost formula for spells in secondary schools
* @type text
* @default Math.ceil((baseCost/2)+((sklLvl*(baseCost/4))/skillCostMod))
* @parent Secondary School Configuration
*
*
* @param Secondary School Spell Base Cost
* @desc Sets the base spell learn cost for
* the secondary school spells.
* @type text
* @default 500
* @parent Secondary School Configuration
*
*
* @param Secondary School Cost Modifier
* @desc Sets a cost modifier to alter unlock cost
* for secondary schools
* @type text
* @default 265
* @parent Secondary School Configuration
*
*
* @param Secondary School Cost Multi
* @desc Sets a cost multiplier to alter unlock cost
* for secondary schools
* @type text
* @default 95
* @parent Secondary School Configuration
*
*
* @param Secondary School Base Cost
* @desc Sets the base school unlock cost for
* the secondary schools.
* @type text
* @default 750
* @parent Secondary School Configuration
*
*
* @param Secondary School Item Base Cost
* @desc Sets the base cost in items to unlock an additonal pri. school.
* @type text
* @default 5
* @parent Secondary School Configuration
*
*
* @param Secondary School Item Cost Modifier
* @desc Sets the cost mod in items to unlock an additonal pri. school.
* @type text
* @default 2
* @parent Secondary School Configuration
*
*
* @param Secondary School Item Cost Multi
* @desc Sets an item cost multiplier to alter unlock cost
* for secondary schools
* @type text
* @default 4
* @parent Secondary School Configuration
*
*
* @param Secondary School Item Formula
* @desc Sets the item cost formula for additonal pri. schools.
* @type text
* @default Math.ceil((baseCost/2)*(numOfSchools+schoolMulti)*(costMod**(numOfSchools/5)))
* @parent Secondary School Configuration
*/

/*~struct~Trees:
* @param Tree1
* @desc Allows you to define a magic spell tree for this
* school.
* @type struct<Tree>
* @default {}
*
*
* @param Tree2
* @desc Allows you to define a magic spell tree for this
* school.
* @type struct<Tree>
* @default {}
*
*
* @param Tree3
* @desc Allows you to define a magic spell tree for this
* school.
* @type struct<Tree>
* @default {}
*
*
* @param Tree4
* @desc Allows you to define a magic spell tree for this
* school.
* @type struct<Tree>
* @default {}
*
*
* @param Tree5
* @desc Allows you to define a magic spell tree for this
* school.
* @type struct<Tree>
* @default {}
*/

/*~struct~Tree:
* @param Id
* @desc Sets the tree id; must be unique within the school
* @type text
* @default 1
*
*
* @param Name
* @desc Name for this tree
* @type text
* @default Tree Name
*
*
* @param TreeConfig
* @desc Defines all of the skills present in this tree
* @type Number[]
*
*
* @param PrimaryGradeConfig
* @desc Allows you to set the primary school grade
* skill config for this school
* @type struct<SchoolGradeConfig>
* @default
*
*
* @param SecondaryGradeConfig
* @desc Allows you to set the secondary school grade
* skill config for this school
* @type struct<SchoolGradeConfig>
* @default
*/

/*~struct~SchoolGradeConfig:
* @param GradeConfig1
* @desc Allows you to setup which skills in the tree
* can be learned by a specific class grade
* @type struct<Grade>
* @default
*
*
* @param GradeConfig2
* @desc Allows you to setup which skills in the tree
* can be learned by a specific class grade
* @type struct<Grade>
* @default
*
*
* @param GradeConfig3
* @desc Allows you to setup which skills in the tree
* can be learned by a specific class grade
* @type struct<Grade>
* @default
*/

/*~struct~Grade:
* @param GradeId
* @desc Sets the class grade this config is used for
* @type text
* @default 1
*
* @param Config
* @desc Sets up the skills a specific class grade can learn
* @type Number[]
*/

var LMPGames = LMPGames || {};
const lmpGamesMagicSchoolsParams = PluginManager.parameters('LMPGames_MagicSchools');

//Window/Scene defines
function Scene_MagicSchools() { this.initialize.apply(this, arguments); };
function Window_ShoolCharList() { this.initialize.apply(this, arguments); };
function Window_SchoolMain() { this.initialize.apply(this, arguments); };
function Window_SchoolTypeList() { this.initialize.apply(this, arguments); };
function Window_SchoolList() { this.initialize.apply(this, arguments); };
function Window_SchoolTreeList() { this.initialize.apply(this, arguments); };
function Window_SchoolSpellList() { this.initialize.apply(this, arguments); };
function Window_SchoolLimits() { this.initialize.apply(this, arguments); };
function Window_SchoolCost() { this.initialize.apply(this, arguments); };
function Window_SchoolInfo() { this.initialize.apply(this, arguments); };
function Window_SchoolCommand() { this.initialize.apply(this, arguments); };


//Params
var bEnableGoldCost = (lmpGamesMagicSchoolsParams['Enable Gold Cost System'] === "true");
var bEnableItemCost = (lmpGamesMagicSchoolsParams['Enable Item Cost System'] === "true");
var bEnableMagicCrafting = (lmpGamesMagicSchoolsParams['Enable Magic Crafting support'] === "true");
var mainInfoFmtTxt = lmpGamesMagicSchoolsParams['Info Formatting'];
var bShowLearnedLabel = (lmpGamesMagicSchoolsParams['Enable Learned Label'] === "true")
var defaultCostItmId = parseInt(lmpGamesMagicSchoolsParams['Default Cost Item Id']);
var spellListDispMode = parseInt(lmpGamesMagicSchoolsParams['Spell Info Display Mode']);
var obfuscationChar = lmpGamesMagicSchoolsParams['Obfuscation Character'];
var reqNotMetColor = lmpGamesMagicSchoolsParams['Requirement Not Met Color'];
var maxObfuscationChars = parseInt(lmpGamesMagicSchoolsParams['Max Obfuscation Characters']);
var bDataWasLoaded = false;
var bEnableAutoUnlock = (lmpGamesMagicSchoolsParams['Enable Apell Auto-Unlock']);
var $magicSchoolsData = {};

var occLst = ["Always", "In Battle", "Out of Battle", "Never"];
var hitTypLst = ["Always Hits", "Normal", "Uses Mag Evasion"];
var dmgTypLst = ["None","HP Damage", "MP Damage", "Recover HP", "Recover MP", "Drain HP", "Drain MP"];
var specEffLst = ["Escape"];
var stScopeList = ["None", "Attack an Enemy", "Attack Anyone", "Attack an Ally", "Cannot Move"];
var stRmvTimingList = ["None", "After next turn", "After current turn"];
var scopeLst = [
	"None","1 Enemy", "All Enemies", "1 Random Enemy", "2 Random Enemies",
	"3 Random Enemies", "4 Random Enemies", "1 Ally", "All Allies",
	"1 Ally (Dead)", "All Allies (Dead)", "Self"
];

/* DataManager Aliases and Functions */
var lmpGamesMagicSchools_DataManager_MakeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function(){
	var contents = lmpGamesMagicSchools_DataManager_MakeSaveContents.call(this);

	contents.magicSchools = $magicSchoolsData;
	return contents;
}

var lmpGamesMagicSchools_DataManager_ExtractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	lmpGamesMagicSchools_DataManager_ExtractSaveContents.apply(this,arguments);
	bDataWasLoaded = true;
	$magicSchoolsData = contents.magicSchools;
};


var lmpGamesMagicSchools_DataManager_IsDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function(){
	if (!lmpGamesMagicSchools_DataManager_IsDatabaseLoaded.call(this)) { return false;}
	this.loadMagicSchoolsNoteTags();
	return true;
};

DataManager.loadMagicSchoolsNoteTags = function(){
	$dataClasses = this.processMagicSchoolsNoteTags($dataClasses, "class");
	$dataSkills = this.processMagicSchoolsNoteTags($dataSkills, "skill");
	$dataActors = this.processActorData($dataActors);
};

DataManager.processMagicSchoolsNoteTags = function(dataObj, typ){
	for(let obj of dataObj){
		if (obj){
			if (typ == "class"){
				obj["UsesSchools"] = false;
				obj["MaxPrimarySchools"] = 0;
				obj["MaxSecondarySchools"] = 0;
				obj["ClassGrade"] = 0;
			} else if (typ == "skill"){
				obj["CanLearn"] = false;
				obj["ReqLevel"] = 0;
				obj["CostItemId"] = 0;
				obj["GoldCostMod"] = 0;
				obj["ItemCostMod"] = 0;
			}

			if (obj.note != undefined && obj.note != ""){
				let noteData = obj.note.split(/[\r\n]+/);
				if (noteData){
					let bStartMagicSchoolsTag = false;
					let bEndMagicSchoolsTag = false;

					for (let noteLine of noteData){
						switch (noteLine){
							case '<MagicSchools>':
								bStartMagicSchoolsTag = true;
								break;
							case '</MagicSchools>':
								bEndMagicSchoolsTag = true;
								break;
							default:
								if (bStartMagicSchoolsTag){
									let noteLines = noteLine.split(":");
									if (noteLines[0] == 'UsesSchools'){ //Classes
										obj.UsesSchools = true;
									} else if (noteLines[0] == "MaxPrimarySchools"){
										obj.MaxPrimarySchools = parseInt(noteLines[1]);
									} else if (noteLines[0] == "MaxSecondarySchools"){
										obj.MaxSecondarySchools = parseInt(noteLines[1]);
									} else if (noteLines[0] == "ClassGrade"){
										obj.ClassGrade = parseInt(noteLines[1]);
									} else if (noteLines[0] == 'CanLearn'){ //Skills'
										obj.CanLearn = true;
									} else if (noteLines[0] == 'ReqLevel'){
										obj.ReqLevel = parseInt(noteLines[1]);
									} else if (noteLines[0] == 'CostItemId'){
										obj.CostItemId = parseInt(noteLines[1]);
									} else if (noteLines[0] == 'GoldCostMod'){
										obj.GoldCostMod = parseInt(noteLines[1]);
									} else if (noteLines[0] == 'ItemCostMod'){
										obj.ItemCostMod = parseInt(noteLines[1]);
									}
								}

								break;
						}

						if (bEndMagicSchoolsTag) {
							break;
						}
					}
				}
			}

			dataObj[obj.id] = obj;
		}
	}

	return dataObj;
}

DataManager.processActorData = function($dataActors){
	let clsId = 0;

	for (let i1 = 0; i1 < $dataActors.length; i1++){
		let currAct = $dataActors[i1];

		if (currAct){
			clsId = currAct.classId;
			let clsData = $dataClasses.find(cls => cls && cls.id == clsId);

			if (clsData.UsesSchools){
				currAct.UsesSchools = true;
				currAct._magicSchoolsData = {};
				currAct._magicSchoolsData[clsId] = {
					"PrimarySchools":{},
					"SecondarySchools":{}
				}
			} else {
				currAct.UsesSchools = false;
			}
		}
	}

	return $dataActors;
}

DataManager.createMagicSchoolsData = function(){
	if (!bDataWasLoaded){
		this.buildMagicSchoolsData();
	}
}

DataManager.buildMagicSchoolsData = function(){
	let bMagicSchoolDataCreated = false;
	let i1 = 1;
	let maxSchools = Object.keys(lmpGamesMagicSchoolsParams).filter(key => key.contains("School") &&
		!key.contains("Additional") && !key.contains("Initial") && !key.contains("Secondary")).length;

	while (!bMagicSchoolDataCreated){
		let currSchool = lmpGamesMagicSchoolsParams['School ' + i1];
		let parsedSchool = JSON.parse(currSchool);

		if (Object.keys(parsedSchool).length > 0){
			let newSchool = {
				"Name" : parsedSchool.Name,
				"Trees" : {},
				"PrimaryConfig" : {},
				"SecondaryConfig" : {},
				"CostItemId": parseInt(parsedSchool["Cost Item Id"])
			};

			//Setup Pri/Sec Configs
			let initPriSchSpellBaseCost = parseInt(parsedSchool["Initial Primary School Spell Base Cost"]);
			let initPriSchSpellItmBaseCost = parseInt(parsedSchool["Initial Primary School Spell Item Base Cost"]);
			let initPriSchSpellCostMod = parseInt(parsedSchool["Initial Primary School Spell Cost Modifier"]);
			let initPriSchSpellItmCostMod = parseInt(parsedSchool["Initial Primary School Spell Item Cost Modifier"]);
			let priSchSpellCurrFormula = parsedSchool["Initial Primary School Spell Gold Formula"];
			let priSchSpellItmFormula = parsedSchool["Initial Primary School Spell Item Formula"];
			let addtPriSchBaseCost = parseInt(parsedSchool["Additional Primary School Base Cost"]);
			let addtPriSchItmBaseCost = parseInt(parsedSchool["Additional Primary School Item Base Cost"]);
			let addtPriSchCostMod = parseInt(parsedSchool["Additional Primary School Cost Modifier"]);
			let addtPriSchCostMulti = parseInt(parsedSchool["Additional Primary School Cost Multi"]);
			let addtPriSchItmCostMod = parseInt(parsedSchool["Additional Primary School Item Cost Modifier"]);
			let addtPriSchItmCostMulti = parseInt(parsedSchool["Additional Primary School Item Cost Multi"]);
			let priSchCurrFormula = parsedSchool["Additional Primary School Gold Formula"];
			let priSchItmFormula = parsedSchool["Additional Primary School Item Formula"];
			let addtPriSchSpellBaseCost = parseInt(parsedSchool["Additional Primary School Spell Base Cost"]);
			let addtPriSchSpellItmBaseCost = parseInt(parsedSchool["Additional Primary School Spell Item Base Cost"]);
			let addtPriSchSpellCostMod = parseInt(parsedSchool["Additional Primary School Spell Cost Modifier"]);
			let addtPriSchSpellItmCostMod = parseInt(parsedSchool["Additional Primary School Spell Item Cost Modifier"]);

			let secdSchBaseCost = parseInt(parsedSchool["Secondary School Base Cost"]);
			let secdSchItmBaseCost = parseInt(parsedSchool["Secondary School Item Base Cost"]);
			let secdSchCostMod = parseInt(parsedSchool["Secondary School Cost Modifier"]);
			let secdSchCostMulti = parseInt(parsedSchool["Secondary School Cost Multi"]);
			let secdSchItmCostMod = parseInt(parsedSchool["Secondary School Item Cost Modifier"]);
			let secdSchItmCostMulti = parseInt(parsedSchool["Secondary School Item Cost Multi"]);
			let secdSchCurrFormula = parsedSchool["Secondary School Gold Formula"];
			let secdSchItmFormula = parsedSchool["Secondary School Item Formula"];
			let secdSchSpellBaseCost = parseInt(parsedSchool["Secondary School Spell Base Cost"]);
			let secdSchSpellItmBaseCost = parseInt(parsedSchool["Secondary School Spell Item Base Cost"]);
			let secdSchSpellCostMod = parseInt(parsedSchool["Secondary School Spell Cost Modifier"]);
			let secdSchSpellItmCostMod = parseInt(parsedSchool["Secondary School Spell Item cost Modifier"]);
			let secdSchSpellCurrFormula = parsedSchool["Secondary School Spell Gold Formula"];
			let secdSchSpellItmFormula = parsedSchool["Secondary School Spell Item Formula"];

			newSchool.PrimaryConfig.initSchSpellBase = initPriSchSpellBaseCost;
			newSchool.PrimaryConfig.initSchSpellItmBase = initPriSchSpellItmBaseCost;
			newSchool.PrimaryConfig.initSchSpellMod = initPriSchSpellCostMod;
			newSchool.PrimaryConfig.initSchSpellItmMod = initPriSchSpellItmCostMod;
			newSchool.PrimaryConfig.initSchSpellCurrForm = priSchSpellCurrFormula;
			newSchool.PrimaryConfig.initSchSpellItmForm = priSchSpellItmFormula;
			newSchool.PrimaryConfig.addtSchBase = addtPriSchBaseCost;
			newSchool.PrimaryConfig.addtSchItmBase = addtPriSchItmBaseCost;
			newSchool.PrimaryConfig.addtSchMod = addtPriSchCostMod;
			newSchool.PrimaryConfig.addtSchMulti = addtPriSchCostMulti;
			newSchool.PrimaryConfig.addtSchItmMod = addtPriSchItmCostMod;
			newSchool.PrimaryConfig.addtSchItmMulti = addtPriSchItmCostMulti;
			newSchool.PrimaryConfig.schCurrForm = priSchCurrFormula;
			newSchool.PrimaryConfig.schItmForm = priSchItmFormula;
			newSchool.PrimaryConfig.addtSchSpellBase = addtPriSchSpellBaseCost;
			newSchool.PrimaryConfig.addtSchSpellItmBase = addtPriSchSpellItmBaseCost;
			newSchool.PrimaryConfig.addtSchSpellMod = addtPriSchSpellCostMod;
			newSchool.PrimaryConfig.addtSchSpellItmMod = addtPriSchSpellItmCostMod;

			newSchool.SecondaryConfig.schBase = secdSchBaseCost;
			newSchool.SecondaryConfig.schItmBase = secdSchItmBaseCost;
			newSchool.SecondaryConfig.schMod = secdSchCostMod;
			newSchool.SecondaryConfig.schMulti = secdSchCostMulti;
			newSchool.SecondaryConfig.schItmMod = secdSchItmCostMod;
			newSchool.SecondaryConfig.schItmMulti = secdSchItmCostMulti;
			newSchool.SecondaryConfig.schCurrForm = secdSchCurrFormula;
			newSchool.SecondaryConfig.schItmForm = secdSchItmFormula;
			newSchool.SecondaryConfig.schSpellBase = secdSchSpellBaseCost;
			newSchool.SecondaryConfig.schSpellItmBase = secdSchSpellItmBaseCost;
			newSchool.SecondaryConfig.schSpellMod = secdSchSpellCostMod;
			newSchool.SecondaryConfig.schSpellItmMod = secdSchSpellItmCostMod;
			newSchool.SecondaryConfig.schSpellCurrForm = secdSchSpellCurrFormula;
			newSchool.SecondaryConfig.schSpellItmForm = secdSchSpellItmFormula;

			let parsedTrees = JSON.parse(parsedSchool.Trees);
			let newTrees = {};

			for (let treeKey of Object.keys(parsedTrees)){
				let currTree = JSON.parse(parsedTrees[treeKey]);
				if (Object.keys(currTree).length > 0){
					let newTree = {
						"Id" : currTree.Id,
						"Name" : currTree.Name,
						"TreeConfig" : JSON.parse(currTree.TreeConfig),
						"PrimaryGradeConfig" : {},
						"SecondaryGradeConfig" : {}
					}

					let parsedPriGradeConfig = JSON.parse(currTree.PrimaryGradeConfig);
					let parsedSecondaryGradeConfig = JSON.parse(currTree.SecondaryGradeConfig);
					let newPriGradeConfig = {};
					let newSecGradeConfig = {};

					for (let gradeKey of Object.keys(parsedPriGradeConfig)){
						let currGradeConfig = JSON.parse(parsedPriGradeConfig[gradeKey]);

						newPriGradeConfig[gradeKey] = {
							"GradeId" : currGradeConfig.GradeId,
							"Config" : JSON.parse(currGradeConfig.Config)
						};

					}

					for (let gradeKey of Object.keys(parsedSecondaryGradeConfig)){
						let currGradeConfig = JSON.parse(parsedSecondaryGradeConfig[gradeKey]);

						newSecGradeConfig[gradeKey] = {
							"GradeId" : currGradeConfig.GradeId,
							"Config" : JSON.parse(currGradeConfig.Config)
						};
					}

					newTree.PrimaryGradeConfig = newPriGradeConfig;
					newTree.SecondaryGradeConfig = newSecGradeConfig;
					newTrees[newTree.Id] = newTree;
				}
			}

			newSchool.Trees = newTrees;
			$magicSchoolsData[i1] = newSchool;
		}

		if (i1 == maxSchools){
			bMagicSchoolDataCreated = true;
		} else {
			i1++;
		}
	}
}

/* Game_Interpreter Functions and Aliases */
var lmpGamesMagicSchools_GameInterpreter_PluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
	var matches = [];

	if (command === 'LMP.MagicSchools'){
		for (var i1 = 0; i1 < args.length; i1++){
			command += " " + args[i1];
		}

		if (command.match(/LMP.MagicSchools[ ]Open/)){
			matches = ((/LMP.Request[ ]Open/).exec(command) || []);

			if (matches){
				SceneManager.push(Scene_MagicSchools);
			}
		}else if (command.match(/LMP.MagicSchools[ ]EnableLearning[ ](\d+)/)){
			matches = ((/LMP.Request[ ](\d+)[ ](\w+)/).exec(command) || []);
			if (matches){
				mschoolsUnlockSkill(matches[2]);
			}
		}
	} else {
		lmpGamesMagicSchools_GameInterpreter_PluginCommand.call(this, command, args);
	}
}

function mschoolsUnlockSkill(skillId){
	let skill = $dataSkills.find(sk => sk && sk.id == skillId);
	skill.CanLearn = true;
}


/* Game_Actor Functions */
var lmpGamesMagicSchools_GameActor_InitMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function(){
	lmpGamesMagicSchools_GameActor_InitMembers.call(this);
	this._magicSchoolsData = {};
}

var lmpGamesMagicSchools_GameActor_Setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId){
	lmpGamesMagicSchools_GameActor_Setup.call(this, actorId);
	let actorData = $dataActors[actorId];

	if (actorData._magicSchoolsData && Object.keys(actorData._magicSchoolsData).length > 0){
		this._magicSchoolsData = actorData._magicSchoolsData;
	}
}

var lmpGamesMagicSchools_GameActor_ChangeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp){
	lmpGamesMagicSchools_GameActor_ChangeClass.call(this, classId, keepExp);

	let currClass = $dataClasses.find(cls => cls && cls.id == this._classId);
	if (currClass.UsesSchools){
		this.getLearnedSkills();
	}
}

Game_Actor.prototype.getLearnedSkills = function(){
	let schoolsData = this._magicSchoolsData[this._classId];
	let schoolSkills = [];

	let primarySchools = schoolsData.PrimarySchools;
	let secondarySchools = schoolsData.SecondarySchools;

	if (Object.keys(primarySchools).length > 0){
		for (let schoolId of Object.keys(primarySchools)){
			let currSchool = primarySchools[schoolId];

			if (Object.keys(currSchool.Trees).length > 0){
				for (let treeId of Object.keys(currSchool.Trees)){
					let currTree = currSchool.Trees[treeId];

					if (currTree.Spells.length > 0){
						schoolSkills = schoolSkills.concat(currTree.Spells);
					}
				}
			}
		}
	}

	if (Object.keys(secondarySchools).length > 0){
		for (let schoolId of Object.keys(secondarySchools)){
			let currSchool = secondarySchools[schoolId];

			if (Object.keys(currSchool.Trees).length > 0){
				for (let treeId of Object.keys(currSchool.Trees)){
					let currTree = currSchool.Trees[treeId];

					if (currTree.Spells.length > 0){
						schoolSkills = schoolSkills.concat(currTree.Spells);
					}
				}
			}
		}
	}

	this._skills = this._skills.concat(schoolSkills);
}

/* Scene_MagicSchools Functions */
Scene_MagicSchools.prototype = Object.create(Scene_MenuBase.prototype);
Scene_MagicSchools.prototype.constructor = Scene_MagicSchools;

Scene_MagicSchools.prototype.initialize = function(){
	Scene_MenuBase.prototype.initialize.call(this);
	ImageManager.loadFace($gameParty.menuActor().faceName());

	this._schoolCharSelectWnd = undefined;
	this._schoolMainWnd = undefined;
	this._schoolSchTypeListWnd = undefined;
	this._schoolSchListWnd = undefined;
	this._schoolTreeListWnd = undefined;
	this._schoolSpellListWnd = undefined;
	this._schoolGoldWnd = undefined;
	this._schoolInfoWnd = undefined;
	this._schoolCmdWnd = undefined;
	this._schoolLimitsWnd = undefined;
	this._schoolCostWnd = undefined;
	this._sceneMode = 0;
	this._selectedSchoolId = 0;
	this._selectedTreeId = 0;
	this._selectedSchoolType = 0;
	this._selectedSkillId = 0;
	this._actorId = 0;
	this._selAct = {};
	this._classId = 0;
	this._goldCost = 0;
	this._itemCost = 0;
	this._itemData = {};
}

Scene_MagicSchools.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);

	this.createWindows();

	this._schoolCharSelectWnd.show();
	this._schoolCharSelectWnd.activate();
	this._schoolCharSelectWnd.select(0);
}

Scene_MagicSchools.prototype.createWindows = function(){
	this.createHelpWindow();
	this.createCharSelectWindow();
	this.createInfoWindow();
	this.createMainWindow();
	this.createSchoolCostWindow();
	this.createSchoolLimitsWindow();
	this.createSchoolGoldWindow();
	this.createSchoolTypeListWindow();
	this.createSchoolListWindow();
	this.createSchoolTreeListWindow();
	this.createSpellListWindow();
	this.createSchoolCmdWindow();
}

Scene_MagicSchools.prototype.createCharSelectWindow = function() {
	let x = 0;
	let y = this._helpWindow.height + 10

	let h = 250;
	let w = 420;

	this._schoolCharSelectWnd = new Window_SchoolCharSelect(x, y, this._helpWindow.height);
	this._schoolCharSelectWnd.setHandler('ok', this.schoolCharSelected.bind(this));
	this._schoolCharSelectWnd.setHandler('cancel', this.exitSchoolScene.bind(this));
	this._schoolCharSelectWnd.loadImages();
	this._schoolCharSelectWnd.hide();
	this.addWindow(this._schoolCharSelectWnd);
}

Scene_MagicSchools.prototype.schoolCharSelected = function(){
	this._actorId = this._schoolCharSelectWnd.getSelectedActor();
	this._selAct = $gameActors._data.find(act => act && act._actorId == this._actorId);
	this._classId = this._selAct._classId;

	this._schoolCharSelectWnd.deselect();
	this._schoolCharSelectWnd.deactivate();
	this._schoolCharSelectWnd.hide();

	this._schoolMainWnd.setActorData(this._selAct);
	this._schoolSchTypeListWnd.setActorData(this._selAct);
	this._schoolSchListWnd.setActorData(this._selAct);

	this._schoolMainWnd.show();
	this._schoolMainWnd.activate();
	this._schoolMainWnd.select(0);

	this._schoolInfoWnd.show();

	if (bEnableGoldCost){
		this._schoolGoldWnd.show();
	}

	this._schoolLimitsWnd.setActorData(this._selAct);
	this._schoolLimitsWnd.show();
}

Scene_MagicSchools.prototype.exitSchoolScene = function() { SceneManager.pop(); }
Scene_MagicSchools.prototype.createInfoWindow = function() {
	let x = 288 + 10;
	let y = this._helpWindow.height + 10;
	let w = Graphics.width - x;
	let h = Graphics.height - y - 90;

	this._schoolInfoWnd = new Window_SchoolInfo(x, y, w, h);
	this._schoolInfoWnd.setHandler('ok', this.openSchoolCmd.bind(this));
	this._schoolInfoWnd.setHandler('cancel', this.schoolGoBackToSpellSelect.bind(this));
	this._schoolInfoWnd.hide();
	this.addWindow(this._schoolInfoWnd);
}

Scene_MagicSchools.prototype.openSchoolCmd = function(){
	this._schoolInfoWnd.deactivate();
	this._schoolCmdWnd.activate();
	this._schoolCmdWnd.select(0);
	this._schoolCmdWnd.show();
}

Scene_MagicSchools.prototype.schoolGoBackToSpellSelect = function(){
	this._schoolInfoWnd.deactivate();
	this._schoolSpellListWnd.activate();
	this._schoolSpellListWnd.select(0);
}

Scene_MagicSchools.prototype.createSchoolGoldWindow = function(){
	let y = this._schoolInfoWnd.getHeight() + this._helpWindow.height + 20;
	let x = 0;

	this._schoolGoldWnd = new Window_Gold(x, y);
	this._schoolGoldWnd.hide();
	this.addWindow(this._schoolGoldWnd);
}

Scene_MagicSchools.prototype.createSchoolLimitsWindow = function(){
	let y = this._schoolMainWnd.getHeight() + this._helpWindow.height + 20;
	let x = 0;
	let w = 288;
	let h = 200;

	this._schoolLimitsWnd = new Window_SchoolLimits(x, y, w, h);
	this._schoolLimitsWnd.hide();
	this.addWindow(this._schoolLimitsWnd);
}

Scene_MagicSchools.prototype.createSchoolCostWindow = function(){
	let y = this._schoolMainWnd.getHeight() + this._helpWindow.height + 20;
	let x = 0;
	let w = 288;
	let h = 200;

	this._schoolCostWnd = new Window_SchoolCost(x, y, w, h);
	this._schoolCostWnd.hide();
	this.addWindow(this._schoolCostWnd);
}

Scene_MagicSchools.prototype.createMainWindow = function() {
	let x = 0;
	let y = this._helpWindow.height + 10

	let h = 205;
	let w = 288;

	this._schoolMainWnd = new Window_SchoolMain(x, y, w, h, this._schoolInfoWnd);
	this._schoolMainWnd.setHandler('ok', this.mainMenuOptionSelected.bind(this));
	this._schoolMainWnd.setHandler('cancel', this.schoolGoBackToCharSelect.bind(this));
	this._schoolMainWnd.setHelpWindow(this._helpWindow);
	this._schoolMainWnd.hide();
	this.addWindow(this._schoolMainWnd);
}

Scene_MagicSchools.prototype.mainMenuOptionSelected = function(){
	this._sceneMode = this._schoolMainWnd.getSelectedMode();

	this._schoolMainWnd.deselect();
	this._schoolMainWnd.deactivate();
	this._schoolMainWnd.hide();
	this._schoolLimitsWnd.hide();

	if (this._sceneMode == 1 || this._sceneMode == 2){ //Unlock Primary/Secondary School
		this._selectedSchoolType = this._sceneMode - 1;
		this._schoolSchListWnd.setMode(0);
		this._schoolSchListWnd.setSelectedSchoolType(this._sceneMode - 1);
		this._schoolSchListWnd.setActorData(this._selAct);
		this._schoolSchListWnd.show();
		this._schoolSchListWnd.activate();
		this._schoolSchListWnd.select(0);

		if (bEnableGoldCost || bEnableItemCost){
			this._schoolCostWnd.show();
		}
	} if (this._sceneMode == 3){
		this._schoolSchTypeListWnd.show();
		this._schoolSchTypeListWnd.activate();
		this._schoolSchTypeListWnd.select(0);
		this._schoolInfoWnd.hide();
	}
}

Scene_MagicSchools.prototype.schoolGoBackToCharSelect = function() {
	this._schoolMainWnd.hide();
	this._schoolMainWnd.deactivate();
	this._schoolMainWnd.deselect();
	this._schoolLimitsWnd.hide();
	this._schoolInfoWnd.hide();
	this._schoolCharSelectWnd.show();
	this._schoolCharSelectWnd.activate();
	this._schoolCharSelectWnd.select(0);
	if (bEnableGoldCost){
		this._schoolGoldWnd.hide();
	}
}

Scene_MagicSchools.prototype.createSchoolTypeListWindow = function(){
	let x = 0;
	let y = this._helpWindow.height + 10

	let h = 205;
	let w = 288;

	this._schoolSchTypeListWnd = new Window_SchoolTypeList(x, y, w, h);
	this._schoolSchTypeListWnd.setHandler('ok', this.schoolTypeSelected.bind(this));
	this._schoolSchTypeListWnd.setHandler('cancel', this.goBackToSchoolMain.bind(this));
	this._schoolSchTypeListWnd.hide();
	this.addWindow(this._schoolSchTypeListWnd);
}

Scene_MagicSchools.prototype.schoolTypeSelected = function(){
	this._selectedSchoolType = this._schoolSchTypeListWnd.getSelectedType();

	this._schoolSchTypeListWnd.hide();
	this._schoolSchTypeListWnd.deselect();
	this._schoolSchTypeListWnd.deactivate();

	this._schoolSchListWnd.setMode(1);
	this._schoolSchListWnd.setSelectedSchoolType(this._selectedSchoolType);
	this._schoolSchListWnd.setActorData(this._selAct);
	this._schoolSchListWnd.show();
	this._schoolSchListWnd.activate();
	this._schoolSchListWnd.select(0);
	this._schoolInfoWnd.show();
	this._schoolCostWnd.refresh();
}

Scene_MagicSchools.prototype.goBackToSchoolMain = function(){
	this._schoolSchTypeListWnd.hide();
	this._schoolSchTypeListWnd.deactivate();
	this._schoolSchTypeListWnd.deselect();

	this._schoolMainWnd.show();
	this._schoolMainWnd.activate();
	this._schoolMainWnd.select(0);
	this._schoolInfoWnd.show();

	this._schoolCostWnd.hide();
	this._schoolLimitsWnd.show();
}

Scene_MagicSchools.prototype.createSchoolListWindow = function(){
	let x = 0;
	let y = this._helpWindow.height + 10;
	let h = 205;
	let w = 288;

	this._schoolSchListWnd = new Window_SchoolList(x, y, w, h, this._schoolInfoWnd, this._schoolCostWnd);
	this._schoolSchListWnd.setHandler('ok', this.schoolListSchSelected.bind(this));
	this._schoolSchListWnd.setHandler('cancel', this.schoolListProcessCancel.bind(this));
	this._schoolSchListWnd.hide();
	this.addWindow(this._schoolSchListWnd);
}

Scene_MagicSchools.prototype.schoolListSchSelected = function(){
	let wndMode = this._schoolSchListWnd.getSelectedMode();
	this._schoolSchListWnd.deactivate();
	this._schoolSchListWnd.deselect();

	if (wndMode == 0){
		if (bEnableGoldCost) {
			this._goldCost = this._schoolCostWnd.getGoldCost();
		}

		if (bEnableItemCost) {
			this._itemCost = this._schoolCostWnd.getItemCost();
			this._itemData = this._schoolCostWnd.getDataItem();
		}

		this._schoolCmdWnd.setMode(0);
		this._schoolCmdWnd.show();
		this._schoolCmdWnd.activate();
		this._schoolCmdWnd.select(0);
	} else {
		this._selectedSchoolId = this._schoolSchListWnd.getSelectedSchoolId();
		this._schoolSchListWnd.hide();
		this._schoolTreeListWnd.setHelpWindow(this._helpWindow);
		this._schoolTreeListWnd.setActorData(this._selAct);
		this._schoolTreeListWnd.setSelectedSchoolTypeId(this._selectedSchoolType);
		this._schoolTreeListWnd.setSelectedSchoolId(this._selectedSchoolId);
		this._schoolTreeListWnd.show();
		this._schoolTreeListWnd.activate();
		this._schoolTreeListWnd.select(0);
	}
}

Scene_MagicSchools.prototype.schoolListProcessCancel = function(){
	let wndMode = this._schoolSchListWnd.getSelectedMode();

	if (wndMode == 0){
		this._schoolSchListWnd.hide();
		this._schoolSchListWnd.deselect();
		this._schoolSchListWnd.deactivate();
		this._schoolMainWnd.show();
		this._schoolMainWnd.activate();
		this._schoolMainWnd.select(0);

		this._schoolCostWnd.hide();
		this._schoolLimitsWnd.show();
	} else if (wndMode == 1){
		this._schoolSchListWnd.hide();
		this._schoolSchListWnd.deactivate();
		this._schoolSchListWnd.deselect();
		this._schoolSchTypeListWnd.show();
		this._schoolSchTypeListWnd.activate();
		this._schoolSchTypeListWnd.select(0);
		this._schoolInfoWnd.hide();
	}
}

Scene_MagicSchools.prototype.createSchoolTreeListWindow = function(){
	let x = 0;
	let y = this._helpWindow.height + 10

	let h = 205;
	let w = 288;

	this._schoolTreeListWnd = new Window_SchoolTreeList(x, y, w, h, this._schoolInfoWnd, this._helpWindow);
	this._schoolTreeListWnd.setHandler('ok', this.schoolTreeSelected.bind(this));
	this._schoolTreeListWnd.setHandler('cancel', this.goBackToSchoolList.bind(this));
	this._schoolTreeListWnd.hide();
	this.addWindow(this._schoolTreeListWnd);
}

Scene_MagicSchools.prototype.schoolTreeSelected = function(){
	this._selectedTreeId = this._schoolTreeListWnd.getSelectedTreeId();

	this._schoolTreeListWnd.hide();
	this._schoolTreeListWnd.deactivate();
	this._schoolTreeListWnd.deselect();

	this._schoolSpellListWnd.setSelectedSchoolData(this._selAct, this._selectedSchoolId, this._selectedSchoolType, this._selectedTreeId);
	this._schoolSpellListWnd.show();
	this._schoolSpellListWnd.activate();
	this._schoolSpellListWnd.select(0);
	this._schoolCostWnd.show();
}

Scene_MagicSchools.prototype.goBackToSchoolList = function() {
	this._schoolTreeListWnd.hide();
	this._schoolTreeListWnd.deactivate();
	this._schoolTreeListWnd.deselect();

	this._schoolSchListWnd.show();
	this._schoolSchListWnd.activate();
	this._schoolSchListWnd.select(0);

}

Scene_MagicSchools.prototype.createSpellListWindow = function(){
	let x = 0;
	let y = this._helpWindow.height + 10

	let h = 205;
	let w = 288;

	this._schoolSpellListWnd = new Window_SchoolSpellList(x, y, w, h, this._schoolInfoWnd, this._schoolCostWnd);
	this._schoolSpellListWnd.setHandler('ok', this.schoolSpellSelected.bind(this));
	this._schoolSpellListWnd.setHandler('cancel', this.goBackToTreeList.bind(this));
	this._schoolSpellListWnd.hide();
	this.addWindow(this._schoolSpellListWnd);
}

Scene_MagicSchools.prototype.schoolSpellSelected = function(){
	this._selectedSkillId = this._schoolSpellListWnd.getSelectedSpellId();
	if (bEnableGoldCost) {
		this._goldCost = this._schoolCostWnd.getGoldCost();
	}

	if (bEnableItemCost) {
		this._itemCost = this._schoolCostWnd.getItemCost();
		this._itemData = this._schoolCostWnd.getDataItem();
	}

	this._schoolSpellListWnd.deactivate();
	this._schoolSpellListWnd.deselect();

	this._schoolCmdWnd.setMode(1);
	this._schoolCmdWnd.show();
	this._schoolCmdWnd.activate();
	this._schoolCmdWnd.select(0);
}

Scene_MagicSchools.prototype.goBackToTreeList = function(){
	this._schoolSpellListWnd.hide();
	this._schoolSpellListWnd.deactivate();
	this._schoolSpellListWnd.deselect();

	this._schoolTreeListWnd.show();
	this._schoolTreeListWnd.activate();
	this._schoolTreeListWnd.select(0);

	this._schoolCostWnd.hide();
}

Scene_MagicSchools.prototype.createSchoolCmdWindow = function(){
	let x = this._schoolCostWnd.getWidth() + 10;
	let y = this._schoolInfoWnd.getHeight() + this._helpWindow.height + 20;
	let w = this._schoolInfoWnd.getWidth();
	let h = 60;

	this._schoolCmdWnd = new Window_SchoolCommand(x, y, w, h);
	this._schoolCmdWnd.setHandler('ok', this.schoolCmdProcessOk.bind(this));
	this._schoolCmdWnd.setHandler('cancel', this.processCmdCancel.bind(this));
	this._schoolCmdWnd.hide();
	this.addWindow(this._schoolCmdWnd);
}

Scene_MagicSchools.prototype.schoolCmdProcessOk = function(){
	let cmdWndMode = this._schoolCmdWnd.getSelectedMode();
	this._selectedSchoolId = this._schoolSchListWnd.getSelectedSchoolId();
	let schoolTypeObj = {};

	schoolTypeObj = $magicSchoolsData[this._selectedSchoolId];
	//schoolTypeObj = JSON.parse(JSON.stringify(schoolTypeObj));

	if (cmdWndMode == 0){ //Selected new school
		let globalTrees = $magicSchoolsData[this._selectedSchoolId].Trees;
		let schoolTrees = {};

		for (let treeId of Object.keys(globalTrees)){
			schoolTrees[treeId] = {
				"Name" : globalTrees[treeId].Name,
				"Spells" : []
			};
		}
		if (this._selectedSchoolType == 0){
			this._selAct._magicSchoolsData[this._classId].PrimarySchools[this._selectedSchoolId] = {
				"Name" : schoolTypeObj.Name,
				"Trees": schoolTrees
			};
		} else {
			this._selAct._magicSchoolsData[this._classId].SecondarySchools[this._selectedSchoolId] = {
				"Name" : schoolTypeObj.Name,
				"Trees": schoolTrees
			};
		}
	} else if (cmdWndMode == 1){ //Selected new spell
		let newSchoolObj = {};
		let newSchoolTree = {};

		newSchoolObj = {
			"Name" : schoolTypeObj.Name,
			"Trees" : {}
		}

		newSchoolObj.Trees[this._selectedTreeId] = {
			"Name" : schoolTypeObj.Trees[this._selectedTreeId].Name,
			"Spells" : []
		}

		newSchoolObj.Trees[this._selectedTreeId].Spells.push(this._selectedSkillId);

		if (this._selectedSchoolType == 0){
			if (this._selAct._magicSchoolsData[this._classId].PrimarySchools.hasOwnProperty(this._selectedSchoolId)){
				if (this._selAct._magicSchoolsData[this._classId].PrimarySchools[this._selectedSchoolId].Trees.hasOwnProperty(this._selectedTreeId)){
					let existingSpells = this._selAct._magicSchoolsData[this._classId].PrimarySchools[this._selectedSchoolId].Trees[this._selectedTreeId].Spells;
					let newSpells = newSchoolObj.Trees[this._selectedTreeId].Spells;
					this._selAct._magicSchoolsData[this._classId].PrimarySchools[this._selectedSchoolId].Trees[this._selectedTreeId].Spells = existingSpells.concat(newSpells);
				}
			}
		} else {
			if (this._selAct._magicSchoolsData[this._classId].SecondarySchools.hasOwnProperty(this._selecetedSchoolId)){
				if (this._selAct._magicSchoolsData[this._classId].SecondarySchools[this._selectedSchoolId].Trees.hasOwnProperty(this._selectedTreeId)){
					let existingSpells = this._selAct._magicSchoolsData[this._classId].SecondarySchools[this._selectedSchoolId].Trees[this._selectedTreeId].Spells;
					let newSpells = newSchoolObj.Trees[this._selectedTreeId].Spells;
					existingSpells = existingSpells.concat(newSpells);
				}
			}
		}

		this._selAct.getLearnedSkills();
	}

	if (bEnableGoldCost){
		$gameParty.loseGold(this._goldCost);
		this._schoolGoldWnd.refresh();
	}

	if (bEnableItemCost) {
		$gameParty.loseItem(this._dataItm, this._itemCost);
	}

	//Enable crafting of next skill in tree; make optional in later version for plugin command option $magicSchoolsData
	if (this._selectedSchoolId > 0 && this._selectedSchoolType >= 0 && this._selectedTreeId > 0){
		let currTree = {};
		let nextSpellId = 0;

		if ($magicSchoolsData.hasOwnProperty(this._selectedSchoolId)){
			let currSchool = $magicSchoolsData[this._selectedSchoolId];
			if (currSchool.Trees.hasOwnProperty(this._selectedTreeId)){
				currTree = currSchool.Trees[this._selectedTreeId];
			}
		}

		if (Object.keys(currTree).length > 0) {
			for (let i1 = 0; i1 < currTree.TreeConfig.length; i1++) {
				if (this._selectedSkillId == currTree.TreeConfig[i1] && i1 < currTree.TreeConfig.length - 1) {
					let skillData = $dataSkills.find(sk => sk && sk.id == currTree.TreeConfig[i1+1]);
					if (skillData) {
						if (bEnableMagicCrafting) {
							if (!skillData.CanCraft && bEnableAutoUnlock) {
								skillData.CanCraft = true;
							}

							break;
						} else {
							if (!skillData.CanLearn && bEnableAutoUnlock) {
								skillData.CanLearn = true;
							}
						}
					}
				}
			}
		}
	}

	this._schoolMainWnd.setActorData(this._selAct);
	this._schoolLimitsWnd.setActorData(this._selAct);
	this._schoolCostWnd.setActorData(this._selAct);
	this._schoolSchListWnd.setActorData(this._selAct);
	this._schoolTreeListWnd.setActorData(this._selAct);
	this._schoolSchTypeListWnd.setActorData(this._selAct);
	this._schoolSpellListWnd.setSelectedSchoolData(this._selAct, this._selectedSchoolId, this._selectedSchoolType, this._selectedTreeId);

	this.processCmdCancel();
}

Scene_MagicSchools.prototype.processCmdCancel = function(){
	let cmdWndMode = this._schoolCmdWnd.getSelectedMode();
	this._schoolCmdWnd.hide();
	this._schoolCmdWnd.deactivate();
	this._schoolCmdWnd.deselect();

	if (cmdWndMode == 0){ //Unlocked new school
		this._schoolSchListWnd.hide();
		this._schoolSchListWnd.deactivate();
		this._schoolSchListWnd.deselect();
		this._schoolMainWnd.show();
		this._schoolMainWnd.activate();
		this._schoolMainWnd.select(0);
		this._schoolCostWnd.hide();
		this._schoolLimitsWnd.show();
	} else if (cmdWndMode == 1){ //Learned new spell
		let globalGradeType = (this._selectedSchoolType == 0 ? 'PrimaryGradeConfig' : 'SecondaryGradeConfig');
		let gradeType = (this._selectedSchoolType == 0 ? 'PrimarySchools' : 'SecondarySchools');
		let actorClass = $dataClasses.filter(cls => cls && cls.id == this._classId);
		let clsGrade = (actorClass.length > 0 ? actorClass.ClassGrade : 0);
		let unlearnedSkills = [];
		let bypassCheck = false;
		if (clsGrade != 0){
			let gradeConfig = (clsGrade == "1" ? "GradeConfig1" : (clsGrade == "2" ? "GradeConfig2" : "GradeConfig3"));
			let treeGradeConfig = $magicSchoolsData[this._selectedSchoolId].Trees[this._selectedTreeId][globalGradeType][gradeConfig];
			if (treeGradeConfig){
				let treeSkills = treeGradeConfig.Config;
				let learnableSkills = treeSkills.filter(skl => skl && skl.CanLearn);
				let playerSchoolTrees = this._selAct._magicSchoolsData[this._classId][gradeType][this._selectedSchoolId].Trees;
				if (Object.keys(playerSchoolTrees).length > 0){
					if (playerSchoolTrees.hasOwnProperty(this._selectedTreeId)){
						let playerSkills = playerSchoolTrees[this._selectedTreeId].Spells;
						unlearnedSkills = learnableSkills.filter(skl => skl && !playerSkills.includes(parseInt(skl)));
					} else {
						bypassCheck = true;
					}
				} else {
					bypassCheck = true;
				}
			} else {
				bypassCheck = true;
			}
		}

		if (unlearnedSkills.length > 0 || bypassCheck){
			this._schoolSpellListWnd.activate();
			this._schoolSpellListWnd.select(0);
		} else {
			this._schoolSpellListWnd.deactivate();
			this._schoolSpellListWnd.deselect();
			this._schoolSpellListWnd.hide();
			this._schoolTreeListWnd.refresh();
			this._schoolTreeListWnd.activate();
			this._schoolTreeListWnd.select(0);
			this._schoolTreeListWnd.show();
			this._schoolCostWnd.hide();
		}
	}
}


/* Window_SchoolCharSelect Functions */
function Window_SchoolCharSelect() {
	this.initialize.apply(this, arguments);
}

Window_SchoolCharSelect.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolCharSelect.prototype.constructor = Window_SchoolCharSelect;

Window_SchoolCharSelect.prototype.initialize = function(x, y, hlpWndH) {
	var width = this.getWidth();
	this._h2 = hlpWndH + 10;
	var height = this.getHeight();
	this._pendingIndex = -1;
	this._selectableActors = [];
	this.getSelectableActors();

	Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this.refresh();
}

Window_SchoolCharSelect.prototype.getSelectableActors = function(){
	for (let actor of $gameParty.members()){
		if ($dataActors[actor._actorId].UsesSchools){
			this._selectableActors.push(actor._actorId);
		}
	}
}

Window_SchoolCharSelect.prototype.getWidth = function() {
	return 360;
}


Window_SchoolCharSelect.prototype.getSelectedActor = function() { return this._selectedActorId; }

Window_SchoolCharSelect.prototype.getHeight = function() {
	return Graphics.boxHeight - this._h2;
}

Window_SchoolCharSelect.prototype.maxItems = function() {
	return this._selectableActors.length;
}

Window_SchoolCharSelect.prototype.itemHeight = function() {
	var clientHeight = this.height - this.padding * 2 - 82;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolCharSelect.prototype.numVisibleRows = function() {
	return 4;
}

Window_SchoolCharSelect.prototype.loadImages = function() {
	$gameParty.members().forEach(function(actor) {
		if ($dataActors[actor._actorId].UsesSchools){
			ImageManager.reserveFace(actor.faceName());
		}
	}, this);
}

Window_SchoolCharSelect.prototype.drawItem = function(index) {
	this.drawItemBackground(index);
	this.drawItemImage(index);
	this.drawItemStatus(index);
}

Window_SchoolCharSelect.prototype.drawItemBackground = function(index) {
	if (index === this._pendingIndex) {
		var rect = this.itemRect(index);
		var color = this.pendingColor();
		this.changePaintOpacity(false);
		this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
		this.changePaintOpacity(true);
	}
}

Window_SchoolCharSelect.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
	var lineHeight = this.lineHeight();
	var x2 = x + 180;
	var width2 = Math.min(200, width - 180 - this.textPadding());
	this.drawActorName(actor, x, y);
	this.drawActorLevel(actor, x, y + lineHeight * 1);
};

Window_SchoolCharSelect.prototype.drawItemImage = function(index) {
	var actor = $gameActors.actor(this._selectableActors[index]);
	var rect = this.itemRect(index);
	this.changePaintOpacity(actor.isBattleMember());
	this.drawActorFace(actor, rect.x + 1, rect.y + 1, Math.ceil(Window_Base._faceWidth), Math.ceil(Window_Base._faceHeight));
	this.changePaintOpacity(true);
}

Window_SchoolCharSelect.prototype.drawActorFace = function(actor, x, y, width, height) {
	const faceBitmap = ImageManager.loadFace(actor.faceName());
	// If we do not have the bitmap ready to draw, then try again after 25 ms
	if (faceBitmap.width <= 0) {
	return setTimeout(this.drawActorFace.bind(this, actor, x, y, width, height), 25);
	}
	this.drawFace(faceBitmap, actor.faceIndex(), x, y, width, height);
};

Window_SchoolCharSelect.prototype.drawItemStatus = function(index) {
	var actor = $gameActors.actor(this._selectableActors[index]);
	var rect = this.itemRect(index);
	var x = rect.x + 162;
	var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
	var width = rect.width - x - this.textPadding();
	this.drawActorSimpleStatus(actor, x, y, width);
}

Window_SchoolCharSelect.prototype.drawFace = function(faceBitmap, faceIndex, x, y, width, height) {
	width = width || Window_Base._faceWidth;
	height = height || Window_Base._faceHeight;
	var portWidth = Window_Base._faceWidth;
	var portHeight = Window_Base._faceHeight;
	var spriteWidth = Math.min(width, portWidth);
	var spriteHeight = Math.min(height, portHeight);
	var dispX = Math.floor(x + Math.max(width - portWidth, 0) / 2);
	var dispY = Math.floor(y + Math.max(height - portHeight, 0) / 2);
	var sheetX = faceIndex % 4 * portWidth + (portWidth - spriteWidth) / 2;
	var sheetY = Math.floor(faceIndex / 4) * portHeight + (portHeight - spriteHeight) / 2;
	this.contents.blt(faceBitmap, sheetX, sheetY, spriteWidth, spriteHeight,
	dispX, dispY, spriteWidth * 0.65, spriteHeight * 0.65);
};

Window_SchoolCharSelect.prototype.processOk = function() {
	Window_Selectable.prototype.processOk.call(this);
}

Window_SchoolCharSelect.prototype.selectLast = function() {
	this.select($gameParty.menuActor().index() || 0);
}

Window_SchoolCharSelect.prototype.pendingIndex = function() {
	return this._pendingIndex;
}

Window_SchoolCharSelect.prototype.setPendingIndex = function(index) {
	var lastPendingIndex = this._pendingIndex;
	this._pendingIndex = index;
	this.redrawItem(this._pendingIndex);
	this.redrawItem(lastPendingIndex);
}

Window_SchoolCharSelect.prototype.processOk = function(){
	this._selectedActorId = this._selectableActors[this._index];
	Window_Selectable.prototype.processOk.call(this);
}

Window_SchoolCharSelect.prototype.refresh = function(){
	Window_Selectable.prototype.refresh.call(this);
}



/* Window_SchoolMain Functions */
Window_SchoolMain.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolMain.prototype.constructor = Window_SchoolMain;

Window_SchoolMain.prototype.initialize = function(x, y, w, h, helpWnd){
	this._helpWindow = helpWnd;
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._comList = [];
	this._intComList = [];
	this._pageIndex = 0;
	this._totalIndex = 1;
	this._totalItems = 0;
	this._selectedMode = 0;
	this._selectedActor = {};
	this._maxPrimaries = 0;
	this._maxSecondaries = 0;
	this._currentPrimaries = 0;
	this._currentSecondaries = 0;

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolMain.prototype.getHeight = function() { return this._height; }
Window_SchoolMain.prototype.getWidth = function() { return this._width; }
Window_SchoolMain.prototype.getSelectedMode = function() { return this._selectedMode; }
Window_SchoolMain.prototype.maxItems = function() { return (this._comList.length > 0 ? this._comList[this._pageIndex].length : 0); }
Window_SchoolMain.prototype.setActorData = function(selAct) {
	this._selectedActor = selAct;
	let actCls = $dataClasses.find(cls => cls && this._selectedActor._classId == cls.id);

	this._maxPrimaries = actCls.MaxPrimarySchools;
	this._maxSecondaries = actCls.MaxSecondarySchools;
	this.refresh();
}

Window_SchoolMain.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolMain.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolMain.prototype.getCurrentComponent = function() { return this._currentCmp; }
Window_SchoolMain.prototype.getCurrentCatalyst = function() { return this._currentCat; }
Window_SchoolMain.prototype.itemRect = function(index){
	let rect = new Rectangle();
	let maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = Math.floor(this.itemHeight() + (this.itemHeight() * 0.02));
	rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	return rect;
}

Window_SchoolMain.prototype.numVisibleRows = function() {
	return 4;
}
Window_SchoolMain.prototype.setCurrentCompId = function(cmpId) { this._selectedComponents[this._currentCmp] = cmpId; }
Window_SchoolMain.prototype.setCurrentCatId = function(catId) { this._selectedCatalysts[this._currentCat] = catId; }
Window_SchoolMain.prototype.resetPallete = function(){
	this._selectedMode = 0;
	this._infoWnd.updateMode(0, this._selectedActor);
	this.refresh();
}

Window_SchoolMain.prototype.drawItem = function(index){
	let rect = this.itemRectForText(index);
	let x = rect.width/2;
	let y = rect.y + (rect.height/2) - this.lineHeight() * 0.5;
	let w = rect.width - this.textPadding();
	let actSchoolData = this._selectedActor._magicSchoolsData;

	let selectedCommand = this._comList[this._pageIndex][index];
	this.changePaintOpacity(true);

	if (actSchoolData && Object.keys(actSchoolData).length > 0){
		let actorCls = this._selectedActor._classId;
		this._currentPrimaries = Object.keys(actSchoolData[actorCls].PrimarySchools).length;
		this._currentSecondaries = Object.keys(actSchoolData[actorCls].SecondarySchools).length;

		if (selectedCommand.contains("Primary")){
			if (this._currentPrimaries >= this._maxPrimaries){
				this.changePaintOpacity(false);
			} else {
				this.changePaintOpacity(true);
			}
		} else if (selectedCommand.contains("Secondary")){
			if (this._currentPrimaries == 0 || this._currentSecondaries >= this._maxSecondaries){
				this.changePaintOpacity(false);
			} else{
				this.changePaintOpacity(true);
			}
		} else if (selectedCommand.contains("Spells")){
			if (this._currentSecondaries == 0 && this._currentPrimaries == 0){
				this.changePaintOpacity(false);
			} else {
				this.changePaintOpacity(true);
			}
		}
	} else {
		if (selectedCommand.contains("Secondary")){
		this.changePaintOpacity(false);
	} else if (selectedCommand.contains("Spells")){
		this.changePaintOpacity(false);
	}
	}

	this.drawText(this._comList[this._pageIndex][index], rect.x, y, w , 'center');
}

Window_SchoolMain.prototype.buildComList = function(){
	this._comList = [];
	this._intComList = [];
	this._helpTxtList = [];
	this._totalItems = 4;

	this._intComList.push("Unlock Primary");
	this._intComList.push("Unlock Secondary");
	this._intComList.push("Learn Spells");
	this._intComList.push("Cancel");
	this._comList.push(this._intComList);
	this._intComList = [];

	this._helpTxtList.push("Choose a primary school of magic to unlock");
	this._helpTxtList.push("Choose a secondary school of magic to unlock");
	this._helpTxtList.push("Learn spells in schools that you have unlocked");
	this._helpTxtList.push("");
}

Window_SchoolMain.prototype.processCursorMove = function() {
	let bResetSelect = false;
	if (this.isCursorMovable()) {
		var lastIndex = this.index();

		if (Input.isRepeated('down')) {
			if (this._totalIndex + 1 > this._totalItems){
				this._totalIndex = 0;
			}

			this._totalIndex++;

			bResetSelect = this.setIndexPage();
			this.cursorDown(Input.isTriggered('down'));
			if (bResetSelect){
				this.resetSelect("down");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('up')) {
			if (this._totalIndex - 1 < 1){
				this._totalIndex = this._totalItems;
			} else {
					this._totalIndex--;
			}

			bResetSelect = this.setIndexPage();
			this.cursorUp(Input.isTriggered('up'));

			if (bResetSelect){
				this.resetSelect("up");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
		} else if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
		} else if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
			this.cursorPagedown();
		} else if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
			this.cursorPageup();
		}

		if (this.index() !== lastIndex) {
			SoundManager.playCursor();
		}
	}
};

Window_SchoolMain.prototype.setIndexPage = function(lastIndex, direction){
	if (this._totalIndex >= 1){
		let calcPageIndex = Math.ceil(this._totalIndex / this.numVisibleRows())-1;

		if (calcPageIndex != this._pageIndex){
			this._pageIndex = calcPageIndex;
			this.contents.clear();
			this.drawAllItems();
			return true;
		}
	} else {
		this._pageIndex = 0;
		this.contents.clear();
		this.drawAllItems();
		return true;
	}

	return false;
}

Window_SchoolMain.prototype.resetSelect = function(direction){
	if (direction == "down") {
		this._index = 0;
		this.updateCursor();
		this.select(0);
	} else if (direction == "up") {
		let nextIndex = this._comList[this._pageIndex].length-1;
		this._index = nextIndex;
		this.updateCursor();
		this.select(nextIndex);
	}
}

Window_SchoolMain.prototype.updateHelp = function(){
	this._helpWindow.clear();
	this._helpWindow.setText(this._helpTxtList[this._index]);
};

Window_SchoolMain.prototype.select = function(index){
	this._index = index;
	if (this._comList.length > 0 && this._comList[this._pageIndex].length > 0){
		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();
	}
}

Window_SchoolMain.prototype.processOk = function(){
	if (this._index > -1 && this._index < this._comList[this._pageIndex].length){
		if (this._comList[this._pageIndex][this._index] != 'Cancel'){
			let actorCls = this._selectedActor._classId;
			let actSchoolData = this._selectedActor._magicSchoolsData[actorCls];
			let selectedCommand = this._comList[this._pageIndex][this._index];

			if (actSchoolData && Object.keys(actSchoolData).length > 0){
				this._currentPrimaries = Object.keys(actSchoolData.PrimarySchools).length;
				this._currentSecondaries = Object.keys(actSchoolData.SecondarySchools).length;

				if (selectedCommand.contains("Primary")){
					if (this._currentPrimaries < this._maxPrimaries){
						this._selectedMode = 1;
						Window_Selectable.prototype.processOk.apply(this);
					} else{
						SoundManager.playCancel();
					}
				} else if (selectedCommand.contains("Secondary")){
					if (this._currentPrimaries > 0 && this._currentSecondaries < this._maxSecondaries){
						this._selectedMode = 2;
						Window_Selectable.prototype.processOk.apply(this);
					} else{
						SoundManager.playCancel();
					}
				} else if (selectedCommand.contains("Spells")){
					if (this._currentSecondaries == 0 && this._currentPrimaries == 0){
						SoundManager.playCancel();
					} else {
						this._selectedMode = 3;
						Window_Selectable.prototype.processOk.apply(this);
					}
				}
			} else {
				if (selectedCommand.contains("Primary")){
					this._selectedMode = 1;
					Window_Selectable.prototype.processOk.apply(this);
				} else if (selectedCommand.contains("Secondary")){
				SoundManager.playCancel();
			} else if (selectedCommand.contains("Spells")){
				SoundManager.playCancel();
			}
			}
		} else{
			Window_Selectable.prototype.processCancel.apply(this);
		}
	} else{
		Window_Selectable.prototype.processCancel.apply(this);
	}
}

Window_SchoolMain.prototype.refresh = function(){
	this.contents.clear();
	this.buildComList();
	this.drawAllItems();
}

Window_SchoolMain.prototype.deactivate = function(){
	Window_Base.prototype.deactivate.call(this);
	this._pageIndex = 0;
	this._totalIndex = 1;
}


/* Window_SchoolTypeList Functions */
Window_SchoolTypeList.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolTypeList.prototype.constructor = Window_SchoolTypeList;

Window_SchoolTypeList.prototype.initialize = function(x, y, w, h, infoWnd){
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._comList = [];
	this._intComList = [];
	this._pageIndex = 0;
	this._totalIndex = 1;
	this._totalItems = 0;
	this._selectedActor = {};
	this._selectedSchoolType = 0;
	this._wndMode = 0;

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolTypeList.prototype.setActorData = function(selAct) {
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolTypeList.prototype.getHeight = function() { return this._height; }
Window_SchoolTypeList.prototype.getWidth = function() { return this._width; }
Window_SchoolTypeList.prototype.getSelectedType = function() { return this._selectedSchoolType; }
Window_SchoolTypeList.prototype.maxItems = function() { return (this._comList.length > 0 ? this._comList[this._pageIndex].length : 0); }
Window_SchoolTypeList.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolTypeList.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolTypeList.prototype.getCurrentComponent = function() { return this._currentCmp; }
Window_SchoolTypeList.prototype.getCurrentCatalyst = function() { return this._currentCat; }
Window_SchoolTypeList.prototype.itemRect = function(index){
	let rect = new Rectangle();
	let maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = Math.floor(this.itemHeight() + (this.itemHeight() * 0.02));
	rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	return rect;
}

Window_SchoolTypeList.prototype.setCurrentCompId = function(cmpId) { this._selectedComponents[this._currentCmp] = cmpId; }
Window_SchoolTypeList.prototype.setCurrentCatId = function(catId) { this._selectedCatalysts[this._currentCat] = catId; }
Window_SchoolTypeList.prototype.numVisibleRows = function() {
	return 4;
}

Window_SchoolTypeList.prototype.resetPallete = function(){
	this._selectedSchoolType = 0;
	this.refresh();
}

Window_SchoolTypeList.prototype.drawItem = function(index){
	let rect = this.itemRectForText(index);
	let x = rect.width/2;
	let y = rect.y + (rect.height/2) - this.lineHeight() * 0.5;
	let w = rect.width - this.textPadding();

	let actSchoolData = this._selectedActor._magicSchoolsData;
	this.changePaintOpacity(true);

	if (actSchoolData && Object.keys(actSchoolData).length > 0){
		let actorCls = this._selectedActor._classId;
		let actorSecondaries = this._selectedActor._magicSchoolsData[actorCls].SecondarySchools;
		let selectedCommand = this._comList[this._pageIndex][index];

		if (selectedCommand.contains("Secondary")){
			if (Object.keys(actorSecondaries).length == 0){
				this.changePaintOpacity(false);
			} else {
				this.changePaintOpacity(true);
			}
		}

		this.drawText(this._comList[this._pageIndex][index], rect.x, y, w , 'center');
	}
}

Window_SchoolTypeList.prototype.buildComList = function(){
	this._comList = [];
	this._intComList = [];
	this._helpTxtList = [];
	this._totalItems = 4;

	this._intComList.push("Primary School");
	this._intComList.push("Secondary School");
	this._intComList.push("Cancel");

	this._comList.push(this._intComList);
	this._intComList = [];
}

Window_SchoolTypeList.prototype.processCursorMove = function() {
	let bResetSelect = false;
	if (this.isCursorMovable()) {
		var lastIndex = this.index();

		if (Input.isRepeated('down')) {
			if (this._totalIndex + 1 > this._totalItems){
				this._totalIndex = 0;
			}

			this._totalIndex++;

			bResetSelect = this.setIndexPage();
			this.cursorDown(Input.isTriggered('down'));
			if (bResetSelect){
				this.resetSelect("down");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('up')) {
			if (this._totalIndex - 1 < 1){
				this._totalIndex = this._totalItems;
			} else {
					this._totalIndex--;
			}

			bResetSelect = this.setIndexPage();
			this.cursorUp(Input.isTriggered('up'));

			if (bResetSelect){
				this.resetSelect("up");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
		} else if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
		} else if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
			this.cursorPagedown();
		} else if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
			this.cursorPageup();
		}

		if (this.index() !== lastIndex) {
			SoundManager.playCursor();
		}
	}
};

Window_SchoolTypeList.prototype.setIndexPage = function(lastIndex, direction){
	if (this._totalIndex >= 1){
		let calcPageIndex = Math.ceil(this._totalIndex / this.numVisibleRows())-1;

		if (calcPageIndex != this._pageIndex){
			this._pageIndex = calcPageIndex;
			this.contents.clear();
			this.drawAllItems();
			return true;
		}
	} else {
		this._pageIndex = 0;
		this.contents.clear();
		this.drawAllItems();
		return true;
	}

	return false;
}

Window_SchoolTypeList.prototype.resetSelect = function(direction){
	if (direction == "down") {
		this._index = 0;
		this.updateCursor();
		this.select(0);
	} else if (direction == "up") {
		let nextIndex = this._comList[this._pageIndex].length-1;
		this._index = nextIndex;
		this.updateCursor();
		this.select(nextIndex);
	}
}

Window_SchoolTypeList.prototype.select = function(index){
	this._index = index;
	if (this._comList.length > 0 && this._comList[this._pageIndex].length > 0){
		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();
	}
}

Window_SchoolTypeList.prototype.processOk = function(){
	if (this._index > -1 && this._index < this._comList[this._pageIndex].length){
		if (this._comList[this._pageIndex][this._index] != 'Cancel'){
			let actorCls = this._selectedActor._classId;
			let actorSecondaries = this._selectedActor._magicSchoolsData[actorCls].SecondarySchools;
			let selectedCommand = this._comList[this._pageIndex][this._index];
			this._selectedSchoolType = this._index;

			if (selectedCommand.contains("Secondary")){
				if (Object.keys(actorSecondaries).length == 0){
					SoundManager.playCancel();
				} else {
					Window_Selectable.prototype.processOk.apply(this);
				}
			} else {
				Window_Selectable.prototype.processOk.apply(this);
			}
		} else{
			Window_Selectable.prototype.processCancel.apply(this);
		}
	} else{
		Window_Selectable.prototype.processCancel.apply(this);
	}
}

Window_SchoolTypeList.prototype.refresh = function(){
	this.contents.clear();
	this.buildComList();
	this.drawAllItems();
}

Window_SchoolTypeList.prototype.deactivate = function(){
	Window_Base.prototype.deactivate.call(this);
	this._pageIndex = 0;
	this._totalIndex = 1;
}



/* Window_SchoolList Functions */
Window_SchoolList.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolList.prototype.constructor = Window_SchoolList;

Window_SchoolList.prototype.initialize = function(x, y, w, h, infoWnd, costWnd){
	this._infoWnd = infoWnd;
	this._costWnd = costWnd;
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._comList = [];
	this._intComList = [];
	this._schoolIdList = [];
	this._intSchoolIdList = [];
	this._pageIndex = 0;
	this._totalIndex = 1;
	this._totalItems = 0;
	this._selectedMode = 0;
	this._selectedActor = undefined;
	this._selectedSchoolType = 0;
	this._selectedSchoolId = 0;
	this._goldCost = 0;

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

//Window Updates
Window_SchoolList.prototype.setActorData = function(selAct) {
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolList.prototype.setMode = function(selMode) {
	this._selectedMode = selMode;
	this.refresh();
}

Window_SchoolList.prototype.getHeight = function() { return this._height; }
Window_SchoolList.prototype.getWidth = function() { return this._width; }
Window_SchoolList.prototype.getSelectedMode = function() { return this._selectedMode; }
Window_SchoolList.prototype.getSelectedSchoolId = function() { return this._selectedSchoolId; }
Window_SchoolList.prototype.setSelectedSchoolType = function(selSchType) { this._selectedSchoolType = selSchType; }
Window_SchoolList.prototype.maxItems = function() { return (this._comList.length > 0 ? this._comList[this._pageIndex].length : 0); }
Window_SchoolList.prototype.getGoldCost = function() { return this._goldCost; }
Window_SchoolList.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolList.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolList.prototype.getCurrentComponent = function() { return this._currentCmp; }
Window_SchoolList.prototype.getCurrentCatalyst = function() { return this._currentCat; }
Window_SchoolList.prototype.itemRect = function(index){
	let rect = new Rectangle();
	let maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = Math.floor(this.itemHeight() + (this.itemHeight() * 0.02));
	rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	return rect;
}

Window_SchoolList.prototype.numVisibleRows = function() {
	return 4;
}
Window_SchoolList.prototype.setCurrentCompId = function(cmpId) { this._selectedComponents[this._currentCmp] = cmpId; }
Window_SchoolList.prototype.setCurrentCatId = function(catId) { this._selectedCatalysts[this._currentCat] = catId; }
Window_SchoolList.prototype.resetPallete = function(){
	this._selectedMode = 0;
	this.refresh();
}

Window_SchoolList.prototype.drawItem = function(index){
	let rect = this.itemRectForText(index);
	let x = rect.width/2;
	let y = rect.y + (rect.height/2) - this.lineHeight() * 0.5;
	let w = rect.width - this.textPadding();

	let goldCost = 0;
	let itemCost = 0;
	let currPrtyGold = $gameParty.gold();
	let currPrtyItems = 0;
	let costItemId = 0;
	let bRequirementsMet = true;
	let dataItm = undefined;

	this.changePaintOpacity(true);

	if (this._selectedActor && this._selectedMode == 0 && this._selectedSchoolId != 0) {
		if (Object.keys(this._selectedActor).length > 0){
			let actLevel = this._selectedActor._level;
			let actClassId = this._selectedActor._classId;
			let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
			let schoolIds = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]);
			let schoolPriConfig = $magicSchoolsData[this._selectedSchoolId].PrimaryConfig;
			let schoolSecdConfig = $magicSchoolsData[this._selectedSchoolId].SecondaryConfig;

			if (bEnableGoldCost){
				if (schoolType.includes("Primary")){
					//Additional Pri School
					if (schoolIds.length > 0){
						goldCost = getSchoolCost(
							schoolPriConfig.addtSchBase,
							schoolPriConfig.addtSchMod,
							schoolPriConfig.addtSchMulti,
							(schoolIds.length > 0 ? schoolIds.length : 1),
							schoolPriConfig.schCurrForm
						);
					}
				} else {
					goldCost = getSchoolCost(
						schoolSecdConfig.schBase,
						schoolSecdConfig.schMod,
						schoolSecdConfig.schMulti,
						(schoolIds.length > 0 ? schoolIds.length : 1),
						schoolSecdConfig.schCurrForm
					);
				}
			}

			if (bEnableItemCost){
				costItemId = getSchoolCostItemId(this._selectedSchoolId);
				dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
				if (dataItm){
					currPrtyItems = $gameParty.numItems(dataItm);
				}

				if (schoolType.includes("Primary")){
					//Additional Pri School
					if (schoolIds.length > 0){
						itemCost = getSchoolCost(
							schoolPriConfig.addtSchItmBase,
							schoolPriConfig.addtSchItmMod,
							schoolPriConfig.addtSchItmMulti,
							(schoolIds.length > 0 ? schoolIds.length : 1),
							schoolPriConfig.schItmForm
						);
					}
				} else {
					itemCost = getSchoolCost(
						schoolSecdConfig.schItmBase,
						schoolSecdConfig.schItmMod,
						schoolSecdConfig.schItmMulti,
						(schoolIds.length > 0 ? schoolIds.length : 1),
						schoolSecdConfig.schItmForm
					);
				}
			}
		}

		if (bEnableGoldCost && currPrtyGold < goldCost) {
			bRequirementsMet = false;
		}

		if (bEnableItemCost && dataItm && currPrtyItems < itemCost) {
			bRequirementsMet = false;
		}

		if (bRequirementsMet){
			this.changePaintOpacity(true);
		} else{
			this.changePaintOpacity(false);
		}
	}

	this.drawText(this._comList[this._pageIndex][index], rect.x, y, w , 'center');
}

Window_SchoolList.prototype.buildComList = function(){
	this._comList = [];
	this._intComList = [];
	this._schoolIdList = [];
	this._intSchoolIdList = [];
	this._totalItems = 0

	let dataSchools = [];
	let finalSchoolIds = [];

	if (this._selectedActor){
		let actorCls = this._selectedActor._classId;
		let actorSchoolData = this._selectedActor._magicSchoolsData[actorCls];

		if (this._selectedMode == 0){ //Unlocking new school
			if (actorSchoolData && Object.keys(actorSchoolData).length > 0){
				let actorSchoolIds = [];
				let dataSchoolIds = Object.keys($magicSchoolsData);

				actorSchoolIds = actorSchoolIds.concat(Object.keys(actorSchoolData.PrimarySchools));
				actorSchoolIds = actorSchoolIds.concat(Object.keys(actorSchoolData.SecondarySchools));

				if (dataSchoolIds.length > 0){
					for (let i1 = 0; i1 < dataSchoolIds.length; i1++){
						let currSchool = $magicSchoolsData[dataSchoolIds[i1]];
						let key = dataSchoolIds[i1];
						if (!actorSchoolIds.includes(key)){
							dataSchools.push(currSchool);
							finalSchoolIds.push(parseInt(key));
						}
					}
				}
			}
		} else { //Learning Spells
			let actorSchoolIds = [];
			let actorCls = this._selectedActor._classId;
			let actorSchoolData = this._selectedActor._magicSchoolsData[actorCls];
			let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");

			actorSchoolIds = actorSchoolIds.concat(Object.keys(actorSchoolData[schoolType]));

			for (let i1 = 0; i1 < actorSchoolIds.length; i1++){
				let currSchool = actorSchoolData[schoolType][actorSchoolIds[i1]];
				let key = actorSchoolIds[i1];
				dataSchools.push(currSchool);
				finalSchoolIds.push(parseInt(key));
			}
		}
	}

	for (let i1 = 0; i1 < dataSchools.length; i1++){
		if (this._intComList.length < this.numVisibleRows()){
			this._intComList.push(dataSchools[i1].Name);
			this._intSchoolIdList.push(finalSchoolIds[i1]);
			this._totalItems++;
		} else {
			this._comList.push(this._intComList);
			this._schoolIdList.push(this._intSchoolIdList);

			this._intComList = [];
			this._intSchoolIdList = [];

			this._intComList.push(dataSchools[i1].Name);
			this._intSchoolIdList.push(finalSchoolIds[i1]);
			this._totalItems++;
		}
	}

	for (let i1 = 0; i1 < 1; i1++){
		if (this._intComList.length < this.numVisibleRows()){
			this._intComList.push("Cancel");
			this._intSchoolIdList.push(-1);
			this._totalItems++;
		} else {
			this._comList.push(this._intComList);
			this._schoolIdList.push(this._intSchoolIdList);

			this._intComList = [];
			this._intSchoolIdList = [];

			this._intComList.push("Cancel");
			this._intSchoolIdList.push(-1);
			this._totalItems++;
		}

		if (this._intComList.length > 0){
			this._comList.push(this._intComList);
			this._schoolIdList.push(this._intSchoolIdList);

			this._intComList = [];
			this._intSchoolIdList = [];
		}
	}
}

Window_SchoolList.prototype.processCursorMove = function() {
	let bResetSelect = false;
	if (this.isCursorMovable()) {
		var lastIndex = this.index();

		if (Input.isRepeated('down')) {
			if (this._totalIndex + 1 > this._totalItems){
				this._totalIndex = 0;
			}

			this._totalIndex++;

			bResetSelect = this.setIndexPage();
			this.cursorDown(Input.isTriggered('down'));
			if (bResetSelect){
				this.resetSelect("down");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('up')) {
			if (this._totalIndex - 1 < 1){
				this._totalIndex = this._totalItems;
			} else {
					this._totalIndex--;
			}

			bResetSelect = this.setIndexPage();
			this.cursorUp(Input.isTriggered('up'));

			if (bResetSelect){
				this.resetSelect("up");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
		} else if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
		} else if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
			this.cursorPagedown();
		} else if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
			this.cursorPageup();
		}

		if (this.index() !== lastIndex) {
			SoundManager.playCursor();
		}
	}
};

Window_SchoolList.prototype.setIndexPage = function(lastIndex, direction){
	if (this._totalIndex >= 1){
		let calcPageIndex = Math.ceil(this._totalIndex / this.numVisibleRows())-1;

		if (calcPageIndex != this._pageIndex){
			this._pageIndex = calcPageIndex;
			this.contents.clear();
			this.drawAllItems();
			return true;
		}
	} else {
		this._pageIndex = 0;
		this.contents.clear();
		this.drawAllItems();
		return true;
	}

	return false;
}

Window_SchoolList.prototype.resetSelect = function(direction){
	if (direction == "down") {
		this._index = 0;
		this.updateCursor();
		this.select(0);
	} else if (direction == "up") {
		let nextIndex = this._comList[this._pageIndex].length-1;
		this._index = nextIndex;
		this.updateCursor();
		this.select(nextIndex);
	}
}

Window_SchoolList.prototype.updateHelp = function(){
	this._helpWindow.clear();
	this._helpWindow.setText(this._helpTxtList[this._index]);
};

Window_SchoolList.prototype.select = function(index){
	this._index = index;
	if (index != -1 && this._comList.length > 0 && this._comList[this._pageIndex].length > 0){
		let selectedSchoolId = this._schoolIdList[this._pageIndex][index];

		if (selectedSchoolId && selectedSchoolId != -1){
			this._selectedSchoolId = selectedSchoolId;
			this._infoWnd.updateMode(1, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId]);
			this._costWnd.setMode(0, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId], 0, 0);
		} else {
			this._infoWnd.updateMode(1, this._selectedActor, [], []);
			this._costWnd.setMode(-1, 0, [0], [0], 0, 0);
		}

		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();
	}
}

Window_SchoolList.prototype.processOk = function(){
	if (this._index > -1 && this._index < this._comList[this._pageIndex].length){
		if (this._comList[this._pageIndex][this._index] != 'Cancel'){
			let goldCost = 0;
			let itemCost = 0;
			let currPrtyGold = $gameParty.gold();
			let currPrtyItems = 0;
			let costItemId = 0;
			let bReqsMet = true;
			let dataItm = undefined;

			this._selectedSchoolId = this._schoolIdList[this._pageIndex][this._index];
			if (Object.keys(this._selectedActor).length > 0 && this._selectedMode == 0){
				let actLevel = this._selectedActor._level;
				let actClassId = this._selectedActor._classId;
				let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
				let schoolIds = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]);
				let schoolPriConfig = $magicSchoolsData[this._selectedSchoolId].PrimaryConfig;
				let schoolSecdConfig = $magicSchoolsData[this._selectedSchoolId].SecondaryConfig;
				if (bEnableGoldCost){
					goldCost = calculateSchoolGoldCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds
					);
				}

				if (bEnableItemCost){
					costItemId = getSchoolCostItemId(this._selectedSchoolId);
					dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
					if (dataItm){
						currPrtyItems = $gameParty.numItems(dataItm);
					}

					itemCost = calculateSchoolItemCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds
					);
				}
			}

			if (bEnableGoldCost && goldCost > currPrtyGold) {
				bReqsMet = false;
			}

			if (bEnableItemCost && dataItm && itemCost > currPrtyItems) {
				bReqsMet = false;
			}

			if (!bReqsMet){
				SoundManager.playCancel();
			} else {
				Window_Selectable.prototype.processOk.apply(this);
			}
		} else{
			Window_Selectable.prototype.processCancel.apply(this);
		}
	} else{
		Window_Selectable.prototype.processCancel.apply(this);
	}
}

Window_SchoolList.prototype.refresh = function(){
	this.contents.clear();
	this.buildComList();
	this.drawAllItems();
}

Window_SchoolList.prototype.deactivate = function(){
	Window_Base.prototype.deactivate.call(this);
	this._pageIndex = 0;
	this._totalIndex = 1;
}



/* Window_SchoolTreeList Functions */
Window_SchoolTreeList.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolTreeList.prototype.constructor = Window_SchoolTreeList;

Window_SchoolTreeList.prototype.initialize = function(x, y, w, h, infoWnd, helpWnd){
	this._infoWnd = infoWnd;
	this._helpWindow = helpWnd;
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._comList = [];
	this._intComList = [];
	this._treeIdList = [];
	this._intTreeIdList = [];
	this._helpTextList = [];
	this._intHelpTextList = [];
	this._pageIndex = 0;
	this._totalIndex = 1;
	this._totalItems = 0;
	this._selectedActor = {};
	this._selectedSchoolId = 0;
	this._selectedTreeId = 0;
	this._selectedSchoolTypeId = 0;

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolTreeList.prototype.setSelectedSchoolId = function(schId) {
	this._selectedSchoolId = schId;
	this.refresh();
}

Window_SchoolTreeList.prototype.setSelectedSchoolTypeId = function(schoolTypeId){
	this._selectedSchoolTypeId = schoolTypeId;
	this.refresh();
}

Window_SchoolTreeList.prototype.setHelpWindow = function(helpWnd){
	this._helpWindow = helpWnd;

	this.callUpdateHelp();

}

Window_SchoolTreeList.prototype.callUpdateHelp = function() {
	if (this.active && this._helpWindow) {
		this.updateHelp();
	}
}

Window_SchoolTreeList.prototype.updateHelp = function(){
	this._helpWindow.clear();
	this._helpWindow.setText(this._helpTextList[this._pageIndex][this._index]);
}

Window_SchoolTreeList.prototype.getHeight = function() { return this._height; }
Window_SchoolTreeList.prototype.getWidth = function() { return this._width; }
Window_SchoolTreeList.prototype.getSelectedTreeId = function() { return this._selectedTreeId; }
Window_SchoolTreeList.prototype.setActorData = function(selAct) {
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolTreeList.prototype.maxItems = function() { return (this._comList.length > 0 ? this._comList[this._pageIndex].length : 0); }
Window_SchoolTreeList.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolTreeList.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolTreeList.prototype.getCurrentComponent = function() { return this._currentCmp; }
Window_SchoolTreeList.prototype.getCurrentCatalyst = function() { return this._currentCat; }
Window_SchoolTreeList.prototype.itemRect = function(index){
	let rect = new Rectangle();
	let maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = Math.floor(this.itemHeight() + (this.itemHeight() * 0.25));
	rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	return rect;
}

Window_SchoolTreeList.prototype.numVisibleRows = function() {
	return 5;
}
Window_SchoolTreeList.prototype.setCurrentCompId = function(cmpId) { this._selectedComponents[this._currentCmp] = cmpId; }
Window_SchoolTreeList.prototype.setCurrentCatId = function(catId) { this._selectedCatalysts[this._currentCat] = catId; }
Window_SchoolTreeList.prototype.resetPallete = function(){
	this._selectedMode = 0;
	this.refresh();
}

Window_SchoolTreeList.prototype.drawItem = function(index){
	let rect = this.itemRectForText(index);
	let x = rect.width/2;
	let y = rect.y + (rect.height/2) - this.lineHeight() * 0.5;
	let w = rect.width - this.textPadding();

	let actSchoolData = this._selectedActor._magicSchoolsData;
	let classId = this._selectedActor._classId;
	this._selectedTreeId = this._treeIdList[this._pageIndex][index];
	if (actSchoolData && Object.keys(actSchoolData).length > 0 &&
			this._selectedSchoolId > 0 && this._selectedTreeId > 0 &&
			this._comList[this._pageIndex][index] != "Cancel"){
		let globalGradeType = (this._selectedSchoolTypeId == 0 ? 'PrimaryGradeConfig' : 'SecondaryGradeConfig');
		let gradeType = (this._selectedSchoolTypeId == 0 ? 'PrimarySchools' : 'SecondarySchools');
		let actorClass = $dataClasses.filter(cls => cls && cls.id == classId);
		let clsGrade = (actorClass.length > 0 ? actorClass[0].ClassGrade : 0);
		let unlearnedSkills = [];
		let bypassCheck = false;
		if (clsGrade != 0){
			let gradeConfig = (clsGrade == "1" ? "GradeConfig1" : (clsGrade == "2" ? "GradeConfig2" : "GradeConfig3"));
			let treeGradeConfig = $magicSchoolsData[this._selectedSchoolId].Trees[this._selectedTreeId][globalGradeType][gradeConfig];
			if (treeGradeConfig){
				let treeSkills = treeGradeConfig.Config;
				let learnableSkills = $dataSkills.filter(skl => skl && skl.CanLearn && treeSkills.includes(String(skl.id)));
				let playerSchoolType = actSchoolData[classId][gradeType];
				if (playerSchoolType.hasOwnProperty(this._selectedSchoolId)){
					let playerSchool =  actSchoolData[classId][gradeType][this._selectedSchoolId];
					if (playerSchool.Trees.hasOwnProperty(this._selectedTreeId)){
						let playerSchoolTrees = actSchoolData[classId][gradeType][this._selectedSchoolId].Trees;
						if (Object.keys(playerSchoolTrees).length > 0){
							if (playerSchoolTrees.hasOwnProperty(this._selectedTreeId)){
								let playerSkills = playerSchoolTrees[this._selectedTreeId].Spells;
								unlearnedSkills = learnableSkills.filter(skl => skl && !playerSkills.includes(skl.id));
							} else {
								bypassCheck = true;
							}
						} else {
							bypassCheck = true;
						}
					} else {
						bypassCheck = true;
					}
				} else {
					bypassCheck = true;
				}
			} else {
				bypassCheck = true;
			}

			if (unlearnedSkills.length > 0 || bypassCheck){
				this.changePaintOpacity(true);
			} else {
				this.changePaintOpacity(false);
			}
		} else {
			this.changePaintOpacity(true);
		}
	} else {
		this.changePaintOpacity(true);
	}

	this.drawText(this._comList[this._pageIndex][index], rect.x, y, w , 'center');
}

Window_SchoolTreeList.prototype.buildComList = function(){
	this._comList = [];
	this._intComList = [];
	this._treeIdList = [];
	this._intTreeIdList = [];
	this._helpTextList = [];
	this._intHelpTextList = [];
	this._totalItems = 0

	let treeNames = [];
	let helpTxtData = [];
	let treeIds = [];

	let actSchoolData = this._selectedActor._magicSchoolsData;
	let classId = this._selectedActor._classId;
	if (actSchoolData && Object.keys(actSchoolData).length > 0 &&
			this._selectedSchoolId > 0){
		let globalGradeType = (this._selectedSchoolTypeId == 0 ? 'PrimaryGradeConfig' : 'SecondaryGradeConfig');
		let gradeType = (this._selectedSchoolTypeId == 0 ? 'PrimarySchools' : 'SecondarySchools');
		let actorClass = $dataClasses.filter(cls => cls && cls.id == classId);
		let clsGrade = (actorClass.length > 0 ? actorClass[0].ClassGrade : 0);
		let unlearnedSkills = [];
		let bypassCheck = false;
		if (clsGrade != 0){
			let gradeConfig = (clsGrade == "1" ? "GradeConfig1" : (clsGrade == "2" ? "GradeConfig2" : "GradeConfig3"));
			let globalTrees = $magicSchoolsData[this._selectedSchoolId].Trees;

			for (let treeId of Object.keys(globalTrees)){
				let treeGradeConfig = $magicSchoolsData[this._selectedSchoolId].Trees[treeId][globalGradeType][gradeConfig];
				if (treeGradeConfig){
					let treeSkills = treeGradeConfig.Config;
					let learnableSkills = $dataSkills.filter(skl => skl && skl.CanLearn && treeSkills.includes(String(skl.id)));
					let playerSchoolType = actSchoolData[classId][gradeType];
					if (playerSchoolType.hasOwnProperty(this._selectedSchoolId)){
						let playerSchool =  actSchoolData[classId][gradeType][this._selectedSchoolId];
						if (playerSchool.Trees.hasOwnProperty(treeId)){
							let playerSchoolTrees = actSchoolData[classId][gradeType][this._selectedSchoolId].Trees;
							if (Object.keys(playerSchoolTrees).length > 0){
								if (playerSchoolTrees.hasOwnProperty(treeId)){
									let playerSkills = playerSchoolTrees[treeId].Spells;
									unlearnedSkills = learnableSkills.filter(skl => skl && !playerSkills.includes(skl.id));
								} else {
									bypassCheck = true;
								}
							} else {
								bypassCheck = true;
							}
						} else {
							bypassCheck = true;
						}
					} else {
						bypassCheck = true;
					}
				} else {
					bypassCheck = true;
				}

				let tree = $magicSchoolsData[this._selectedSchoolId].Trees[treeId];
				treeNames.push(tree.Name);
				treeIds.push(treeId);

				if (unlearnedSkills.length > 0 || bypassCheck){
					helpTxtData.push("Learn skills from the " + tree.Name + " tree.");
				} else {
					helpTxtData.push("Learned all available skills in the " + tree.Name + " tree.");
				}
			}
		}
	}

	for (let i1 = 0; i1 < treeNames.length; i1++){
		if (this._intComList.length < this.numVisibleRows()){
			this._intComList.push(treeNames[i1]);
			this._intTreeIdList.push(treeIds[i1]);
			this._intHelpTextList.push(helpTxtData[i1]);
			this._totalItems++;
		} else {
			this._comList.push(this._intComList);
			this._treeIdList.push(this._intTreeIdList);
			this._helpTextList.push(this._intHelpTextList);

			this._intComList = [];
			this._intTreeIdList = [];
			this._intHelpTextList = [];

			this._intComList.push(treeNames[i1]);
			this._intTreeIdList.push(treeIds[i1]);
			this._intHelpTextList.push(helpTxtData[i1]);
			this._totalItems++;
		}
	}

	for (let i1 = 0; i1 < 1; i1++){
		if (this._intComList.length < this.numVisibleRows()){
			this._intComList.push("Cancel");
			this._intTreeIdList.push(-1);
			this._intHelpTextList.push("Return to the school type selection list.")
			this._totalItems++;
		} else {
			this._comList.push(this._intComList);
			this._treeIdList.push(this._intTreeIdList);
			this._helpTextList.push(this._intHelpTextList);

			this._intComList = [];
			this._intTreeIdList = [];
			this._intHelpTextList = [];

			this._intComList.push("Cancel");
			this._intHelpTextList.push("Return to the school type selection list.")
			this._intTreeIdList.push(-1);
			this._totalItems++;
		}
	}

	if (this._intComList.length > 0){
		this._comList.push(this._intComList);
		this._treeIdList.push(this._intTreeIdList);
		this._helpTextList.push(this._intHelpTextList);
	}
}

Window_SchoolTreeList.prototype.processCursorMove = function() {
	let bResetSelect = false;
	if (this.isCursorMovable()) {
		var lastIndex = this.index();

		if (Input.isRepeated('down')) {
			if (this._totalIndex + 1 > this._totalItems){
				this._totalIndex = 0;
			}

			this._totalIndex++;

			bResetSelect = this.setIndexPage();
			this.cursorDown(Input.isTriggered('down'));
			if (bResetSelect){
				this.resetSelect("down");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('up')) {
			if (this._totalIndex - 1 < 1){
				this._totalIndex = this._totalItems;
			} else {
					this._totalIndex--;
			}

			bResetSelect = this.setIndexPage();
			this.cursorUp(Input.isTriggered('up'));

			if (bResetSelect){
				this.resetSelect("up");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
		} else if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
		} else if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
			this.cursorPagedown();
		} else if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
			this.cursorPageup();
		}

		if (this.index() !== lastIndex) {
			SoundManager.playCursor();
		}
	}
};

Window_SchoolTreeList.prototype.setIndexPage = function(lastIndex, direction){
	if (this._totalIndex >= 1){
		let calcPageIndex = Math.ceil(this._totalIndex / this.numVisibleRows())-1;

		if (calcPageIndex != this._pageIndex){
			this._pageIndex = calcPageIndex;
			this.contents.clear();
			this.drawAllItems();
			return true;
		}
	} else {
		this._pageIndex = 0;
		this.contents.clear();
		this.drawAllItems();
		return true;
	}

	return false;
}

Window_SchoolTreeList.prototype.resetSelect = function(direction){
	if (direction == "down") {
		this._index = 0;
		this.updateCursor();
		this.select(0);
	} else if (direction == "up") {
		let nextIndex = this._comList[this._pageIndex].length-1;
		this._index = nextIndex;
		this.updateCursor();
		this.select(nextIndex);
	}
}

Window_SchoolTreeList.prototype.select = function(index){
	this._index = index;

	if (this._comList.length > 0 && this._comList[this._pageIndex].length > 0){
		this._selectedTreeId = this._treeIdList[this._pageIndex][index];

		if (this._selectedTreeId != -1){
			this._infoWnd.updateMode(2, this._selectedActor, [this._selectedSchoolTypeId], [this._selectedSchoolId], [this._selectedTreeId]);
		} else {
			this._infoWnd.updateMode(2, this._selectedActor, [], [this._selectedSchoolId], []);
		}

		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();
	}
}

Window_SchoolTreeList.prototype.processOk = function(){
	if (this._index > -1 && this._index < this._comList[this._pageIndex].length){
		if (this._comList[this._pageIndex][this._index] != 'Cancel'){
			let actSchoolData = this._selectedActor._magicSchoolsData;
			let classId = this._selectedActor._classId;
			if (actSchoolData && Object.keys(actSchoolData).length > 0 &&
					this._selectedSchoolId > 0 && this._selectedTreeId > 0){
				let globalGradeType = (this._selectedSchoolTypeId == 0 ? 'PrimaryGradeConfig' : 'SecondaryGradeConfig');
				let gradeType = (this._selectedSchoolTypeId == 0 ? 'PrimarySchools' : 'SecondarySchools');
				let actorClass = $dataClasses.filter(cls => cls && cls.id == classId);
				let clsGrade = (actorClass.length > 0 ? actorClass[0].ClassGrade : 0);
				let unlearnedSkills = [];
				let bypassCheck = false;
				if (clsGrade != 0){
					let gradeConfig = (clsGrade == "1" ? "GradeConfig1" : (clsGrade == "2" ? "GradeConfig2" : "GradeConfig3"));
					let treeGradeConfig = $magicSchoolsData[this._selectedSchoolId].Trees[this._selectedTreeId][globalGradeType][gradeConfig];
					if (treeGradeConfig){
						let treeSkills = treeGradeConfig.Config;
						let learnableSkills = $dataSkills.filter(skl => skl && skl.CanLearn && treeSkills.includes(String(skl.id)));
						let playerSchoolType = actSchoolData[classId][gradeType];
						if (playerSchoolType.hasOwnProperty(this._selectedSchoolId)){
							let playerSchool =  actSchoolData[classId][gradeType][this._selectedSchoolId];
							if (playerSchool.Trees.hasOwnProperty(this._selectedTreeId)){
								let playerSchoolTrees = actSchoolData[classId][gradeType][this._selectedSchoolId].Trees;
								if (Object.keys(playerSchoolTrees).length > 0){
									if (playerSchoolTrees.hasOwnProperty(this._selectedTreeId)){
										let playerSkills = playerSchoolTrees[this._selectedTreeId].Spells;
										unlearnedSkills = learnableSkills.filter(skl => skl && !playerSkills.includes(skl.id));
									} else {
										bypassCheck = true;
									}
								} else {
									bypassCheck = true;
								}
							} else {
								bypassCheck = true;
							}
						} else {
							bypassCheck = true;
						}
					} else {
						bypassCheck = true;
					}

					if (unlearnedSkills.length > 0 || bypassCheck){
						this._selectedTreeId = this._treeIdList[this._pageIndex][this._index];
						Window_Selectable.prototype.processOk.apply(this);
					} else {
						SoundManager.playCancel();
					}
				} else {
					this._selectedTreeId = this._treeIdList[this._pageIndex][this._index];
					Window_Selectable.prototype.processOk.apply(this);
				}
			}

		} else{
			Window_Selectable.prototype.processCancel.apply(this);
		}
	} else{
		Window_Selectable.prototype.processCancel.apply(this);
	}
}

Window_SchoolTreeList.prototype.refresh = function(){
	this.contents.clear();
	this.buildComList();
	this.drawAllItems();
}

Window_SchoolTreeList.prototype.deactivate = function(){
	Window_Base.prototype.deactivate.call(this);
	this._pageIndex = 0;
	this._totalIndex = 1;
}


/* Window_SchoolSpellList Functions */
Window_SchoolSpellList.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolSpellList.prototype.constructor = Window_SchoolSpellList;

Window_SchoolSpellList.prototype.initialize = function(x, y, w, h, infoWnd, costWnd){
	this._infoWnd = infoWnd;
	this._costWnd = costWnd;
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._comList = [];
	this._intComList = [];
	this._skillIdList = [];
	this._intSkillIdList = [];
	this._pageIndex = 0;
	this._totalIndex = 1;
	this._totalItems = 0;
	this._selectedActor = {};
	this._selectedSchoolType = 0;
	this._selectedSchoolId = 0;
	this._selectedTreeId = 0;
	this._selectedSkillId = 0;
	this._goldCost = 0;

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolSpellList.prototype.setSelectedSchoolData = function(selAct, schId, typeId, treeId) {
	this._selectedSchoolId = schId;
	this._selectedTreeId = treeId;
	this._selectedSchoolType = typeId;
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolSpellList.prototype.getHeight = function() { return this._height; }
Window_SchoolSpellList.prototype.getWidth = function() { return this._width; }
Window_SchoolSpellList.prototype.getSelectedSpellId = function() { return this._selectedSkillId; }
Window_SchoolSpellList.prototype.maxItems = function() { return (this._comList.length > 0 ? this._comList[this._pageIndex].length : 0); }
Window_SchoolSpellList.prototype.getGoldCost = function() { return this._goldCost; }
Window_SchoolSpellList.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolSpellList.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolSpellList.prototype.itemRect = function(index){
	let rect = new Rectangle();
	let maxCols = this.maxCols();
	rect.width = this.itemWidth();
	rect.height = Math.floor(this.itemHeight() + (this.itemHeight() * 0.1));
	rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
	rect.y = Math.floor(index / maxCols) * rect.height;
	return rect;
}

Window_SchoolSpellList.prototype.numVisibleRows = function() {
	return 4;
}

Window_SchoolSpellList.prototype.resetPallete = function(){
	this._selectedMode = 0;
	this.refresh();
}

Window_SchoolSpellList.prototype.drawItem = function(index){
	let rect = this.itemRectForText(index);
	let x = rect.width/2;
	let y = rect.y + (rect.height/2) - this.lineHeight() * 0.5;
	let w = rect.width - this.textPadding();

	if (this._selectedActor && this._comList[this._pageIndex][index] != "Cancel"){
		let actLevel = this._selectedActor._level;
		let actClassId = this._selectedActor._classId;
		let spellId = this._skillIdList[this._pageIndex][index];
		let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
		let schoolIds = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]);
		let schoolPriConfig = $magicSchoolsData[this._selectedSchoolId].PrimaryConfig;
		let schoolSecdConfig = $magicSchoolsData[this._selectedSchoolId].SecondaryConfig;
		let skillData = $dataSkills.find(sk => sk && sk.id == spellId);
		let currPrtyGold = $gameParty.gold();
		let currPrtyItems = 0;
		let goldCost = 0;
		let itemCost = 0;
		let bMeetsRequirements = true;
		let dataItm = undefined;

		if (skillData) {
			if (skillData.ReqLevel <= actLevel) {
				if (bEnableGoldCost){
					goldCost = calculateSkillGoldCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds,
						skillData,
						this._selectedSchoolId
					);
				}

				if (bEnableItemCost){
					costItemId = getSpellCostItemId(this._selectedSchoolId, skillData.CostItemId);
					dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
					if (dataItm){
						currPrtyItems = $gameParty.numItems(dataItm);
					}

					itemCost = calculateSkillItemCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds,
						skillData,
						this._selectedSchoolId
					);
				}
			} else {
				bMeetsRequirements = false;
			}
		} else {
			bMeetsRequirements = false;
		}

		if (bEnableGoldCost && currPrtyGold < goldCost) {
			bMeetsRequirements = false;
		}

		if (bEnableItemCost && dataItm && currPrtyItems < itemCost) {
			bMeetsRequirements = true;
		}

		if (!bMeetsRequirements) {
			this.changePaintOpacity(false);
		} else {
			this.changePaintOpacity(true);
		}
	}

	this.drawText(this._comList[this._pageIndex][index], rect.x, y, w , 'center');
}

Window_SchoolSpellList.prototype.buildComList = function(){
	this._comList = [];
	this._intComList = [];
	this._skillIdList = [];
	this._intSkillIdList = [];
	this._totalItems = 0

	let actSchoolData = this._selectedActor._magicSchoolsData;
	let currGlblTree = [];
	let treeConfigsGlbl = "";
	let glblGradeConfig = {};
	let treeConfigKeys = [];
	let finalSkillIds = [];
	let skillNameList = [];

	if (actSchoolData && Object.keys(actSchoolData).length > 0 &&
			this._selectedSchoolId > 0){
		//Actor Data
		let actClassId = this._selectedActor._classId;
		let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
		let currActTree = this._selectedActor._magicSchoolsData[actClassId][schoolType][this._selectedSchoolId].Trees[this._selectedTreeId];
		let clsGrade = $dataClasses.find(cls => cls && cls.id == this._selectedActor._classId).ClassGrade;
		let actorSkillIds = [];

		if (currActTree){
			actorSkillIds = currActTree.Spells;
		}

		//Global Data
		if (this._selectedTreeId > 0){
			currGlblTree = $magicSchoolsData[this._selectedSchoolId].Trees[this._selectedTreeId];
			treeConfigsGlbl = (this._selectedSchoolType == 0 ? currGlblTree.PrimaryGradeConfig : currGlblTree.SecondaryGradeConfig);
			treeConfigKeys = Object.keys(treeConfigsGlbl);

			for (let key of treeConfigKeys){
				if (key.includes(clsGrade)){
					glblGradeConfig = treeConfigsGlbl[key];
					break;
				}
			}

			let glblSkills = glblGradeConfig.Config;
			glblSkills = glblSkills.filter(gSkId => gSkId)
					.reduce((obj, gSkId) => {
						obj.push(parseInt(gSkId));
						return obj;
					}, []);

			if (actorSkillIds.length > 0){
				finalSkillIds = glblSkills.filter(gSkId => !actorSkillIds.includes(gSkId));
			} else {
				finalSkillIds = glblSkills.filter(gSkId => glblSkills.includes(gSkId));
			}


			let finalSkills = $dataSkills.filter(sk => sk && finalSkillIds.contains(sk.id) && sk.CanLearn);
			finalSkillIds = [];

			for (let i1 = 0; i1 < finalSkills.length; i1++){
				let sk = finalSkills[i1];
				skillNameList.push(sk.name);
				finalSkillIds.push(sk.id);
			}
		}

		for (let i1 = 0; i1 < skillNameList.length; i1++){
			if (this._intComList.length < this.numVisibleRows()){
				this._intComList.push(skillNameList[i1]);
				this._intSkillIdList.push(finalSkillIds[i1]);
				this._totalItems++;
			} else {
				this._comList.push(this._intComList);
				this._skillIdList.push(this._intSkillIdList);

				this._intComList = [];
				this._intSkillIdList = [];

				this._intComList.push(skillNameList[i1]);
				this._intSkillIdList.push(finalSkillIds[i1]);
				this._totalItems++;
			}
		}
	}

	for (let i1 = 0; i1 < 1; i1++){
		if (this._intComList.length < this.numVisibleRows()){
			this._intComList.push("Cancel");
			this._intSkillIdList.push(-1);
			this._totalItems++;
		} else {
			this._comList.push(this._intComList);
			this._skillIdList.push(this._intSkillIdList);

			this._intComList = [];
			this._intSkillIdList = [];

			this._intComList.push("Cancel");
			this._intSkillIdList.push(-1);
			this._totalItems++;
		}
	}

	if (this._intComList.length > 0){
		this._comList.push(this._intComList);
		this._skillIdList.push(this._intSkillIdList);

		this._intComList = [];
		this._intSkillIdList = [];
	}
}

Window_SchoolSpellList.prototype.processCursorMove = function() {
	let bResetSelect = false;
	if (this.isCursorMovable()) {
		var lastIndex = this.index();

		if (Input.isRepeated('down')) {
			if (this._totalIndex + 1 > this._totalItems){
				this._totalIndex = 0;
			}

			this._totalIndex++;

			bResetSelect = this.setIndexPage();
			this.cursorDown(Input.isTriggered('down'));
			if (bResetSelect){
				this.resetSelect("down");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('up')) {
			if (this._totalIndex - 1 < 1){
				this._totalIndex = this._totalItems;
			} else {
					this._totalIndex--;
			}

			bResetSelect = this.setIndexPage();
			this.cursorUp(Input.isTriggered('up'));

			if (bResetSelect){
				this.resetSelect("up");
				bResetSelect = false;
			}
		} else if (Input.isRepeated('right')) {
			this.cursorRight(Input.isTriggered('right'));
		} else if (Input.isRepeated('left')) {
			this.cursorLeft(Input.isTriggered('left'));
		} else if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
			this.cursorPagedown();
		} else if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
			this.cursorPageup();
		}

		if (this.index() !== lastIndex) {
			SoundManager.playCursor();
		}
	}
};

Window_SchoolSpellList.prototype.setIndexPage = function(lastIndex, direction){
	if (this._totalIndex >= 1){
		let calcPageIndex = Math.ceil(this._totalIndex / this.numVisibleRows())-1;

		if (calcPageIndex != this._pageIndex){
			this._pageIndex = calcPageIndex;
			this.contents.clear();
			this.drawAllItems();
			return true;
		}
	} else {
		this._pageIndex = 0;
		this.contents.clear();
		this.drawAllItems();
		return true;
	}

	return false;
}

Window_SchoolSpellList.prototype.resetSelect = function(direction){
	if (direction == "down") {
		this._index = 0;
		this.updateCursor();
		this.select(0);
	} else if (direction == "up") {
		let nextIndex = this._comList[this._pageIndex].length-1;
		this._index = nextIndex;
		this.updateCursor();
		this.select(nextIndex);
	}
}

Window_SchoolSpellList.prototype.updateHelp = function(){
	this._helpWindow.clear();
	this._helpWindow.setText(this._helpTxtList[this._index]);
};

Window_SchoolSpellList.prototype.select = function(index){
	this._index = index;
	if (this._comList.length > 0 && this._comList[this._pageIndex].length > 0){
		let selectedSkillId = this._skillIdList[this._pageIndex][index];
		if (selectedSkillId){
			if (selectedSkillId != -1){
				this._infoWnd.updateMode(3, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId], [this._selectedTreeId], [selectedSkillId]);
				this._costWnd.setMode(1, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId], [this._selectedTreeId], [selectedSkillId]);
			} else {
				this._infoWnd.updateMode(3, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId], [this._selectedTreeId], []);
				this._costWnd.setMode(-1, this._selectedActor, [this._selectedSchoolType], [this._selectedSchoolId], [this._selectedTreeId], []);
			}
		}

		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();
	}
}

Window_SchoolSpellList.prototype.processOk = function(){
	if (this._index > -1 && this._index < this._comList[this._pageIndex].length){
		if (this._comList[this._pageIndex][this._index] != 'Cancel'){
			let spellId = this._skillIdList[this._pageIndex][this._index];
			let goldCost = 0;
			let itemCost = 0;
			let currPrtyGold = $gameParty.gold();
			let currPrtyItems = 0;
			let bMeetsRequirements = true;
			let dataItm = undefined;

			if (Object.keys(this._selectedActor).length > 0){
				let actLevel = this._selectedActor._level;
				let actClassId = this._selectedActor._classId;
				let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
				let schoolIds = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]);
				let schoolPriConfig = $magicSchoolsData[this._selectedSchoolId].PrimaryConfig;
				let schoolSecdConfig = $magicSchoolsData[this._selectedSchoolId].SecondaryConfig;
				let skillData = $dataSkills.find(sk => sk && sk.id == spellId);

				if (skillData) {
					if (skillData.ReqLevel <= actLevel) {
						if (bEnableGoldCost){
							goldCost = calculateSkillGoldCost(
								schoolType,
								schoolPriConfig,
								schoolSecdConfig,
								schoolIds,
								skillData,
								this._selectedSchoolId
							);
						}

						if (bEnableItemCost){
							costItemId = getSpellCostItemId(this._selectedSchoolId, skillData.CostItemId);
							dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
							if (dataItm){
								currPrtyItems = $gameParty.numItems(dataItm);
							}

							itemCost = calculateSkillItemCost(
								schoolType,
								schoolPriConfig,
								schoolSecdConfig,
								schoolIds,
								skillData,
								this._selectedSchoolId
							);
						}
					} else {
						bMeetsRequirements = false;
					}
				} else {
					bMeetsRequirements = false;
				}
			}

			if (bEnableGoldCost && currPrtyGold < goldCost) {
				bMeetsRequirements = false;
			}

			if (bEnableItemCost && dataItm && currPrtyItems < itemCost) {
				bMeetsRequirements = false;
			}

			if (!bMeetsRequirements) {
				SoundManager.playCancel();
			} else {
				this._selectedSkillId = spellId;
				Window_Selectable.prototype.processOk.apply(this);
			}
		} else{
			Window_Selectable.prototype.processCancel.apply(this);
		}
	} else{
		Window_Selectable.prototype.processCancel.apply(this);
	}
}

Window_SchoolSpellList.prototype.refresh = function(){
	this.contents.clear();
	this.buildComList();
	this.drawAllItems();
}

Window_SchoolSpellList.prototype.deactivate = function(){
	Window_Base.prototype.deactivate.call(this);
	this._pageIndex = 0;
	this._totalIndex = 1;
}


/* Window_SchoolLimits Funtions */
Window_SchoolLimits.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolLimits.prototype.constructor = Window_SchoolLimits;

Window_SchoolLimits.prototype.initialize = function(x, y, w, h){
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._selectedActor = {};
	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolLimits.prototype.getHeight = function() { return this._height; }
Window_SchoolLimits.prototype.getWidth = function() { return this._width; }
Window_SchoolLimits.prototype.maxItems = function() { return (this._comList ? this._comList.length : 1);}
Window_SchoolLimits.prototype.numVisibleRows = function() { return 2; }
Window_SchoolLimits.prototype.setActorData = function(selAct) {
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolLimits.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolLimits.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolLimits.prototype.resetPallete = function(){
	this._selectedMode = 0;
	this.refresh();
}

Window_SchoolLimits.prototype.buildInfo = function(){
	this._comList = [];
	this._totalItems = 0

	let actSchoolData = this._selectedActor._magicSchoolsData;

	if (actSchoolData && Object.keys(actSchoolData).length > 0){
		//Actor Data
		let actClassId = this._selectedActor._classId;
		let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
		let currPrimaries = Object.keys(this._selectedActor._magicSchoolsData[actClassId]["PrimarySchools"]).length;
		let currSecondairies = Object.keys(this._selectedActor._magicSchoolsData[actClassId]["SecondarySchools"]).length;
		let maxPrimaries = $dataClasses.find(cls => cls && cls.id == actClassId).MaxPrimarySchools;
		let maxSecondaries = $dataClasses.find(cls => cls && cls.id == actClassId).MaxSecondarySchools;
		let finalPrimaries = maxPrimaries - currPrimaries;
		let finalSecondaries = maxSecondaries - currSecondairies;
		let infoFormat = JSON.parse(mainInfoFmtTxt);
		
		if (infoFormat) {
			let title = "Available School Slots";
			let bEnableWordwrap = false;
			let wndInfo = "";
			let priSlotStr = "";
			let secdSlotStr = "";

			let halfWndW = this._width / 2;
			this.contents.fontSize = 26;

			let titleLen = this.contents.measureTextWidth(title);
			let titlePos = Math.floor(halfWndW - (titleLen/1.5));

			titlePos = Math.floor((title.length < 10 ? titlePos - (10 + (title.length/2)) : titlePos + (title.length/2)));
			title = addXShift(title, titlePos);
			title = changeFontSize(title, 26);
			title = addBreak(title, 'end');

			priSlotStr = "Primary Slots: " + String(finalPrimaries);
			priSlotStr = addXShift(priSlotStr, 5);
			priSlotStr = changeFontSize(priSlotStr, 22);
			priSlotStr = addBreak(priSlotStr, 'end');

			wndInfo += priSlotStr;

			secdSlotStr = "Secondary Slots: " + String(finalSecondaries);
			secdSlotStr = addXShift(secdSlotStr, 5);
			secdSlotStr = changeFontSize(secdSlotStr, 22);
			secdSlotStr = addBreak(secdSlotStr, 'end');

			wndInfo += secdSlotStr;

			let totalText = "";
			totalText = totalText.concat(title, wndInfo, "", "", "", "");
			let text = infoFormat.format(title, wndInfo, "", "", "", "");
			let textState = {};

			if (totalText.length > 0){
				textState = { index: 0 };
				textState.originalText = text;
				textState.text = this.convertEscapeCharacters(text);
				let convertedTextHeight = this.calcTextHeight(textState, true);
				this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

				if (bEnableWordwrap) {
					var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
					var multi2 =  6;
					let multi3 = (txtLen >= 600 ? 4 : 10);
					var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

					this._allTextHeight += this._allTextHeight * 0.25;
					let numOfBreaks = text.match(/<br>/g).length;
					this._allTextHeight += numOfBreaks * 15;
				} else {
					this._allTextHeight = 2;
				}

				this.createContents();
				this.drawTextEx(text, 0, 0);
			}
		}
	}
}

Window_SchoolLimits.prototype.refresh = function() {
	this.contents.clear();
	this.buildInfo();
}


/* Window_SchoolCost Funtions */
Window_SchoolCost.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolCost.prototype.constructor = Window_SchoolCost;

Window_SchoolCost.prototype.initialize = function(x, y, w, h){
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._selectedActor = {};
	this._selectedSchoolType = 0;
	this._selectedSchoolId = 0;
	this._selectedTreeId = 0;
	this._selectedSkillId = 0;
	this._mode = -1;
	this._goldCost = 0;
	this._itemCost = 0;
	this._dataItm = {};
	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
	this.refresh();
}

Window_SchoolCost.prototype.setActorData = function(selAct){
	this._selectedActor = selAct;
	this.refresh();
}

Window_SchoolCost.prototype.getHeight = function() { return this._height; }
Window_SchoolCost.prototype.getWidth = function() { return this._width; }
Window_SchoolCost.prototype.maxItems = function() { return this._comList ? this._comList.length : 1; }
Window_SchoolCost.prototype.getGoldCost = function() { return this._goldCost; }
Window_SchoolCost.prototype.getItemCost = function() { return this._itemCost; }
Window_SchoolCost.prototype.getDataItem = function() { return this._dataItm; }
Window_SchoolCost.prototype.numVisibleRows = function() { return 3; }
Window_SchoolCost.prototype.setMode = function(newMode, selAct, selSchType, selSchId, selTreeId, selSkId) {
	this._mode = newMode;

	if (this._mode != -1){
		this._selectedActor = selAct;
		this._selectedSchoolType = (selSchType ? (selSchType.length > 0 ? selSchType[0] : -1) : -1);
		this._selectedSchoolId = (selSchId ? (selSchId.length > 0 ? selSchId[0] : -1) : -1);

		if (this._mode == 1){
			this._selectedTreeId = (selTreeId ? (selTreeId.length > 0 ? selTreeId[0] : -1) : -1);
			this._selectedSkillId = (selSkId ? (selSkId.length > 0 ? selSkId[0] : -1) : -1);
		}
	}

	this.refresh();
}

Window_SchoolCost.prototype.itemHeight = function() {
	let clientHeight = this._height - this.padding * 2;
	return Math.floor(clientHeight / this.numVisibleRows());
}

Window_SchoolCost.prototype.itemWidth = function() {
	return Math.floor((this._width - this.padding * 2 +
				this.spacing()) / this.maxCols() - this.spacing());
}

Window_SchoolCost.prototype.drawInfo = function(){
	if (this._mode != -1) {
		let actLevel = this._selectedActor._level;
		let actClassId = this._selectedActor._classId;
		let schoolType = (this._selectedSchoolType == 0 ? "PrimarySchools" : "SecondarySchools");
		let schoolIds = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]);
		let numSchoolsPresent = Object.keys(this._selectedActor._magicSchoolsData[actClassId][schoolType]).length;
		let schoolPriConfig = $magicSchoolsData[this._selectedSchoolId].PrimaryConfig;
		let schoolSecdConfig = $magicSchoolsData[this._selectedSchoolId].SecondaryConfig;
		let currPrtyGold = $gameParty.gold();
		let currPrtyItems = 0;
		let goldCost = 0;
		let itemCost = 0;
		let dataItm = undefined;
		let bMeetsLevelReq = true;
		let infoFormat = JSON.parse(mainInfoFmtTxt);
		
		if (infoFormat) {
			let bEnableWordwrap = false;
			let title = "Cost Requirements";
			let wndInfo = "";
			let gldCostInfo = "";
			let itmCostInfo = "";
			let reqLvlInfo = "";

			let halfWndW = this._width / 2;
			this.contents.fontSize = 26;

			let titleLen = this.contents.measureTextWidth(title);
			let titlePos = Math.floor(halfWndW - (titleLen/1.5));

			titlePos = Math.floor((title.length < 10 ? titlePos - (10 + (title.length/2)) : titlePos + (title.length/2)));
			title = addXShift(title, titlePos);
			title = changeFontSize(title, 26);
			title = addBreak(title, 'end');

			if (this._mode == 0) {
				if (bEnableGoldCost){
					goldCost = calculateSchoolGoldCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds
					);

					if (goldCost > 0){
						gldCostInfo = this.buildRequirementString(goldCost, 'gold', currPrtyGold, "", 0);
						wndInfo += gldCostInfo;
					}
				}

				if (bEnableItemCost){
					itemCost = calculateSchoolItemCost(
						schoolType,
						schoolPriConfig,
						schoolSecdConfig,
						schoolIds
					);

					costItemId = getSchoolCostItemId(this._selectedSchoolId);
					dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
					if (itemCost > 0 && dataItm){
						currPrtyItems = $gameParty.numItems(dataItm);
						itmCostInfo = this.buildRequirementString(itemCost, 'item', currPrtyItems, dataItm.name, dataItm.iconIndex);

						wndInfo += itmCostInfo;
					}
				}
			} else if (this._mode == 1) {
				let spellId = this._selectedSkillId;
				let skillData = $dataSkills.find(sk => sk && sk.id == spellId);
				if (skillData) {
					reqLvlInfo = this.buildRequirementString(skillData.ReqLevel, 'level', actLevel, "", 0);
					wndInfo += reqLvlInfo;

					if (actLevel < skillData.ReqLevel) {
						bMeetsLevelReq = false;
					}

					if (bEnableGoldCost){
						goldCost = calculateSkillGoldCost(
							schoolType,
							schoolPriConfig,
							schoolSecdConfig,
							schoolIds,
							skillData,
							this._selectedSchoolId
						);

						if (goldCost > 0){
							gldCostInfo = this.buildRequirementString(goldCost, 'gold', currPrtyGold, "", 0);
							wndInfo += gldCostInfo;
						}
					}

					if (bEnableItemCost){
						itemCost = calculateSkillItemCost(
							schoolType,
							schoolPriConfig,
							schoolSecdConfig,
							schoolIds,
							skillData,
							this._selectedSchoolId
						);

						costItemId = getSpellCostItemId(this._selectedSchoolId, skillData.CostItemId);
						dataItm =  $dataItems.find(itm => itm && itm.id == costItemId);
						if (itemCost > 0 && dataItm){
							currPrtyItems = $gameParty.numItems(dataItm);
							itmCostInfo = this.buildRequirementString(itemCost, 'item', currPrtyItems, dataItm.name, dataItm.iconIndex);

							wndInfo += itmCostInfo;
						}
					}
				}
			}

			let totalText = "";
			totalText = totalText.concat(title, wndInfo, "", "", "", "");
			let text = infoFormat.format(title, wndInfo, "", "", "", "");
			let textState = {};

			if (totalText.length > 0){
				textState = { index: 0 };
				textState.originalText = text;
				textState.text = this.convertEscapeCharacters(text);
				let convertedTextHeight = this.calcTextHeight(textState, true);
				this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

				if (bEnableWordwrap) {
					var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
					var multi2 =  6;
					let multi3 = (txtLen >= 600 ? 4 : 10);
					var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

					this._allTextHeight += this._allTextHeight * 0.25;
					let numOfBreaks = text.match(/<br>/g).length;
					this._allTextHeight += numOfBreaks * 15;
				} else {
					this._allTextHeight = 2;
				}

				this.createContents();
				this.drawTextEx(text, 0, 0);
			}
		}
	}
}

Window_SchoolCost.prototype.buildRequirementString = function(cost, typ, currAmt, itmName, itmIconIdx){
	let reqString = "";
	if (typ == "gold"){
		reqString = TextManager.currencyUnit + ": " + String(cost);

		if (currAmt < cost) {
			reqString = changeTextColor(reqString, 'both', reqNotMetColor, "FFFFFF")
		}
	} else if (typ == "item") {
		reqString = "\\i[" + itmIconIdx + "]" + itmName + " x" + String(cost);

		if (currAmt < cost){
			reqString = changeTextColor(reqString, 'both', reqNotMetColor, "FFFFFF")
		}
	} else if (typ == "level") {
		reqString = "Level: " + String(cost);

		if (currAmt < cost){
			reqString = changeTextColor(reqString, 'both', reqNotMetColor, "FFFFFF")
		}
	}

	reqString = changeFontSize(reqString, 22);
	reqString = addXShift(reqString, 5);
	reqString = addBreak(reqString, 'end');

	return reqString;
}

Window_SchoolCost.prototype.drawTextEx = function(text, x, y) {
	if (text) {
		let textState = { index: 0, x: x, y: y, left: x };
		textState.text = this.convertEscapeCharacters(text);
		textState.height = this.calcTextHeight(textState, false);
		while (textState.index < textState.text.length) {
			this.processCharacter(textState);
		}
		return textState.x - x;
	} else {
		return 0;
	}
};

Window_SchoolCost.prototype.refresh = function() {
	this.contents.clear();
	if (this._mode != -1 && this._selectedActor && this._selectedSchoolId != -1 &&
			this._selectedTreeId != -1 && this._selectedSkillId != -1){
		this.drawInfo();
	}
}


/* Window_SchoolInfo */
Window_SchoolInfo.prototype = Object.create(Window_Selectable.prototype);
Window_SchoolInfo.prototype.constructor = Window_SchoolInfo;

Window_SchoolInfo.prototype.initialize = function(x, y, w, h){
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._windowMode = 0;
	this._selectedActor = {};
	this._selectedSchoolId = 0;
	this._selectedTreeId = 0;
	this._selectedSkillId = 0;
	this._selectedSchoolType = 0;
	this._countdown = 0;
	this._arrowBlinkTimer = 0;
	this._lineHeight = this.lineHeight();

	Window_Selectable.prototype.initialize.call(this, x, y, w, h);
}

Window_SchoolInfo.prototype.getHeight = function() { return this._height; }
Window_SchoolInfo.prototype.getWidth = function() { return this._width; }

Window_SchoolInfo.prototype.setMode = function(newMode) {
	this._windowMode = newMode;
	this.refresh();
}

Window_SchoolInfo.prototype.mainInfo = function(){
	let fmt = undefined;
	let bEnableWordwrap = true;
	let text = undefined;
	let finalText = undefined;
	let textState = undefined;
	let totalText = "";
	let primaryNames = "Learned Primary Schools:<br>";
	let secondaryNames = "Learned Secondary Schools:<br>";

	fmt = JSON.parse(mainInfoFmtTxt || '');
	if (fmt){
		bEnableWordwrap = fmt.match(/<(?:WordWrap)>/i);
		let actCls = this._selectedActor._classId;
		let actSchoolData = this._selectedActor._magicSchoolsData[actCls];
		let actorPrimaries = actSchoolData["PrimarySchools"];
		let actorSecondaries = actSchoolData["SecondarySchools"];

		if (Object.keys(actorPrimaries).length > 0){
			for (let key of Object.keys(actorPrimaries)){
				let currSchool = actorPrimaries[key];
				primaryNames += currSchool.Name + ", ";
			}

			primaryNames = primaryNames.substr(0, primaryNames.length - 2);
			primaryNames += "<br><br>";
		}

		if (Object.keys(actorSecondaries).length > 0){
			for (let key of Object.keys(actorSecondaries)){
				let currSchool = actorSecondaries[key];
				secondaryNames += currSchool.Name + ", ";
			}

			secondaryNames = secondaryNames.substr(0, secondaryNames.length - 2);
		}

		totalText = totalText.concat(primaryNames, secondaryNames);
		text = fmt.format(primaryNames, secondaryNames);

		if (totalText.length > 0){
			textState = { index: 0 };
			textState.originalText = text;
			textState.text = this.convertEscapeCharacters(text);
			let convertedTextHeight = this.calcTextHeight(textState, true);
			this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

			if (bEnableWordwrap) {
				var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
				var multi2 =  8;
				let multi3 = (txtLen >= 600 ? 4 : 10);
				var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

				this._allTextHeight *= multi/2;
				this._allTextHeight = Math.pow(2, Math.round(Math.log(this._allTextHeight) / Math.log(2)));
			} else {
				this._allTextHeight = 2;
			}

			this.createContents();
			this.drawTextEx(text, 0, 0);
		}
	}
}

Window_SchoolInfo.prototype.treeInfo = function(){
	let fmt = undefined;
	let bEnableWordwrap = true;
	let text = undefined;
	let finalText = undefined;
	let textState = undefined;
	let totalText = "";
	let treeNames = "School Spell Trees:<br>";

	fmt = JSON.parse(mainInfoFmtTxt || '');
	if (fmt && this._selectedSchoolId > 0){
		bEnableWordwrap = fmt.match(/<(?:WordWrap)>/i);

		let globalTrees = $magicSchoolsData[this._selectedSchoolId].Trees;

		for (let key of Object.keys(globalTrees)){
			let currTree = globalTrees[key];
			treeNames += currTree.Name + "<br>";
		}


		totalText = totalText.concat(treeNames);
		text = fmt.format(treeNames);

		textState = { index: 0 };
		textState.originalText = text;
		textState.text = this.convertEscapeCharacters(text);
		let convertedTextHeight = this.calcTextHeight(textState, true);
		this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

		if (bEnableWordwrap) {
			var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
			var multi2 =  6;
			let multi3 = (txtLen >= 600 ? 4 : 10);
			var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

			this._allTextHeight += this._allTextHeight * 0.25;
			let numOfBreaks = text.match(/<br>/g).length;
			this._allTextHeight += numOfBreaks * 15;
		} else {
			this._allTextHeight = 2;
		}

		this.createContents();
		this.drawTextEx(text, 0, 0);
	}
}

Window_SchoolInfo.prototype.spellInfo = function(){
	let fmt = "";
	let bEnableWordwrap = true;
	let text = "";
	let finalText = "";
	let textState = "";
	let totalText = "";
	let spellNames = "Tree Spells:";

	spellNames = addBreak(spellNames, 'end');
	fmt = JSON.parse(mainInfoFmtTxt || '');
	if (fmt && this._selectedTreeId > 0){
		bEnableWordwrap = fmt.match(/<(?:WordWrap)>/i);

		let globalTree = $magicSchoolsData[this._selectedSchoolId].Trees[this._selectedTreeId];
		let actCls = $dataClasses.find(cls => cls && cls.id == this._selectedActor._classId);
		let actClsGrade = actCls.ClassGrade;
		let gradeConfigType = (this._selectedSchoolType == 0 ? 'PrimaryGradeConfig' : 'SecondaryGradeConfig');
		let actorConfigType = (this._selectedSchoolType == 0 ? 'PrimarySchools' : 'SecondarySchools');
		let globalTreeGradeData = globalTree[gradeConfigType];
		let actorGrade = (actClsGrade == 1 ? 'GradeConfig1' : (actClsGrade == 2 ? 'GradeConfig2' : 'GradeConfig3'));
		let globalTreeConfig = globalTreeGradeData[actorGrade].Config;
		let learnableSkills = [];
		let actorSkills = [];
		let selectActorSchool = this._selectedActor._magicSchoolsData[actCls.id][actorConfigType][this._selectedSchoolId];

		if (Object.keys(selectActorSchool.Trees).length > 0 && selectActorSchool.Trees.hasOwnProperty(this._selectedTreeId)){
			actorSkills = selectActorSchool.Trees[this._selectedTreeId].Spells;
		}

		if (spellListDispMode == 0){
			learnableSkills = $dataSkills.filter(sk => sk && sk.CanLearn && globalTreeConfig.includes(String(sk.id)));
		} else if (spellListDispMode > 0){
			if (bEnableMagicCrafting) {
				learnableSkills = $dataSkills.filter(sk => sk && globalTreeConfig.includes(String(sk.id)) && ((sk.IsRecipe && sk.TimesCrafted == 0) || !sk.IsRecipe));
			} else {
				learnableSkills = $dataSkills.filter(sk => sk && globalTreeConfig.includes(String(sk.id)));
			}
		}

		for (let skill of learnableSkills){
			let currSpellId = skill.id || 0;
			let isLearned = false;

			if (bShowLearnedLabel){
				if (actorSkills.contains(skill.id)){
					isLearned = true;
				}
			}

			if (spellListDispMode == 0){
				let spellName = skill.name + " (Lv. " + String(skill.ReqLevel) + ")" + (isLearned ? ' - Learned' : '');
				spellName = addBreak(spellName, 'end');
				spellNames += spellName
			} else if (spellListDispMode == 1) {
				let spellName = "";

				if (isLearned) {
					spellName = skill.name + " (Lv. " + String(skill.ReqLevel) + ") - Learned";
				} else {
					spellName = skill.name + " (Lv. " + String(skill.ReqLevel) + ")";

					if (!skill.CanLearn) {
						spellName = changeTextColor(spellName, 'both', 8, 0);
					}
				}

				spellName = addBreak(spellName, 'end');
				spellNames += spellName

			} else if (spellListDispMode == 2){
				let spellName = "";

				if (isLearned) {
					spellName = skill.name + " (Lv. " + String(skill.ReqLevel) + ") - Learned";
				} else {
					spellName = skill.name + " (Lv. " + String(skill.ReqLevel) + ")";
					if (!skill.CanLearn) {
						spellName = obfuscateText(text);
						spellName = changeTextColor(spellName, 'both', 8, 0);
					}
				}

				spellName = addBreak(spellName, 'end');
				spellNames += spellName
			}
		}

		totalText = totalText.concat(spellNames);
		text = fmt.format(spellNames);


		textState = { index: 0 };
		textState.originalText = text;
		textState.text = this.convertEscapeCharacters(text);
		let convertedTextHeight = this.calcTextHeight(textState, true);
		this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

		if (bEnableWordwrap) {
			var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
			var multi2 =  6;
			let multi3 = (txtLen >= 600 ? 4 : 10);
			var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

			this._allTextHeight += this._allTextHeight * 0.25;
			let numOfBreaks = text.match(/<br>/g).length;
			this._allTextHeight += numOfBreaks * 15;
		} else {
			this._allTextHeight = 2;
		}

		this.createContents();
		this.drawTextEx(text, 0, 0);
	}
}

Window_SchoolInfo.prototype.spellDataInfo = function(){
	let fmt = undefined;
	let bEnableWordwrap = true;
	let text = undefined;
	let finalText = undefined;
	let textState = undefined;
	let totalText = "";

	fmt = JSON.parse(mainInfoFmtTxt || '');
	if (fmt && this._selectedSkillId > 0) {
		let name = "";
		let desc = "";
		let skillData = $dataSkills.find(sk => sk && sk.id == this._selectedSkillId);
		let currSkill = JSON.parse(JSON.stringify(skillData));
		let miscSkInfo = "";
		let invSkInfo = "";
		let dmgSkInfo = "";
		let effSkInfo = "";
		let effStates = undefined;
		let effBuffs = undefined;
		let effRmvBuffs = undefined;
		let effRmvDebuffs = undefined;
		let effGrowth = undefined;
		let effSpecEff = undefined;
		let effComEvts = undefined;
		let effHPRecov = undefined;
		let effMPRecov = undefined;
		let effTPRecov = undefined;

		bEnableWordwrap = fmt.match(/<(?:WordWrap)>/i);

		name = currSkill.name + "<br>";
		if (currSkill.description.length > 0){
			desc = currSkill.description + "<br><br>";
		} else {
			name += "<br>";
		}

		//Misc Skl Info Section
		miscSkInfo = "Magic School: " + $dataSystem.elements[currSkill.damage.elementId] + "<br>";
		if (currSkill.mpCost > 0) { miscSkInfo += "MP Cost: " + currSkill.mpCost + "<br>"; }
		if (currSkill.tpCost > 0) { miscSkInfo += "TP Cost: " + currSkill.tpCost + "<br>"; }
		if (currSkill.tpGain > 0) { miscSkInfo += "Gain " + currSkill.tpGain + " TP on use<br>"; }
		if (currSkill.scope > 0) { miscSkInfo += "Scope: " + scopeLst[currSkill.scope] + "<br>"; }
		miscSkInfo += "Usable: " + occLst[currSkill.occasion] + "<br><br>";


		//Invocation Section Info
		invSkInfo = "Invocation Details:<br>";
		if (currSkill.delay > 0) { invSkInfo += "Delay: " + currSkill.speed + "<br>"; }
		if (currSkill.success > 0) { invSkInfo += "Use Chance: " + currSkill.success + "%<br>"; }
		if (currSkill.repeats > 1) { invSkInfo += "Repeats " + currSkill.repeats + " times<br>"; }
		invSkInfo += "Evasion Type: " + hitTypLst[currSkill.hitType] + "<br>";

		//Damage Section Info
		if (currSkill.damage.type != 0){
			dmgSkInfo = "<br>Damage Information:";
			dmgSkInfo += "<br>Damage Type: " + dmgTypLst[currSkill.damage.type];
			if (currSkill.damage.elementId > 0) { dmgSkInfo += "<br>Damage Element: " + $dataSystem.elements[currSkill.damage.elementId]; }
			if (currSkill.damage.variance > 0) { dmgSkInfo += "<br>Damage Variance: " + currSkill.damage.variance + "%"; }
			if (currSkill.damage.critical) { dmgSkInfo += "<br>" + "Can Critical"; }
			dmgSkInfo += "<br>";
		}

		let sklEffects = [];

		/*if (bIsMagicCraftingEnabled){

		} else {

		}*/

		sklEffects = currSkill.effects;
		let bHasEffects = false;
		if (!hasNoEffects(sklEffects)){
			bHasEffects = true;
			let displayEffects = buildEffectList(sklEffects);

			effSkInfo = "<br>Effects:";
			effStates = displayEffects.states;
			effBuffs = displayEffects.buffs;
			effRmvBuffs = displayEffects.rmvbuffs;
			effRmvDebuffs = displayEffects.rmvdebuffs;
			effGrowth = displayEffects.growth;
			effSpecEff = displayEffects.speceffs;
			effComEvts = displayEffects.comevts;
			effHPRecov = displayEffects.hpRecov;
			effMPRecov = displayEffects.mpRecov;
			effTPRecov = displayEffects.tpRecov;

			if (effStates.length > 0) {
				effSkInfo += "<br>States:<br>";

				for (var i1 = 0; i1 < effStates.length; i1++){
					effSkInfo += effStates[i1] + "<br>";
				}
			}

			if (effBuffs.length > 0) {
				effSkInfo += "<br>Buffs:<br>";

				for (var i1 = 0; i1 < effBuffs.length; i1++){
					effSkInfo += effBuffs[i1] + "<br>";
				}
			}

			if (effRmvBuffs.length > 0) {
				effSkInfo += "<br>Remove Buffs:<br>";

				for (var i1 = 0; i1 < effRmvBuffs.length; i1++){
					effSkInfo += effRmvBuffs[i1] + "<br>";
				}
			}

			if (effRmvDebuffs.length > 0) {
				effSkInfo += "<br>Remove Debuffs:<br>";

				for (var i1 = 0; i1 < effRmvDebuffs.length; i1++){
					effSkInfo += effRmvDebuffs[i1] + "<br>";
				}
			}

			if (effHPRecov.length > 0 || effMPRecov.length > 0 || effTPRecov.length > 0) {
				effSkInfo += "<br>Recovery:";

				if (effHPRecov.length > 0){
					effSkInfo += "<br>HP:<br>";

					for (var i1 = 0; i1 < effHPRecov.length; i1++){
						effSkInfo += effHPRecov[i1] + "<br>";
					}
				}

				if (effMPRecov.length > 0){
					effSkInfo += "<br>MP:<br>";
					for (var i1 = 0; i1 < effMPRecov.length; i1++){
						effSkInfo += effMPRecov[i1] + "<br>";
					}
				}

				if (effTPRecov.length > 0){
					effSkInfo += "<br>TP:<br>";
					for (var i1 = 0; i1 < effTPRecov.length; i1++){
						effSkInfo += effTPRecov[i1] + "<br>";
					}
				}
			}

			if (effSpecEff.length > 0){
				effSkInfo += "<br>Special Effects:<br>";

				for (var i1 = 0; i1 < effSpecEff.length; i1++){
					effSkInfo += effSpecEff[i1] + "<br>";
				}
			}

			if (effGrowth.length > 0){
				effSkInfo += "<br>Growth Effects:<br>";

				for (var i1 = 0; i1 < effGrowth.length; i1++){
					effSkInfo += effGrowth[i1] + "<br>";
				}
			}

			if (effComEvts.length > 0){
				effSkInfo += "<br>Common Events:<br>";

				for (var i1 = 0; i1 < effComEvts.length; i1++){
					effSkInfo += effComEvts[i1] + "<br>";
				}
			}

			effSkInfo += "<br>"
		}


		totalText = totalText.concat(name, desc, miscSkInfo, invSkInfo, dmgSkInfo, effSkInfo, "", "");
		text = fmt.format(name, desc, miscSkInfo, invSkInfo, dmgSkInfo, effSkInfo, "", "");

		textState = { index: 0 };
		textState.originalText = text;
		textState.text = this.convertEscapeCharacters(text);
		let convertedTextHeight = this.calcTextHeight(textState, true);
		this._allTextHeight = (convertedTextHeight > 600 ? convertedTextHeight / 2 : convertedTextHeight);

		if (bEnableWordwrap) {
			var txtLen = (this._allTextHeight == 0 ? 300 : this._allTextHeight);
			var multi2 =  6;
			let multi3 = (txtLen >= 600 ? 4 : 10);
			var multi = Math.ceil((txtLen * multi2) / (Graphics.width - (this._width + multi3)));

			this._allTextHeight += this._allTextHeight * 0.25;
			let numOfBreaks = text.match(/<br>/g).length;
			this._allTextHeight += (numOfBreaks * 9) - (!bHasEffects ? (text.length / 1.25) : 0);
		} else {
			this._allTextHeight = 2;
		}

		this.createContents();
		this.drawTextEx(text, 0, 0);
	}
}

Window_SchoolInfo.prototype.refresh = function() {
	if (this._countdown > 0) { return; }
	this.contents.clear();
	this._lastOriginY = -200;
	this.origin.y = 0;
	this._allTextHeight = 0;

	let actSchoolData = this._selectedActor._magicSchoolsData;

	if (actSchoolData && Object.keys(actSchoolData).length > 0){
		if (this._windowMode == 0) { //MainWindow
			this.mainInfo();
		} else if (this._windowMode == 1 && this._selectedSchoolId != -1) { //TreeView
			this.treeInfo();
		} else if (this._windowMode == 2 && this._selectedTreeId != -1){ //SpellView
			this.spellInfo();
		} else if (this._windowMode == 3 && this._selectedSkillId != -1){ //SpellInfo
			this.spellDataInfo();
		}
	}
};

Window_SchoolInfo.prototype.updateMode = function(mode, actorData, selectedSchoolType ,selectedSchool, selectedTree, selectedSpell){
	this._windowMode = mode;
	this._selectedActor = actorData;
	this._selectedSchoolType = (selectedSchoolType ? (selectedSchoolType.length > 0 ? selectedSchoolType[0] : -1) : -1);
	this._selectedSchoolId = (selectedSchool ? (selectedSchool.length > 0 ? selectedSchool[0] : -1) : -1);
	this._selectedTreeId = (selectedTree ? (selectedTree.length > 0 ? selectedTree[0] : -1) : -1);
	this._selectedSkillId = (selectedSpell ? (selectedSpell.length > 0 ? selectedSpell[0] : -1) : -1);
	this.refresh();
}

Window_SchoolInfo.prototype.contentsHeight = function() {
var standard = this.height - this.standardPadding() * 2;
return Math.max(standard, this._allTextHeight);
};

Window_SchoolInfo.prototype.updateCountdown = function() {
if (this._countdown > 0) {
	this._countdown -= 1;
	if (this._countdown <= 0) this.refresh();
}
};

Window_SchoolInfo.prototype.scrollSpeed = function() {
if (this._scrollSpeed === undefined) {
	this._scrollSpeed = 5;
}
return this._scrollSpeed;
};

Window_SchoolInfo.prototype.scrollOriginDown = function(speed) {
var value = this.contentsHeight() - this.height +
	this.standardPadding() * 2;
this.origin.y = Math.min(value, this.origin.y + speed);
};

Window_SchoolInfo.prototype.scrollOriginUp = function(speed) {
this.origin.y = Math.max(0, this.origin.y - speed);
};

Window_SchoolInfo.prototype.update = function() {
Window_Selectable.prototype.update.call(this);
this.updateCountdown();
if (this.isOpenAndActive()) this.updateKeyScrolling();
};

Window_SchoolInfo.prototype.updateKeyScrolling = function() {
if (Input.isPressed('up')) {
	this.scrollOriginUp(this.scrollSpeed());
} else if (Input.isPressed('down')) {
	this.scrollOriginDown(this.scrollSpeed());
} else if (Input.isPressed('pageup')) {
	this.scrollOriginUp(this.scrollSpeed() * 4);
} else if (Input.isPressed('pagedown')) {
	this.scrollOriginDown(this.scrollSpeed() * 4);
}
};

Window_SchoolInfo.prototype.updateArrows = function() {
if (this._lastOriginY === this.origin.y) return;
this.showArrows();
};

Window_SchoolInfo.prototype.showArrows = function() {
this._lastOriginY = this.origin.y;
this.upArrowVisible = this.origin.y !== 0;
this.downArrowVisible = this.origin.y !== this.contentsHeight() -
	this.height + this.standardPadding() * 2;
};

Window_SchoolInfo.prototype.hideArrows = function() {
this.upArrowVisible = false;
this.downArrowVisible = false;
};

Window_SchoolInfo.prototype.isInsideFrame = function() {
var x = this.canvasToLocalX(TouchInput._mouseOverX);
var y = this.canvasToLocalY(TouchInput._mouseOverY);
return x >= 0 && y >= 0 && x < this._width && y < this._height;
};

Window_SchoolInfo.prototype.processWheel = function() {
if (!this.isInsideFrame()) { return; }
var threshold = 20;
if (TouchInput.wheelY >= threshold) {
	this.scrollOriginDown(this.scrollSpeed() * 4);
}

if (TouchInput.wheelY <= -threshold) {
	this.scrollOriginUp(this.scrollSpeed() * 4);
}
};



/* Window_SchoolCommand Functions */
Window_SchoolCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_SchoolCommand.prototype.consutructor = Window_SchoolCommand;
Window_SchoolCommand.prototype.initialize = function(x, y, w, h){
	this._width = w;
	this._height = h;
	this._x = x;
	this._y = y;
	this._list = [];
	this._selectedMode == 0;

	Window_HorzCommand.prototype.initialize.call(this, x, y);
	this.refresh();
}

Window_SchoolCommand.prototype.setMode = function(wndMode) {
	this._selectedMode = wndMode;
	this.refresh();
}

Window_SchoolCommand.prototype.updateHelp = function(){
	//this._helpWindow.clear();
};

Window_SchoolCommand.prototype.getSelectedMode = function() { return this._selectedMode; }
Window_SchoolCommand.prototype.windowWidth = function() { return this._width; }
Window_SchoolCommand.prototype.standardFontSize = function() { return 28; }
Window_SchoolCommand.prototype.maxCols = function() { return 2; }
Window_SchoolCommand.prototype.findIdxSymbol = function(idx) { return (idx !== -1 && idx < this._list.length ? this._list[idx].symbol : 'cancel'); }
Window_SchoolCommand.prototype.getHeight = function() { return this._height; }


Window_SchoolCommand.prototype.makeCommandList = function(){
	this._list = [];
	if (this._selectedMode == 0){
		this.addCommand('Unlock Schools','unlock');
		this.addCommand('Cancel','notUnlock');
	} else {
		this.addCommand('Learn Spell','learn');
		this.addCommand('Cancel','notLearn');
	}
}

Window_SchoolCommand.prototype.select = function(index){
	this._index = index;
	this._stayCount = 0;
	this.ensureCursorVisible();
	this.updateCursor();
	this.callUpdateHelp();
}

Window_SchoolCommand.prototype.processOk = function(){
	if (this._index > -1){
		let selSym = this.findIdxSymbol(this._index);
		if (selSym && selSym != 'notUnlock' && selSym != 'notLearn') {
			if (selSym == 'unlock' || selSym == 'learn') { Window_Selectable.prototype.processOk.apply(this); }
			else { Window_Selectable.prototype.processCancel.apply(this); }
		} else {
			Window_Selectable.prototype.processCancel.apply(this);
		}
	}
}


/* Utility Functions */
function buildEffectList(effects){
	var tempObj = {
		"hpRecov" : [],
		"mpRecov" : [],
		"tpRecov": [],
		"states" : [],
		"parms" : [],
		"buffs" : [],
		"rmvbuffs" : [],
		"rmvdebuffs": [],
		"growth" : [],
		"skills" : [],
		"speceffs" : [],
		"comevts" : []
	};

	var hpRecov = [];
	var mpRecov = [];
	var tpRecov = [];
	var states = [];
	var parms = [];
	var buffs = [];
	var rmvbuffs = [];
	var rmvdebuffs = [];
	var growth = [];
	var skls = [];
	var speceffs = [];
	var comevts = [];

	if (effects.length > 0) {effects = orderEffects(effects); }

	for (var i1 = 0; i1 < effects.length; i1++){
		if (effects[i1].code == 11){ //Recov HP
			hpRecov.push(effects[i1]);
		} else if (effects[i1].code == 12){ //Recov MP
			mpRecov.push(effects[i1]);
		} else if (effects[i1].code == 13){ //Recov TP
			tpRecov.push(effects[i1]);
		} else if (effects[i1].code == 21){ //Add State
			states.push(effects[i1]);
		} else if (effects[i1].code == 22){ //Remove State
			states.push(effects[i1]);
		}else if (effects[i1].code == 31){ //Add Parm Buff
			buffs.push(effects[i1]);
		} else if (effects[i1].code == 32){ //Add Parm Debuff
			buffs.push(effects[i1]);
		}else if (effects[i1].code == 33){ //Remove Parm Buff
			rmvbuffs.push(effects[i1]);
		} else if (effects[i1].code == 34){ //Remove Parm Debuff
			rmvdebuffs.push(effects[i1]);
		} else if (effects[i1].code == 41){ //Spec Eff
			speceffs.push(effects[i1]);
		} else if (effects[i1].code == 42){ //Stat Growth
			growth.push(effects[i1]);
		} else if (effects[i1].code == 43){ //Learn Skill
			skls.push(effects[i1]);
		} else if (effects[i1].code == 44){ //Common Event
			comevts.push(effects[i1]);
		}
	}

	if (hpRecov.length > 0 ) { tempObj = processHpRecov(hpRecov, tempObj); }
	if (mpRecov.length > 0 ) { tempObj = processMpRecov(mpRecov, tempObj); }
	if (tpRecov.length > 0 ) { tempObj = processTpRecov(tpRecov, tempObj); }
	if (states.length > 0 ) { tempObj = processStates(states, tempObj); }
	if (buffs.length > 0 ) { tempObj = processBuffs(buffs, tempObj); }
	if (rmvbuffs.length > 0 ) { tempObj = processRmvBuffs(rmvbuffs, tempObj); }
	if (rmvdebuffs.length > 0 ) { tempObj = processRmvDebuffs(rmvdebuffs, tempObj); }
	if (speceffs.length > 0 ) { tempObj = processEffSpecEffs(speceffs, tempObj); }
	if (growth.length > 0 ) { tempObj = processGrowth(growth, tempObj); }
	if (skls.length > 0 ) { tempObj = processLrnSkils(skls, tempObj); }
	if (comevts.length > 0 ) { tempObj = processComEvts(comevts, tempObj); }

	return tempObj;
}

function processHpRecov(hpRecov, tempObj){
	for (var i1 = 0; i1 < hpRecov.length; i1++){
		var rPerc = hpRecov[i1].value1;
		var rInt = hpRecov[i1].value2;
		var recovStr = "";

		if (rPerc != 0.0){
			if(Math.sign(rPerc) == 1){
				recovStr = "\\c[11]+\\c[0] " + (rPerc * 100) + "% of Max HP";
			} else if (Math.sign(rPerc) == -1){
				recovStr = "\\c[18]-\\c[0] " + (rPerc * 100) + "% of Max HP";
			}
		}

		if (rInt != 0.0){
			if (recovStr.length > 0){
				recovStr += " and ";
			}

			if(Math.sign(rInt) == 1){
				recovStr += "\\c[11]+\\c[0] " + rInt + " HP";
			} else if (Math.sign(rInt) == -1){
				recovStr += "\\c[18]-\\c[0] " + rInt + " HP";
			}
		}

		tempObj.hpRecov.push(recovStr);
	}

	return tempObj;
}

function processMpRecov(mpRecov, tempObj){
	for (var i1 = 0; i1 < mpRecov.length; i1++){
		var rPerc = mpRecov[i1].value1;
		var rInt = mpRecov[i1].value2;
		var recovStr = "";

		if (rPerc != 0.0){
			if(Math.sign(rPerc) == 1){
				recovStr = "\\c[11]+\\c[0] " + (rPerc * 100) + "% of Max MP";
			} else if (Math.sign(rPerc) == -1){
				recovStr = "\\c[18]-\\c[0] " + (rPerc * 100) + "% of Max MP";
			}
		}

		if (rInt != 0.0){
			if (recovStr.length > 0){
				recovStr += " and ";
			}

			if(Math.sign(rInt) == 1){
				recovStr += "\\c[11]+\\c[0] " + rInt + " MP";
			} else if (Math.sign(rInt) == -1){
				recovStr += "\\c[18]-\\c[0] " + rInt + " MP";
			}
		}

		tempObj.mpRecov.push(recovStr);
	}

	return tempObj;
}

function processTpRecov(tpRecov, tempObj){
	for (var i1 = 0; i1 < tpRecov.length; i1++){
		var rPerc = tpRecov[i1].value1;
		var rInt = tpRecov[i1].value2;
		var recovStr = "";

		if (rPerc != 0.0){
			if(Math.sign(rPerc) == 1){
				recovStr = "\\c[11]+\\c[0] " + (rPerc * 100) + "% of Max TP";
			} else if (Math.sign(rPerc) == -1){
				recovStr = "\\c[18]-\\c[0] " + (rPerc * 100) + "% of Max TP";
			}
		}

		if (rInt != 0.0){
			if (recovStr.length > 0){
				recovStr += " and ";
			}

			if(Math.sign(rInt) == 1){
				recovStr += "\\c[11]+\\c[0] " + rInt + " TP";
			} else if (Math.sign(rInt) == -1){
				recovStr += "\\c[18]-\\c[0] " + rInt + " TP";
			}
		}

		tempObj.tpRecov.push(recovStr);
	}

	return tempObj;
}

function processStates(effstates, tempObj){
	for (var i1 = 0; i1 < effstates.length; i1++){
		if (effstates[i1].dataId > 0) {
			var stId = effstates[i1].dataId;
			var st = $dataStates[stId];
			var stVal = effstates[i1].value1;
			var stText = "";

			if (effstates[i1].code == 21){
				stText = "\\c[11]+\\c[0] \\i[" + st.iconIndex + "] " + st.name + " (" + (stVal * 100) + "%)";
			} else if (effstates[i1].code == 22){
				stText = "\\c[18]-\\c[0] \\i[" + st.iconIndex + "] " + st.name + " (" + (stVal * 100) + "%)";
			}

			tempObj.states.push(stText);
		}
	}

	return tempObj;
}

function processBuffs(buffs, tempObj){
	for (var i1 = 0; i1 < buffs.length; i1++){
		var parmId = buffs[i1].dataId;
		var parmName = staticTraits["21"][parmId];
		var buffVal = buffs[i1].value1;
		var buffText = "";

		if (buffs[i1].code == 31){
			buffText = "\\c[11]+\\c[0] " + parmName + " (" + buffVal + " turns)";
		} else if (buffs[i1].code == 32){
			buffText = "\\c[18]-\\c[0] " + parmName + " (" + buffVal + " turns)";
		}

		tempObj.buffs.push(buffText);
	}

	return tempObj;
}

function processRmvBuffs(rmvbuffs, tempObj){
	for (var i1 = 0; i1 < rmvbuffs.length; i1++){
		var parmId = rmvbuffs[i1].dataId;
		var parmName = staticTraits["21"][parmId];
		var rmvbuffText = "";

		rmvbuffText = "\\c[18]-\\c[0] " + parmName;

		tempObj.rmvbuffs.push(rmvbuffText);
	}

	return tempObj;
}

function processRmvDebuffs(rmvdebuffs, tempObj){
	for (var i1 = 0; i1 < rmvdebuffs.length; i1++){
		var parmId = rmvdebuffs[i1].dataId;
		var parmName = staticTraits["21"][parmId];
		var rmvdebuffText = "";

		rmvdebuffText = "\\c[11]+\\c[0] " + parmName;

		tempObj.rmvdebuffs.push(rmvdebuffText);
	}

	return tempObj;
}

function processEffSpecEffs(speceffs, tempObj){
	for (var i1 = 0; i1 < speceffs.length; i1++){
		var specEffId = speceffs[i1].dataId;
		var specEffName = specEffLst[specEffId];
		var specEffText = "";

		specEffText = "\\c[11]+\\c[0] " + specEffName;

		tempObj.speceffs.push(specEffText);
	}

	return tempObj;
}

function processGrowth(growth, tempObj){
	for (var i1 = 0; i1 < growth.length; i1++){
		var parmId = growth[i1].dataId;
		var parmName = staticTraits["21"][parmId];
		var parmIncVal = growth[i1].value1;
		var growthText = "";

		growthText = parmName + " \\c[11]+" + parmIncVal + "\\c[0]";

		tempObj.growth.push(growthText);
	}

	return tempObj;
}

function processLrnSkils(skls, tempObj){
	for (var i1 = 0; i1 < skls.length; i1++){
		var skId = skls[i1].dataId;
		var sk = $dataSkills[skId];
		var skText = "";

		skText = "\\c[11]+\\c[0] " + sk.name;

		tempObj.skills.push(skText);
	}

	return tempObj;
}

function processComEvts(comevts, tempObj){
	for (var i1 = 0; i1 < comevts.length; i1++){
		var ceId = comevts[i1].dataId;
		var ce = $dataCommonEvents[ceId];
		var comevtText = "";

		comevtText = "Calls CE: " + ce.name;

		tempObj.comevts.push(comevtText);
	}

	return tempObj;
}

function orderEffects(effects){
	for (var i1 = 0; i1 < effects.length; i1++){
		for (var i2 = 0; i2 < effects.length; i2++){
			var e1 = effects[i1];
			var e2 = effects[i2];
			var storage;

			if (e1.value > e2.value){
				storage = e1;
				effects[i1] = e2;
				effects[i2] = storage;
			}
		}
	}

	return effects;
}

function hasNoEffects(entryEffects){
	let isEmpty = true;

	if (entryEffects == undefined || entryEffects == null){
		return true;
	}

	for (var k of Object.keys(entryEffects)){
		if (Object.values(entryEffects[k]).length > 0){
			isEmpty = false;
		}
	}

	return isEmpty;
}

function addBreak(text, pos){
	if (pos == "start"){
		text = "<br>" + text;
	} else if (pos == "end"){
		text += "<br>";
	} else {
		text = "<br>" + text + "<br>";
	}

	return text;
}

function addXShift(text, shiftAmount){
	return "\\px[" + String(shiftAmount) +"]" + text;
}

function addYShift(text, shiftAmount){
	return "\\py[" + String(shiftAmount) +"]" + text;
}

function changeFontSize(text, fontSize){
	return "\\fs[" + String(fontSize) + "]" + text;
}

function resetFontSize(text){
	return "\\fr " + text;
}

function changeTextColor(text, pos, startColor, endColor){
	if (pos == "start"){
		text = "\\hc[" + startColor + "]" + text;
	} else if (pos == "end"){
		text += "\\hc[" + endColor + "]";
	} else if (pos == "both"){
		text = "\\hc[" + startColor + "]" + text + "\\hc[" + endColor + "]";
	}

	return text;
}

function obfuscateText(text){
	let obfuscatedText = "";
	let stringLen = 0;

	if (maxObfuscationChars == 0){
		stringLen = text.length;
	} else {
		stringLen = maxObfuscationChars
	}

	for (let i1 = 0; i1 < stringLen; i1++){
		let char = text[i1];
		if (char != " "){
			obfuscatedText += obfuscationChar;
		} else {
			obfuscatedText += " ";
		}
	}

	return obfuscatedText;
}

function calculateSchoolGoldCost(schoolType, schoolPriConfig, schoolSecdConfig, schoolIds){
	let goldCost = 0;
	if (schoolType.includes("Primary")){
		//Additional Pri School
		if (schoolIds.length > 0){
			goldCost = getSchoolCost(
				schoolPriConfig.addtSchBase,
				schoolPriConfig.addtSchMod,
				schoolPriConfig.addtSchMulti,
				(schoolIds.length > 0 ? schoolIds.length : 1),
				schoolPriConfig.schCurrForm
			);
		}
	} else {
		goldCost = getSchoolCost(
			schoolSecdConfig.schBase,
			schoolSecdConfig.schMod,
			schoolSecdConfig.schMulti,
			(schoolIds.length > 0 ? schoolIds.length : 1),
			schoolSecdConfig.schCurrForm
		);
	}

	return goldCost;
}

function calculateSchoolItemCost(schoolType, schoolPriConfig, schoolSecdConfig, schoolIds){
	let itemCost = 0;
	if (schoolType.includes("Primary")){
		//Additional Pri School
		if (schoolIds.length > 0){
			itemCost = getSchoolCost(
				schoolPriConfig.addtSchItmBase,
				schoolPriConfig.addtSchItmMod,
				schoolPriConfig.addtSchItmMulti,
				(schoolIds.length > 0 ? schoolIds.length : 1),
				schoolPriConfig.schItmForm
			);
		}
	} else {
		itemCost = getSchoolCost(
			schoolSecdConfig.schItmBase,
			schoolSecdConfig.schItmMod,
			schoolSecdConfig.schItmMulti,
			(schoolIds.length > 0 ? schoolIds.length : 1),
			schoolSecdConfig.schItmForm
		);
	}

	return itemCost;
}

function calculateSkillGoldCost(schoolType, schoolPriConfig, schoolSecdConfig, schoolIds, skillData, selectedSchoolId){
	let goldCost = 0;
	if (schoolType.includes("Primary")) {
		if (schoolIds[0] == selectedSchoolId) { //Init Pri School
			goldCost = getSpellCost(
				schoolPriConfig.initSchSpellBase,
				schoolPriConfig.initSchSpellMod,
				skillData.ReqLevel,
				schoolPriConfig.initSchSpellCurrForm,
			);
		} else { //Additional Pri School
			goldCost = getSpellCost(
				schoolPriConfig.addtSchSpellBase,
				schoolPriConfig.addtSchSpellMod,
				skillData.ReqLevel,
				schoolPriConfig.schSpellCurrForm
			);
		}
	} else {
		goldCost = getSpellCost(
			schoolSecdConfig.schSpellBase,
			schoolSecdConfig.schSpellMod,
			skillData.ReqLevel,
			schoolSecdConfig.schSpellCurrForm
		);
	}

	return goldCost;
}

function calculateSkillItemCost(schoolType, schoolPriConfig, schoolSecdConfig, schoolIds, skillData, selectedSchoolId){
	let itemCost = 0;
	if (schoolType.includes("Primary")) {
		if (schoolIds[0] == selectedSchoolId) { //Init Pri School
			itemCost = getSpellCost(
				schoolPriConfig.initSchSpellItmBase,
				schoolPriConfig.initSchSpellItmMod,
				skillData.ReqLevel,
				schoolPriConfig.initSchSpellItmForm
			);

		} else { //Additional Pri School
			itemCost = getSpellCost(
				schoolPriConfig.addtSchSpellItmBase,
				schoolPriConfig.addtSchSpellItmMod,
				skillData.ReqLevel,
				schoolPriConfig.schSpellItmForm
			);
		}
	} else {
		itemCost = getSpellCost(
			schoolSecdConfig.schSpellItmBase,
			schoolSecdConfig.schSpellItmMod,
			skillData.ReqLevel,
			schoolSecdConfig.schSpellItmForm
		);
	}

	return itemCost;
}

function getSchoolCost(baseCost, costMod, schoolMulti, numOfSchools, formula) { return eval(formula); }
function getSpellCost(baseCost, costMod, skLvl, formula) { return eval(formula); }
function getSchoolCostItemId(selectedSchoolId) { return ($magicSchoolsData[selectedSchoolId].CostItemId != 0 ? $magicSchoolsData[selectedSchoolId].CostItemId : defaultCostItmId); }
function getSpellCostItemId(selectedSchoolId, skillCostItemId) { return (skillCostItemId != 0 ? skillCostItemId : ($magicSchoolsData[selectedSchoolId].CostItemId != 0 ? $magicSchoolsData[selectedSchoolId].CostItemId : defaultCostItmId)); }
