var rawHMC = [];
var normalizedScores = [];
var finalScore = 0;
var projection;

var firstBloodArray = [];
var towerArray = [];
var inhibitorArray = [];
var firstTowerArray = [];
var firstInhibitorArray = [];
var damageTakenArray = [];
var damageDealtArray = [];
var healingDealtArray = [];

var championArrayText = [];

var tl_arr_cspm_zero_ten =[];
var tl_arr_cspm_ten_twenty =[];
var tl_arr_cspm_twenty_thirty =[];
var tl_arr_cspm_thirty_end =[];

var tl_arr_xppm_zero_ten =[];
var tl_arr_xppm_ten_twenty =[];
var tl_arr_xppm_twenty_thirty =[];
var tl_arr_xppm_thirty_end =[];

var tl_arr_gpm_zero_ten =[];
var tl_arr_gpm_ten_twenty =[];
var tl_arr_gpm_twenty_thirty =[];
var tl_arr_gpm_thirty_end =[];

var csArray = [];
var assistArray = [];
var killArray = [];
var gameTimeArray = [];
var championArray = [];
var deathArray = [];
var jungleCSArray = [];
var counterJungleCSArray = [];
var roleArray = [];
var laneArray = [];
var crowdControlArray = [];
var pvpFactorArray = [];
var pveFactorArray = [];
var auxFactorArray = [];
var hmcArray = [0,0,0,0,0,0,0,0,0,0];
var lineChartData = {
    labels : ["1","2","3", "4", "5", "6", "7", "8", "9", "10"],
    datasets : [
        {
            label: "",
            fillColor : "rgba(255,255,255,0.05)",
            strokeColor : "rgba(255,175,0,1)",
            pointColor : "#FFFFFF",
            pointStrokeColor : "#000000",
            pointHighlightFill : "#000000",
            pointHighlightStroke : "#000000",
            data : [hmcArray[0],hmcArray[1],hmcArray[2],hmcArray[3],hmcArray[4],hmcArray[5],hmcArray[6],hmcArray[7],hmcArray[8],hmcArray[9]]
        }
    ]
};
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
var ptbDatabase = {
    "1": 4734.450580000001,
    "2": 7968.92035,
    "3": 8333.92124,
    "4": 8051.604219999999,
    "5": 10000.000, // placeholder score
    "6": 8575.30864,
    "7": 10556.40694,
    "8": 8691.19662,
    "9": 10000.000, // placeholder score
    "10": 13751.73854,
    "11": 9635.915140000001,
    "12": 3116.43562,
    "13": 6808.21142,
    "14": 10000.000, // placeholder score
    "15": 8276.11514,
    "16": 3800.000, // placeholder score
    "17": 10000.000, // placeholder score
    "18": 6279.9434200000005,
    "19": 10000.000, // placeholder score
    "20": 5470.74314,
    "21": 10000.000, // placeholder score
    "22": 10000.000, // placeholder score
    "23": 8902.194125,
    "24": 6873.291139999999,
    "25": 5209.687659999999,
    "26": 8233.2152,
    "27": 7322.19816,
    "28": 6210.224299999999,
    "29": 8058.04595,
    "30": 7671.55144,
    "31": 8348.22654,
    "32": 2614.0941666666663,
    "33": 7144.75192,
    "34": 8899.701874999999,
    "35": 5588.06948,
    "36": 10000.000, // placeholder score
    "37": 10000.000, // placeholder score
    "38": 7383.917700000002,
    "39": 10339.87864,
    "40": 5254.0004,
    "41": 11917.432575,
    "42": 6365.97236,
    "43": 3954.2317199999998,
    "44": 8470.145059999999,
    "45": 10000.000, // placeholder score
    "48": 5641.92576,
    "50": 10000.000, // placeholder score
    "51": 10000.000, // placeholder score
    "53": 3468.11452,
    "54": 6030.6424400000005,
    "55": 9628.68302,
    "56": 6764.782020000001,
    "57": 8914.082579999998,
    "58": 9735.719019999999,
    "59": 3991.1770600000004,
    "60": 8584.55408,
    "61": 8984.3084,
    "62": 5848.49608,
    "63": 6262.3088,
    "64": 6269.62978,
    "67": 8601.775060000002,
    "68": 11298.180620000003,
    "69": 9613.05766,
    "72": 10000.000, // placeholder score
    "74": 12049.97666,
    "75": 5749.733020000001,
    "76": 5998.01238,
    "77": 6061.11672,
    "78": 6442.53784,
    "79": 5232.992200000001,
    "80": 5955.89638,
    "81": 8017.126860000001,
    "82": 10000.000, // placeholder score
    "83": 10000.000, // placeholder score
    "84": 6123.78208,
    "85": 8111.51122,
    "86": 8473.711780000001,
    "89": 4477.743,
    "90": 7745.36348,
    "91": 9786.63068,
    "92": 8113.09974,
    "96": 7737.13818,
    "98": 5853.24605,
    "99": 9685.578375000001,
    "101": 6882.360159999999,
    "102": 5520.753780000001,
    "103": 9887.11476,
    "104": 6335.899719999999,
    "105": 10000.000, // placeholder score
    "106": 11786.74962,
    "107": 10000.000, // placeholder score
    "110": 10000.000, // placeholder score
    "111": 10000.000, // placeholder score
    "112": 5360.9593,
    "113": 7490.09256,
    "114": 10000.000, // placeholder score
    "115": 9174.91008,
    "117": 6921.4589399999995,
    "119": 10000.000, // placeholder score
    "120": 7256.70084,
    "121": 8208.33912,
    "122": 8142.87854,
    "126": 9794.63768,
    "127": 6662.548999999999,
    "131": 7947.532120000001,
    "133": 10000.000, // placeholder score
    "134": 6950.7644,
    "143": 6667.24302,
    "150": 6416.7031,
    "154": 7939.539980000001,
    "157": 11790.562319999999,
    "161": 5578.15902,
    "201": 3117.62428,
    "222": 9645.00354,
    "223": 8595.36752,
    "236": 4750.00688,
    "238": 5946.1682200000005,
    "245": 7354.09204,
    "254": 3380.5752,
    "266": 11619.9594,
    "267": 3167.26844,
    "268": 6088.940280000001,
    "412": 4099.44135,
    "421": 6134.129059999999,
    "429": 8769.638175,
    "432": 2545.3334800000002
};

