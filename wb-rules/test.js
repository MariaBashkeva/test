defineVirtualDevice("HAVAC_test",{
    title: "EXT1_R3A1",
    cells: {
        enabled: {
            type: "switch",
            value: dev["wb-gpio/A1_IN"]
        }
    }

});