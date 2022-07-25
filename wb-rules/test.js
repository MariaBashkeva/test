defineVirtualDevice("HAVAC_test",{
    title: "EXT1_R3A1",
    cells: {
        EXT1_R3A1: {
            type: "switch",
            value: dev["wb-gpio/A1_IN"]
        }
    }

});
defineRule({
    whenChanged: "HAVAC_test/EXT1_R3A1",
    then: function(){
        log('ALARM A1_IN')
    }
});