// FUNCTIONS //

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: false
    });
};

$(document).ready(function() {

    $(".championBox").click(function(){
        $(this).next('.breakdownPullout').slideToggle(300);
    });

    $("#btn_contact").click(function(){
        $("#contactDiv").fadeToggle(300);
        $("#fadeDiv").fadeIn(300);
    });

    $("#btn_patch").click(function(){
        $("#patchDiv").fadeIn(300);
        $("#fadeDiv").fadeIn(300);
    });

    $("#fadeDiv").click(function(){
        $(".popupContainer").fadeOut(300);
        $("#fadeDiv").fadeOut(300);
    });

    $("#nameInput").keyup(function() {
        $("#end_score").html('<img src="img/loading.gif" />');
        delay(function(){
            var rhState = $(".rowHolder").css("display");

            if(rhState == "none"){
                $(".breakdownPullout").slideToggle(300);
            }
            hmcArray = [];
            pvpFactorArray = [];
            pveFactorArray = [];
            auxFactorArray = [];
            finalScore = 0;
            var sN = $('#nameInput').val();
            sN = sN.replace(/\s/g, '');
            sN = sN.toLowerCase();
            if (sN != ''){
                secureGet(sN)
            }else{}
        }, 1000 );
    });
});

function secureGet(sumNam){

    $.ajax({
        dataType: "json",
        type: 'POST',
        data: {sumNam: sumNam},
        url: 'get_score.php',
        error: function (xhr, ajaxOptions, thrownError) {
            $("#noSummoner").fadeIn(300);
            $("#fadeDiv").fadeIn(300);
        },
        success: function (json) {
            fetchArrays(json);
        }
    });

    console.log("moving onto next call");
    $.ajax({
        dataType: "json",
        type: 'POST',
        data: {sumNam: sumNam},
        url: 'get_info.php',
        success: function (json) {
            fetchInfo(json);
        }
    })
}

