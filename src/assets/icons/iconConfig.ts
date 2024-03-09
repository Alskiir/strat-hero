export enum Icon {
	// Bridge
	HMG_EMPLACEMENT = "HMG Emplacement",
	ORBITAL_EMS_STRIKE = "Orbital EMS Strike",
	ORBITAL_GAS_STRIKE = "Orbital Gas Strike",
	ORBITAL_PRECISION_STRIKE = "Orbital Precision Strike",
	ORBITAL_SMOKE_STRIKE = "Orbital Smoke Strike",
	SHIELD_GENERATOR_RELAY = "Shield Generator Relay",
	TESLA_TOWER = "Tesla Tower",
	// Engineering Bay
	ANTI_PERSONNEL_MINEFIELD = "Anti-Personnel Minefield",
	ARC_THROWER = "Arc Thrower",
	BALLISTIC_SHIELD_BACKPACK = "Ballistic Shield Backpack",
	GRENADE_LAUNCHER = "Grenade Launcher",
	GUARD_DOG_ROVER = "Guard Dog Rover",
	INCENDIARY_MINES = "Incendiary Mines",
	LASER_CANNON = "Laser Cannon",
	SHIELD_GENERATOR_PACK = "Shield Generator Pack",
	SUPPLY_PACK = "Supply Pack",
	// General Stratagems
	HELLBOMB = "Hellbomb",
	REINFORCE = "Reinforce",
	RESUPPLY = "Resupply",
	SEAF_ARTILLERY = "SEAF Artillery",
	SOS_BEACON = "SOS Beacon",
	UPLOAD_DATA = "Upload Data",
	// Hanger
	EAGLE_110MM_ROCKET_PODS = "Eagle 110MM Rocket Pods",
	EAGLE_500KG_BOMB = "Eagle 500KG Bomb",
	EAGLE_AIRSTRIKE = "Eagle Airstrike",
	EAGLE_CLUSTER_BOMB = "Eagle Cluster Bomb",
	EAGLE_NAPALM_AIRSTRIKE = "Eagle Napalm Airstrike",
	EAGLE_REARM = "Eagle Rearm",
	EAGLE_SMOKE_STRIKE = "Eagle Smoke Strike",
	EAGLE_STRAFING_RUN = "Eagle Strafing Run",
	JUMP_PACK = "Jump Pack",
	// Misc
	LOADINGSPINNER = "LoadingSpinner",
	// Orbital Cannons
	ORBITAL_120MM_HE_BARRAGE = "Orbital 120MM HE Barrage",
	ORBITAL_380MM_HE_BARRAGE = "Orbital 380MM HE Barrage",
	ORBITAL_AIRBURST_STRIKE = "Orbital Airburst Strike",
	ORBITAL_GATLING_BARRAGE = "Orbital Gatling Barrage",
	ORBITAL_LASER = "Orbital Laser",
	ORBITAL_RAILCANNON_STRIKE = "Orbital Railcannon Strike",
	ORBITAL_WALKING_BARRAGE = "Orbital Walking Barrage",
	// Patriotic Administration Center
	ANTI_MATERIEL_RIFLE = "Anti-Materiel Rifle",
	AUTOCANNON = "Autocannon",
	EXPENDABLE_ANTI_TANK = "Expendable Anti-Tank",
	FLAMETHROWER = "Flamethrower",
	MACHINE_GUN = "Machine Gun",
	RAILGUN = "Railgun",
	RECOILLESS_RIFLE = "Recoilless Rifle",
	SPEAR = "Spear",
	STALWART = "Stalwart",
	// Robotics Workshop
	AUTOCANNON_SENTRY = "Autocannon Sentry",
	EMS_MORTAR_SENTRY = "EMS Mortar Sentry",
	GATLING_SENTRY = "Gatling Sentry",
	GUARD_DOG = "Guard Dog",
	MACHINE_GUN_SENTRY = "Machine Gun Sentry",
	MORTAR_SENTRY = "Mortar Sentry",
	ROCKET_SENTRY = "Rocket Sentry",
}

export const FOLDER_ICONS = {
	Bridge: [
		Icon.HMG_EMPLACEMENT,
		Icon.ORBITAL_EMS_STRIKE,
		Icon.ORBITAL_GAS_STRIKE,
		Icon.ORBITAL_PRECISION_STRIKE,
		Icon.ORBITAL_SMOKE_STRIKE,
		Icon.SHIELD_GENERATOR_RELAY,
		Icon.TESLA_TOWER,
	],
	"Engineering Bay": [
		Icon.ANTI_PERSONNEL_MINEFIELD,
		Icon.ARC_THROWER,
		Icon.BALLISTIC_SHIELD_BACKPACK,
		Icon.GRENADE_LAUNCHER,
		Icon.GUARD_DOG_ROVER,
		Icon.INCENDIARY_MINES,
		Icon.LASER_CANNON,
		Icon.SHIELD_GENERATOR_PACK,
		Icon.SUPPLY_PACK,
	],
	"General Stratagems": [
		Icon.HELLBOMB,
		Icon.REINFORCE,
		Icon.RESUPPLY,
		Icon.SEAF_ARTILLERY,
		Icon.SOS_BEACON,
		Icon.UPLOAD_DATA,
	],
	Hanger: [
		Icon.EAGLE_110MM_ROCKET_PODS,
		Icon.EAGLE_500KG_BOMB,
		Icon.EAGLE_AIRSTRIKE,
		Icon.EAGLE_CLUSTER_BOMB,
		Icon.EAGLE_NAPALM_AIRSTRIKE,
		Icon.EAGLE_REARM,
		Icon.EAGLE_SMOKE_STRIKE,
		Icon.EAGLE_STRAFING_RUN,
		Icon.JUMP_PACK,
	],
	Misc: [Icon.LOADINGSPINNER],
	"Orbital Cannons": [
		Icon.ORBITAL_120MM_HE_BARRAGE,
		Icon.ORBITAL_380MM_HE_BARRAGE,
		Icon.ORBITAL_AIRBURST_STRIKE,
		Icon.ORBITAL_GATLING_BARRAGE,
		Icon.ORBITAL_LASER,
		Icon.ORBITAL_RAILCANNON_STRIKE,
		Icon.ORBITAL_WALKING_BARRAGE,
	],
	"Patriotic Administration Center": [
		Icon.ANTI_MATERIEL_RIFLE,
		Icon.AUTOCANNON,
		Icon.EXPENDABLE_ANTI_TANK,
		Icon.FLAMETHROWER,
		Icon.MACHINE_GUN,
		Icon.RAILGUN,
		Icon.RECOILLESS_RIFLE,
		Icon.SPEAR,
		Icon.STALWART,
	],
	"Robotics Workshop": [
		Icon.AUTOCANNON_SENTRY,
		Icon.EMS_MORTAR_SENTRY,
		Icon.GATLING_SENTRY,
		Icon.GUARD_DOG,
		Icon.MACHINE_GUN_SENTRY,
		Icon.MORTAR_SENTRY,
		Icon.ROCKET_SENTRY,
	],
};

/**
 * Aspect ratio is width / height.
 */
export const ASPECT_RATIOS: { [key in Icon]: number } = (() => {
	let ratios: { [key in Icon]: number } = {} as any;
	for (const icon in Icon) {
		ratios[icon as Icon] = 1;
	}
	return ratios;
})();
