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
        setTimeout(function() {
            if (!dev["wb-gpio/A2_IN"]){
                dev["HAVAC_test/EXT1_R3A1"]=false
                log('ALARM A2_IN')
            }
        }, 20000)
    }
});

if (dev["HAVAC_test/EXT1_R3A1"]){
    if (dev["wb-w1/28-00000d6b460c"]>25){
        dev["wb-mao4_209/Channel1"]=8000
    }else {
        dev["wb-mao4_209/Channel1"]=2000
    }
}else {
    dev["wb-mao4_209/Channel1"]=0
}