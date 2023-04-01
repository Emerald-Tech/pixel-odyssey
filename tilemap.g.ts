// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`200010000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104040401010101010101010101010101010101010101010101010101010101040101010401010101010101010101010101010101010101010404040704040401010101010404040408010101010101010101010101010101030303030303030101040101030303030301010101010101010104040704040105050505050505010104010105050505050101010404040401010303030303010505050505050501010301010505050505010101030303030101050505050501050505050505050101050101050505050502010105050505060605050505050605050505050505060605060605050505050303030505050503030505050505030505050505050503030503030505050505`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
...............2222222.....22222
...............2222222.....22222
.........22222.2222222..2..22222
...2222..22222.2222222..2..22222
...2222..22222.2222222..2..22222
22222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "spawner":
            case "tile7":return tile7;
            case "sky":
            case "tile1":return tile1;
            case "start":
            case "tile2":return tile2;
            case "end":
            case "tile8":return tile8;
            case "spike":
            case "tile6":return tile6;
            case "dirt":
            case "tile5":return tile5;
            case "grass":
            case "tile3":return tile3;
            case "coin":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