function fetchArrays(statsObject) {
    if(statsObject.matches[9] != undefined) {

        for (var i = 0; i < 10; i++) {

            if (statsObject.matches[i].participants[0].stats.firstBloodKill == true) {
                firstBloodArray[i] = 1;
            } else {
                firstBloodArray[i] = 0;
            }

            if (statsObject.matches[i].participants[0].stats.firstTowerKill == true) {
                firstTowerArray[i] = 1;
            } else {
                firstTowerArray[i] = 0;
            }

            if (statsObject.matches[i].participants[0].stats.firstTowerKill == true) {
                firstInhibitorArray[i] = 1;
            } else {
                firstInhibitorArray[i] = 0;
            }

            damageDealtArray[i] = statsObject.matches[i].participants[0].stats.totalDamageDealt;
            healingDealtArray[i] = statsObject.matches[i].participants[0].stats.totalHeal;
            damageTakenArray[i] = statsObject.matches[i].participants[0].stats.totalDamageTaken;
            inhibitorArray[i] = statsObject.matches[i].participants[0].stats.inhibitorKills;
            towerArray[i] = statsObject.matches[i].participants[0].stats.towerKills;

            tl_arr_cspm_zero_ten[i] = statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.zeroToTen;
            tl_arr_cspm_ten_twenty[i] = statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.tenToTwenty;

            if (statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.twentyToThirty != undefined) {
                tl_arr_cspm_twenty_thirty[i] = statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.twentyToThirty;
            } else {
                tl_arr_cspm_twenty_thirty[i] = 0
            }

            if (statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.thirtyToEnd != undefined) {
                tl_arr_cspm_thirty_end[i] = statsObject.matches[i].participants[0].timeline.creepsPerMinDeltas.thirtyToEnd;
            } else {
                tl_arr_cspm_thirty_end[i] = 0
            }

            tl_arr_xppm_zero_ten[i] = statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.zeroToTen;
            tl_arr_xppm_ten_twenty[i] = statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.tenToTwenty;

            if (statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.twentyToThirty != undefined) {
                tl_arr_xppm_twenty_thirty[i] = statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.twentyToThirty;
            } else {
                tl_arr_xppm_twenty_thirty[i] = 0;
            }

            if (statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.thirtyToEnd != undefined) {
                tl_arr_xppm_thirty_end[i] = statsObject.matches[i].participants[0].timeline.xpPerMinDeltas.thirtyToEnd;
            } else {
                tl_arr_xppm_thirty_end[i] = 0;
            }


            tl_arr_gpm_zero_ten[i] = statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.zeroToTen;
            tl_arr_gpm_ten_twenty[i] = statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.tenToTwenty;

            if (statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.twentyToThirty != undefined) {
                tl_arr_gpm_twenty_thirty[i] = statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.twentyToThirty;
            } else {
                tl_arr_gpm_twenty_thirty[i] = 0;
            }

            if (statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.thirtyToEnd != undefined) {
                tl_arr_gpm_thirty_end[i] = statsObject.matches[i].participants[0].timeline.goldPerMinDeltas.thirtyToEnd;
            } else {
                tl_arr_gpm_thirty_end[i] = 0;
            }

            csArray[i] = statsObject.matches[i].participants[0].stats.minionsKilled;
            assistArray[i] = statsObject.matches[i].participants[0].stats.assists;
            killArray[i] = statsObject.matches[i].participants[0].stats.kills;
            gameTimeArray[i] = statsObject.matches[i].matchDuration;
            championArray[i] = statsObject.matches[i].participants[0].championId;
            deathArray[i] = statsObject.matches[i].participants[0].stats.deaths;
            jungleCSArray[i] = statsObject.matches[i].participants[0].stats.neutralMinionsKilledTeamJungle;
            counterJungleCSArray[i] = statsObject.matches[i].participants[0].stats.neutralMinionsKilledEnemyJungle;
            roleArray[i] = statsObject.matches[i].participants[0].timeline.role;
            laneArray[i] = statsObject.matches[i].participants[0].timeline.lane;
            crowdControlArray[i] = statsObject.matches[i].participants[0].stats.totalTimeCrowdControlDealt;

            switch (championArray[i]) {
                case 266:
                    championArrayText[i] = "Aatrox";
                    break;
                case 103:
                    championArrayText[i] = "Ahri";
                    break;
                case 84:
                    championArrayText[i] = "Akali";
                    break;
                case 12:
                    championArrayText[i] = "Alistar";
                    break;
                case 32:
                    championArrayText[i] = "Anivia";
                    break;
                case 1:
                    championArrayText[i] = "Annie";
                    break;
                case 22:
                    championArrayText[i] = "Ashe";
                    break;
                case 268:
                    championArrayText[i] = "Azir";
                    break;
                case 432:
                    championArrayText[i] = "Bard";
                    break;
                case 53:
                    championArrayText[i] = "Blitzcrank";
                    break;
                case 63:
                    championArrayText[i] = "Brand";
                    break;
                case 201:
                    championArrayText[i] = "Braum";
                    break;
                case 51:
                    championArrayText[i] = "Caitlyn";
                    break;
                case 69:
                    championArrayText[i] = "Cassiopeia";
                    break;
                case 31:
                    championArrayText[i] = "Cho'Gath";
                    break;
                case 42:
                    championArrayText[i] = "Corki";
                    break;
                case 122:
                    championArrayText[i] = "Darius";
                    break;
                case 131:
                    championArrayText[i] = "Diana";
                    break;
                case 36:
                    championArrayText[i] = "Dr. Mundo";
                    break;
                case 119:
                    championArrayText[i] = "Draven";
                    break;
                case 245:
                    championArrayText[i] = "Ekko";
                    break;
                case 60:
                    championArrayText[i] = "Elise";
                    break;
                case 28:
                    championArrayText[i] = "Evelynn";
                    break;
                case 81:
                    championArrayText[i] = "Ezreal";
                    break;
                case 9:
                    championArrayText[i] = "Fiddlesticks";
                    break;
                case 114:
                    championArrayText[i] = "Fiora";
                    break;
                case 105:
                    championArrayText[i] = "Fizz";
                    break;
                case 3:
                    championArrayText[i] = "Galio";
                    break;
                case 41:
                    championArrayText[i] = "Gangplank";
                    break;
                case 86:
                    championArrayText[i] = "Garen";
                    break;
                case 150:
                    championArrayText[i] = "Gnar";
                    break;
                case 79:
                    championArrayText[i] = "Gragas";
                    break;
                case 104:
                    championArrayText[i] = "Graves";
                    break;
                case 120:
                    championArrayText[i] = "Hecarim";
                    break;
                case 74:
                    championArrayText[i] = "Heimerdinger";
                    break;
                case 39:
                    championArrayText[i] = "Irelia";
                    break;
                case 40:
                    championArrayText[i] = "Janna";
                    break;
                case 59:
                    championArrayText[i] = "Jarvan IV";
                    break;
                case 24:
                    championArrayText[i] = "Jax";
                    break;
                case 126:
                    championArrayText[i] = "Jayce";
                    break;
                case 222:
                    championArrayText[i] = "Jinx";
                    break;
                case 429:
                    championArrayText[i] = "Kalista";
                    break;
                case 43:
                    championArrayText[i] = "Karma";
                    break;
                case 30:
                    championArrayText[i] = "Karthus";
                    break;
                case 38:
                    championArrayText[i] = "Kassadin";
                    break;
                case 55:
                    championArrayText[i] = "Katarina";
                    break;
                case 10:
                    championArrayText[i] = "Kayle";
                    break;
                case 85:
                    championArrayText[i] = "Kennen";
                    break;
                case 121:
                    championArrayText[i] = "Kha'Zix";
                    break;
                case 96:
                    championArrayText[i] = "Kog'Maw";
                    break;
                case 7:
                    championArrayText[i] = "LeBlanc";
                    break;
                case 64:
                    championArrayText[i] = "Lee Sin";
                    break;
                case 89:
                    championArrayText[i] = "Leona";
                    break;
                case 127:
                    championArrayText[i] = "Lissandra";
                    break;
                case 236:
                    championArrayText[i] = "Lucian";
                    break;
                case 117:
                    championArrayText[i] = "Lulu";
                    break;
                case 99:
                    championArrayText[i] = "Lux";
                    break;
                case 54:
                    championArrayText[i] = "Malphite";
                    break;
                case 90:
                    championArrayText[i] = "Malzahar";
                    break;
                case 57:
                    championArrayText[i] = "Maokai";
                    break;
                case 11:
                    championArrayText[i] = "Master Yi";
                    break;
                case 21:
                    championArrayText[i] = "Miss Fortune";
                    break;
                case 82:
                    championArrayText[i] = "Mordekaiser";
                    break;
                case 25:
                    championArrayText[i] = "Morgana";
                    break;
                case 267:
                    championArrayText[i] = "Nami";
                    break;
                case 75:
                    championArrayText[i] = "Nasus";
                    break;
                case 111:
                    championArrayText[i] = "Nautilus";
                    break;
                case 76:
                    championArrayText[i] = "Nidalee";
                    break;
                case 56:
                    championArrayText[i] = "Nocturne";
                    break;
                case 20:
                    championArrayText[i] = "Nunu";
                    break;
                case 2:
                    championArrayText[i] = "Olaf";
                    break;
                case 61:
                    championArrayText[i] = "Orianna";
                    break;
                case 80:
                    championArrayText[i] = "Pantheon";
                    break;
                case 78:
                    championArrayText[i] = "Poppy";
                    break;
                case 133:
                    championArrayText[i] = "Quinn";
                    break;
                case 33:
                    championArrayText[i] = "Rammus";
                    break;
                case 421:
                    championArrayText[i] = "Rek'Sai";
                    break;
                case 58:
                    championArrayText[i] = "Renekton";
                    break;
                case 107:
                    championArrayText[i] = "Rengar";
                    break;
                case 92:
                    championArrayText[i] = "Riven";
                    break;
                case 68:
                    championArrayText[i] = "Rumble";
                    break;
                case 13:
                    championArrayText[i] = "Ryze";
                    break;
                case 113:
                    championArrayText[i] = "Sejuani";
                    break;
                case 35:
                    championArrayText[i] = "Shaco";
                    break;
                case 98:
                    championArrayText[i] = "Shen";
                    break;
                case 102:
                    championArrayText[i] = "Shyvana";
                    break;
                case 27:
                    championArrayText[i] = "Singed";
                    break;
                case 14:
                    championArrayText[i] = "Sion";
                    break;
                case 15:
                    championArrayText[i] = "Sivir";
                    break;
                case 72:
                    championArrayText[i] = "Skarner";
                    break;
                case 37:
                    championArrayText[i] = "Sona";
                    break;
                case 16:
                    championArrayText[i] = "Soraka";
                    break;
                case 50:
                    championArrayText[i] = "Swain";
                    break;
                case 134:
                    championArrayText[i] = "Syndra";
                    break;
                case 223:
                    championArrayText[i] = "Tahm Kench";
                    break;
                case 91:
                    championArrayText[i] = "Talon";
                    break;
                case 44:
                    championArrayText[i] = "Taric";
                    break;
                case 17:
                    championArrayText[i] = "Teemo";
                    break;
                case 412:
                    championArrayText[i] = "Thresh";
                    break;
                case 18:
                    championArrayText[i] = "Tristana";
                    break;
                case 48:
                    championArrayText[i] = "Trundle";
                    break;
                case 23:
                    championArrayText[i] = "Tryndamere";
                    break;
                case 4:
                    championArrayText[i] = "Twisted Fate";
                    break;
                case 29:
                    championArrayText[i] = "Twitch";
                    break;
                case 77:
                    championArrayText[i] = "Udyr";
                    break;
                case 6:
                    championArrayText[i] = "Urgot";
                    break;
                case 110:
                    championArrayText[i] = "Varus";
                    break;
                case 67:
                    championArrayText[i] = "Vayne";
                    break;
                case 45:
                    championArrayText[i] = "Veigar";
                    break;
                case 161:
                    championArrayText[i] = "Vel'Koz";
                    break;
                case 254:
                    championArrayText[i] = "Vi";
                    break;
                case 112:
                    championArrayText[i] = "Viktor";
                    break;
                case 8:
                    championArrayText[i] = "Vladimir";
                    break;
                case 106:
                    championArrayText[i] = "Volibear";
                    break;
                case 19:
                    championArrayText[i] = "Warwick";
                    break;
                case 62:
                    championArrayText[i] = "Wukong";
                    break;
                case 101:
                    championArrayText[i] = "Xerath";
                    break;
                case 5:
                    championArrayText[i] = "Xin Zhao";
                    break;
                case 157:
                    championArrayText[i] = "Yasuo";
                    break;
                case 83:
                    championArrayText[i] = "Yorick";
                    break;
                case 154:
                    championArrayText[i] = "Zac";
                    break;
                case 238:
                    championArrayText[i] = "Zed";
                    break;
                case 115:
                    championArrayText[i] = "Ziggs";
                    break;
                case 26:
                    championArrayText[i] = "Zilean";
                    break;
                case 143:
                    championArrayText[i] = "Zyra";
                    break;
                default:
                    championArrayText[i] = "DB Not Updated"
                    break;

            }

        }
    }else{
        $("#noGamesDiv").fadeIn(300);
        $("#fadeDiv").fadeIn(300);
    }

    computeScores();
}

