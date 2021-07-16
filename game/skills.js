const skills = {
    'ambidexterity': {
        name: 'Ambidexterity',
        description: `Allows its possessor to use two weapons of the same type simultaneously during their attacks, and therefore to add their bonuses. Their encumbrance or size must be lower or equal to [X].`,
        referencePage: 46,
        icon: 'ambidextry.png'
    },
    'attraction': {
        name: 'Attraction',
        description: 'Allows its possessor, at the cost of an automatic manipulation, to attract a miniature they share a clear line of sight with and draw it into their area. The target must be at a lower or equal distance than [X] and their size index must be lower or equal to that of its possessor.',
        referencePage: 46,
        icon: 'attraction.png'
    },
    'blast': {
        name: 'Blast',
        description: 'Allows its possessor, at the cost of an automatic manipulation, to trigger a level [X] explosion in their area and in an adjacent area with a clear line of sight.',
        referencePage: 46,
        icon: 'blast.png'
    },
    'berserk': {
        name: 'Berserk',
        description: 'Allows its possessor to increase the strength of their melee attacks by adding [X] white dice to each of them. If they are a hero, they must have at least half their energy cubes in their wound zone. If they are a character, they must have lost at least half their life points.',
        referencePage: 47,
        icon: 'berserk.png'
    },
    'body guard': {
        name: 'Body Guard',
        description: 'Its possessor increases by [X] automatic successes the defense of allied miniatures located in the same area.',
        referencePage: 47,
        icon: 'body_guard.png'
    },
    'burst': {
        name: 'Burst',
        description: 'After having neutralized an enemy with a ranged attack, its possessor can use their remaining successes on [X] other miniatures they share a clear line of sight with.',
        referencePage: 47,
        icon: 'burst.png'
    },
    'circular strike': {
        name: 'Circular Strike',
        description: 'After having neutralized an enemy with a melee attack, its possessor can use their remaining successes on [X] other miniatures.',
        referencePage: 47,
        icon: 'circular_strike.png'
    },
    'combo': {
        name: 'Combo',
        description: 'When the possessor neutralizes a miniature during a melee attack, the possessor gains a free melee attack of [X] dice corresponding to their characteristic, without any weapon bonuses, against another miniature.',
        referencePage: 48,
        icon: 'combo.png'
    },
    'counterattack': {
        name: 'Counterattack',
        description: 'After a melee attack has been resolved against its possessor, they can perform a free melee attack upon the attacker with [X] yellow dice, for which they don’t benefit from any weapon bonuses.',
        referencePage: 48,
        icon: 'counterattack.png'
    },
    'cry': {
        name: 'Cry',
        description: 'Allows its possessor, once per turn, to trigger a level [X] explosion in their area and in an adjacent area with a clear line of sight.',
        referencePage: 48,
        icon: 'cry.png'
    },
    'elite command': {
        name: 'Elite Command',
        description: 'Allows its possessor to control friendly elite units. They choose an elite level tile from their side and [X] miniatures. These friendly miniatures start the mission in [the possessor]’s area. They can activate them by performing an automatic thought. Each energy cube spent on defense, reroll, or move for the friendly miniatures is move to [the possessor]’s thought space.',
        referencePage: 49,
        icon: 'elite_command.png'
    },
    'elusive': {
        name: 'Elusive',
        description: 'Allows its possessor to ignore [X] enemy size indexes when moving.',
        referencePage: 49,
        icon: 'elusive.png'
    },
    'flame': {
        name: 'Flame',
        description: 'Allows its possessor, during an attack or after an explosion, to place [X] flame tokens on the area of the attack or the explosion (see Dissipation page 44). Each token adds 1 level of dangerous terrain to its area. Its possessor is immune to this effect. ',
        referencePage: 49,
        icon: 'flame.png'
    },
    'toxic gas': {
        name: 'Toxic Gas',
        description: 'Allows its possessor, during an attack or after an explosion, to place [X] gas tokens on the area of the attack or the explosion (see Dissipation page 44). Each token adds 1 level of dangerous terrain to its area. Its possessor is immune to this effect. ',
        referencePage: 49,
        icon: 'toxic_gas.png'
    },
    'frost': {
        name: 'Frost',
        description: 'Allows its possessor, during an attack or after an explosion, to freeze the terrain by placing [X] frost tokens on the area of the attack or the explosion (see Dissipation page 44). Each token adds 1 level of difficult terrain to its area. Its possessor is immune to this effect.',
        referencePage: 49,
        icon: 'frost.png'
    },
    'grenade': {
        name: 'Grenade',
        description: 'Allows its possessor to trigger a level [X] explosion in a targeted area by performing a complex manipulation. Its difficulty is equal to the distance between its possessor’s area and the targeted area. In case of failure, the level [X] explosion is triggered in an area located at a distance equal to the number of successes obtained, along the line of sight.',
        referencePage: 50,
        icon: 'grenade.png'
    },
    'hacking': {
        name: 'Hacking',
        description: 'Allows its possessor to benefit from [X] automatic successes during certain thought actions indicated by the missions.',
        referencePage: 50,
        icon: 'hacking.png'
    },
    'henchman command': {
        name: 'Henchman Command',
        description: 'This skill works in the same way as the Elite command skill, replacing the term ‘elite’ with ‘henchman’.',
        referencePage: 50,
        icon: 'henchman_command.png'
    },
    'horror': {
        name: 'Horror',
        description: 'Allows its possessor to increase by [X] the move point cost for enemy miniatures wishing to enter the area in which its possessor is located.',
        referencePage: 50,
        icon: 'horror.png'
    },
    'imaginary friend': {
        name: 'Imaginary Driend',
        description: 'Allows its possessor to gain assistance from the ’little voice in their head’. For their actions, they have an additional yellow die while they are accompanied by their imaginary friend. To nullify this effect, an opponent in their area must perform a complex thought of difficulty [X].',
        referencePage: 50,
        icon: 'imaginary_friend.png'
    },
    'immobilization': {
        name: 'Immobilization',
        description: 'Allows its possessor, after an attack or an explosion that inflicts at least [X] wounds, to lay down the wounded miniature. To stand back up, they must spend their Move Point Bonus for the First Movement.',
        referencePage: 51,
        icon: 'immobilization.png'
    },
    'impenetrable defense': {
        name: 'Impenetrable Defense',
        description: 'Allows its possessor to benefit from [X] automatic defense successes against melee attacks.',
        referencePage: 51,
        icon: 'impenetrable_defense.png'
    },
    'investigation': {
        name: 'Investigation',
        description: 'Allows its possessor to benefit from [X] automatic successes during certain thought actions indicated by the missions.',
        referencePage: 51,
        icon: 'investigation.png'
    },
    'lock picking': {
        name: 'Lock Picking',
        description: 'Allows its possessor to benefit from [X] automatic successes during certain manipulation actions indicated by the missions.',
        referencePage: 51,
        icon: 'lock_piking.png'
    },
    'luck': {
        name: 'Luck',
        description: 'Allows its possessor to benefit from [X] free rerolls.',
        referencePage: 51,
        icon: 'luck.png'
    },
    'marksman': {
        name: 'Marksman',
        description: 'Allows its possessor to add [X] automatic successes during a ranged attack if they have obtained at least one success.',
        referencePage: 52,
        icon: 'marksman.png'
    },
    'martial arts': {
        name: 'Martial Arts',
        description: 'Allows its possessor to add [X] automatic successes during a melee attack, if they have obtained at least one success.',
        referencePage: 52,
        icon: 'martial_arts.png'
    },
    'misfortune': {
        name: 'Misfortune',
        description: 'Allows its possessor to force an enemy in their area to reroll [X] dice. Its possessor chooses the dice to reroll after the free rerolls.',
        referencePage: 52,
        icon: 'misfortune.png'
    },
    'mobility': {
        name: 'Mobility',
        description: 'Allows its possessor to ignore [X] difficult terrain levels when moving. ',
        referencePage: 52,
        icon: 'mobility.png'
    },
    'munitions specialist': {
        name: 'Munitions Specialist',
        description: 'Allows its possessor to benefit from [X] automatic successes during certain manipulation actions indicated by the missions',
        referencePage: 52,
        icon: 'munitions_specialist.png'
    },
    'nerves of steel': {
        name: 'Nerves of Steel',
        description: 'Allows its possessor to ignore [X] enemy menace indexes when performing ranged attacks, manipulations, or thoughts.',
        referencePage: 53,
        icon: 'nerves_steel.png'
    },
    'parkour': {
        name: 'Parkour',
        description: 'Allows its possessor to ignore [X] jump or climb levels when performing a special move, and [X] wounds caused by a fall.',
        referencePage: 53,
        icon: 'parkour.png'
    },
    'point blank': {
        name: 'Point Blank',
        description: 'Allows its possessor to benefit from [X] free rerolls during a ranged attack targeting a miniature in their area.',
        referencePage: 53,
        icon: 'point_blank.png'
    },
    'poison': {
        name: 'Poison',
        description: 'Allows its possessor, if they manage to exceed their opponent’s defense, to infl ict [X] automatic wounds, before the attack’s wounds are infl icted. The rest of the wounds are then applied as usual.',
        referencePage: 53,
        icon: 'poison.png'
    },
    'electricity': {
        name: 'Electricity',
        description: 'Allows its possessor, if they manage to exceed their opponent’s defense, to infl ict [X] automatic wounds, before the attack’s wounds are infl icted. The rest of the wounds are then applied as usual.',
        referencePage: 53,
        icon: 'electricity.png'
    },
    'protected': {
        name: 'Protected',
        description: 'Allows its possessor, if they are accompanied by at least [X] allied miniatures without this skill, to avoid being the target of an attack.',
        referencePage: 53,
        icon: 'protected.png'
    },
    'pushing limits': {
        name: 'Pushing Limits',
        description: 'Allows its possessor to wound themselves to perform actions. They suffer [X] wounds. Energy cubes moved in this way to the wound zone are considered to have been spent on the current action space, regardless of its exertion limit.',
        referencePage: 54,
        icon: 'pushing_limits.png'
    },
    'reach': {
        name: 'Reach',
        description: 'Allows its possessor to target a miniature that is not present in their area for a melee attack. They must share a clear line of sight and be at a distance lower or equal to [X].',
        referencePage: 54,
        icon: 'reach.png'
    },
    'regeneration': {
        name: 'Regeneration',
        description: 'Allows its possessor to regenerate. If they are a hero, during the Declare Heroes’ Stance step, they move [X] energy cubes from their wound zone to their fatigue zone. If they are a character, at the start of their activation, they recover [X] life points.',
        referencePage: 54,
        icon: 'regeneration.png'
    },
    'retaliation': {
        name: 'Retaliation',
        description: 'After a ranged attack has been resolved against its possessor, they can perform a free ranged attack upon the attacker with [X] yellow dice, for which they don’t benefit from any weapon or elevation bonuses. To use this skill, its possessor must have a ranged weapon.',
        referencePage: 54,
        icon: 'retaliation.png'
    },
    'sacrifice': {
        name: 'Sacrifice',
        description: 'Its possessor must declare the use of this skill during the Create the Dice Pool step of an attack. They take [X] successes from the attack if it targets an ally miniature in their area. They cannot defend against it. The remaining successes are applied as usual to the defender.',
        referencePage: 55,
        icon: 'sacrifice.png'
    },
    'shackle': {
        name: 'Shackle',
        description: 'Allows the possessor, if they successfully perform a melee attack, to place [X] shackle tokens on the defender. No wounds are inflicted by the attack. The number of successes obtained by the shackled miniature when performing attacks, thoughts, manipulations or defenses are reduced by [X]. These tokens can be removed if the aff ected miniature (or another allied miniature in the same area) successfully performs a complex manipulation of difficulty [X].',
        referencePage: 55,
        icon: 'shackle.png'
    },
    'smoke grenade': {
        name: 'Smoke Grenade',
        description: 'Allows its possessor, after having triggered an explosion, to place [X] smoke grenade tokens in this area (see Dissipation page 44). During a ranged attack, the attacker must count the number of smoke grenade tokens on the areas their line of sight crosses and subtract it from the number of the attack’s successes.',
        referencePage: 55,
        icon: 'smoke_grenade.png'
    },
    'sneak attack': {
        name: 'Sneak Attack',
        description: 'Allows its possessor to add [X] automatic successes during attacks in their area, if the total menace indexes of allies is equal to or higher than the total menace indexes of the enemies.',
        referencePage: 55,
        icon: 'sneak_attack.png'
    },
    'support': {
        name: 'Support',
        description: 'Allows its possessor to provide [X] free rerolls to all the allied miniatures in their area.',
        referencePage: 56,
        icon: 'support.png'
    },
    'tactician': {
        name: 'Tactician',
        description: 'Allows its possessor to perform an automatic thought to immediately grant [X] free move points to an allied miniature that hasn’t been the target of this eff ect this turn. If the miniature is a character, they also get their Move Point Bonus for the First Movement.',
        referencePage: 56,
        icon: 'tactician.png'
    },
    'untouchable': {
        name: 'Untouchable',
        description: 'Allows its possessor to benefit from [X] automatic defense successes against ranged attacks.',
        referencePage: 56,
        icon: 'untouchable.png'
    },
    'wall breaker': {
        name: 'Wall Breaker',
        description: 'Allows its possessor to move through a level [X] or lower wall, then to put a broken wall token on it. The cost of this movement is raised by 2. The two areas become adjacent, a clear line of sight can be drawn between them, and movement is possible.',
        referencePage: 57,
        icon: 'wall_breaker.png'
    },
}

export default skills;