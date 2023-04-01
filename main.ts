controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumper.isHittingTile(CollisionDirection.Bottom)) {
        jumper.setVelocity(0, -175)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike`, function (sprite, location) {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    jumper.setImage(assets.image`left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    jumper.setImage(assets.image`right`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`end`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (0 < sprite.vy) {
        sprites.destroy(otherSprite)
        sprite.setVelocity(0, -125)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    } else {
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`coin`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`sky`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
let monkey: Sprite = null
let jumper: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
jumper = sprites.create(assets.image`right`, SpriteKind.Player)
tiles.placeOnRandomTile(jumper, assets.tile`start`)
scene.cameraFollowSprite(jumper)
controller.moveSprite(jumper, 75, 0)
for (let value of tiles.getTilesByType(assets.tile`spawner`)) {
    monkey = sprites.create(assets.image`monkey`, SpriteKind.Enemy)
    tiles.placeOnTile(monkey, value)
    monkey.setVelocity(20, 0)
}
forever(function () {
    jumper.vy += 10
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.tileKindAt(TileDirection.Bottom, assets.tile`sky`)) {
            value.setVelocity(-1 * value.vx, 0)
            value.image.flipX()
            pauseUntil(() => !(value.tileKindAt(TileDirection.Bottom, assets.tile`sky`)))
        }
    }
})