function fetchInfo(infoObject){
    var firstKey = Object.keys(infoObject)[0];
    var infoTier = infoObject[firstKey][0].tier;
    var infoDiv = infoObject[firstKey][0].entries[0].division;
    var infoLP = infoObject[firstKey][0].entries[0].leaguePoints;
    var xWins = infoObject[firstKey][0].entries[0].wins;
    var xLosses = infoObject[firstKey][0].entries[0].losses;
    var infoRatio = (xWins / xLosses).toFixed(3);

    displayInfo(infoTier, infoDiv, infoLP, infoRatio);
}

function displayInfo(tier, division, points, ratio){

    $("#span_infoTier").html(tier);
    $("#span_infoDivision").html(division);
    $("#span_infoPoints").html(points);
    $("#span_infoRatio").html(ratio);

}

function computeScores(){

    var aF;
    var bF;
    var cF;
    var dF;
    var eF;
    var fF;
    var gF;
    var hF;
    var iF;
    var jF;
    var kF;
    var lF;
    var mF;
    var nF;
    var oF;
    var pF;
    var qF;
    var rF;
    var sF;
    var tF;
    var uF;
    var vF;
    var wF;
    var xF;
    var yF;
    var zF;
    var aaF;
    var bbF;
    var ccF;

    for(var n = 0; n<10; n++) {

        switch(roleArray[n]){
            case "DUO":
            case "SOLO":
                aF = 1.33;
                bF = 1;
                cF = 0.5;
                dF = 0.06;
                eF = 0.11;
                fF = 0.17;
                gF = 5;
                hF = 0.5;
                iF = 4;
                kF = 0.5;
                lF = 0.16;
                mF = 0.65;
                nF = 2;
                oF = 1.25;
                pF = 3;
                qF = 1.5;
                rF = 1;
                sF = 0.9;
                tF = 0.8;
                uF = 0.7;
                vF = 1;
                wF = 1.1;
                xF = 1.1;
                yF = 1.1;
                zF = 1;
                aaF = 1.1;
                bbF = 1.2;
                ccF = 1.3;
                break;
            case "DUO_CARRY":
                aF = 1.33;
                bF = 1;
                cF = 0.5;
                dF = 0.06;
                eF = 0.11;
                fF = 0.17;
                gF = 5;
                hF = 0.5;
                iF = 4;
                kF = 0.5;
                lF = 0.16;
                mF = 0.65;
                nF = 2;
                oF = 1.25;
                pF = 3;
                qF = 2;
                rF = 1;
                sF = 0.9;
                tF = 0.8;
                uF = 0.7;
                vF = 0.8;
                wF = 0.8;
                xF = 0.8;
                yF = 0.8;
                zF = 1;
                aaF = 1.1;
                bbF = 1.2;
                ccF = 1.3;
                break;
            case "DUO_SUPPORT":
                aF = 1.33;
                bF = 1;
                cF = 0.75;
                dF = 0.06;
                eF = 0.11;
                fF = 0.17;
                gF = 0.5;
                hF = 5;
                iF = 4;
                kF = 0.5;
                lF = 0.16;
                mF = 0.65;
                nF = 2;
                oF = 1.25;
                pF = 0.25;
                qF = 3.5;
                rF = 0.1;
                sF = 0.1;
                tF = 0.1;
                uF = 0.1;
                vF = 0.8;
                wF = 0.8;
                xF = 0.8;
                yF = 0.8;
                zF = 0.3;
                aaF = 0.4;
                bbF = 0.5;
                ccF = 0.6;
                break;
            case "NONE":
                aF = 1.33;
                bF = 1;
                cF = 0.5;
                dF = 0.06;
                eF = 0.11;
                fF = 0.17;
                gF = 2;
                hF = 2.5;
                iF = 4;
                kF = 0.5;
                lF = 0.16;
                mF = 0.65;
                nF = 2;
                oF = 1.25;
                pF = 1.5;
                qF = 1.5;
                rF = 0.6;
                sF = 0.5;
                tF = 0.4;
                uF = 0.3;
                vF = 1;
                wF = 0.9;
                xF = 0.8;
                yF = 0.7;
                zF = 1;
                aaF = 0.9;
                bbF = 0.8;
                ccF = 0.7;
        }

        pvpFactorArray[n] = (
            ((aF * firstBloodArray[n]) +
            (bF * killArray[n]) +
            (cF * assistArray[n])) /
            (iF * (deathArray[n] + 1))) / (gameTimeArray[n] / 3600);

        pveFactorArray[n] =
            ((dF * csArray[n]) +
            (eF * jungleCSArray[n]) +
            (fF * counterJungleCSArray[n])) / ((gameTimeArray[n]) / 60) +
                // +
            ((rF * tl_arr_cspm_zero_ten[n]) +
            (sF * tl_arr_cspm_ten_twenty[n]) +
            (tF * tl_arr_cspm_twenty_thirty[n]) +
            (uF * tl_arr_cspm_thirty_end[n])) +
                // +
            ((vF * tl_arr_xppm_zero_ten[n]) +
            (wF * tl_arr_xppm_ten_twenty[n]) +
            (xF * tl_arr_xppm_twenty_thirty[n]) +
            (yF * tl_arr_xppm_thirty_end[n]));

        auxFactorArray[n] =
            ((hF * crowdControlArray[n]) +
            (pF * damageDealtArray[n]) +
            (qF * healingDealtArray[n])) +

            ((kF * towerArray[n]) +
            (lF * inhibitorArray[n]) +
            (mF * firstTowerArray[n]) +
            (nF * firstInhibitorArray[n])) +

            ((zF * tl_arr_gpm_zero_ten[n]) +
            (aaF * tl_arr_gpm_ten_twenty[n]) +
            (bbF * tl_arr_gpm_twenty_thirty[n]) +
            (ccF * tl_arr_gpm_thirty_end[n])) /

            ((oF * damageTakenArray[n]) /
            (gameTimeArray[n] / 60));

         rawHMC[n] = (1000 * pvpFactorArray[n]) + (2 * pveFactorArray[n]) + (0.01 * auxFactorArray[n]);
    }

    for (var j = 0; j < 10; j++) {
        normalizedScores[j] = (rawHMC[j] / ptbDatabase[championArray[j]]) * 100;
        normalizedScores[j] = normalizedScores[j].toFixed(2);
    }

    for (var k = 0; k < 10; k++) {
        normalizedScores[k] = parseInt(normalizedScores[k]);
        finalScore = finalScore + normalizedScores[k];
    }
    finalScore = (finalScore / 10).toFixed(2);

    if(finalScore < 45){
        projection = "DIVISON DROP --";
        $(".returnInfoText").css("color", "white");
        $(".bigScore").css("color", "white");
    }
    else if(finalScore > 45 && finalScore < 70){
        projection = "DIVISON DROP";
        $(".returnInfoText").css("color", "rgba(219,193,221,1)");
        $(".bigScore").css("color", "rgba(219,193,221,1)");
    }
    else if(finalScore > 70 && finalScore < 87){
        projection = "MAINTAIN DIVISON";
        $(".returnInfoText").css("color", "rgba(235,235,129,1)");
        $(".bigScore").css("color", "rgba(235,235,129,1)");
    }
    else if(finalScore > 87 && finalScore < 95){
        projection = "ADVANCE DIVISONS";
        $(".returnInfoText").css("color", "rgba(251,174,87,1)");
        $(".bigScore").css("color", "rgba(251,174,87,1)");
    }
    else if(finalScore > 95){
        projection = "ADVANCE DIVISONS ++";
        $(".returnInfoText").css("color", "indianred");
        $(".bigScore").css("color", "indianred");
    }

    $("#projectionText").html(projection);

    roundScores();

}

