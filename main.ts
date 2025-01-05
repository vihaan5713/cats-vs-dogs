player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
    gameplay.setWeather(RAIN)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(OCELOT, randpos(
        pos(10, 5, 10),
        pos(-10, 5, -10)
        ))
        mobs.spawn(WOLF, randpos(
        pos(10, 5, 10),
        pos(-10, 5, -10)
        ))
    }
})