function roundScores(){
    for(var m = 0; m<10; m++){
        pvpFactorArray[m] = pvpFactorArray[m].toFixed(2);
        pveFactorArray[m] = pveFactorArray[m].toFixed(2);
        auxFactorArray[m] = auxFactorArray[m].toFixed(2);
        rawHMC[m] = rawHMC[m].toFixed(2);
    }
    displayScores();
}

function displayScores() {

    for (var o = 0; o < 10; o++) {

        championArrayText[o] = (championArrayText[o].replace(/[^A-Z0-9]/ig, '')).toLowerCase();
        $('#a_' + o).html('<span class="helper">' + '<img class="champIcon" src="img/championIcons/' + championArrayText[o] + '.png" />' + '</span');
        $('#pvp_' + o).html(pvpFactorArray[o]);
        $('#pve_' + o).html(pveFactorArray[o]);
        $('#aux_' + o).html(auxFactorArray[o]);
        $('#total_' + o).html(normalizedScores[o]);

    }
    $("#end_score").html(finalScore);
    window.myLine.datasets[0].points[0].value = normalizedScores[0];
    window.myLine.datasets[0].points[1].value = normalizedScores[1];
    window.myLine.datasets[0].points[2].value = normalizedScores[2];
    window.myLine.datasets[0].points[3].value = normalizedScores[3];
    window.myLine.datasets[0].points[4].value = normalizedScores[4];
    window.myLine.datasets[0].points[5].value = normalizedScores[5];
    window.myLine.datasets[0].points[6].value = normalizedScores[6];
    window.myLine.datasets[0].points[7].value = normalizedScores[7];
    window.myLine.datasets[0].points[8].value = normalizedScores[8];
    window.myLine.datasets[0].points[9].value = normalizedScores[9];
    window.myLine.update();
}