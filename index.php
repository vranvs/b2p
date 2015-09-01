<?php

require_once 'get_score.php';

echo "<!DOCTYPE html>\n";
echo "<html>\n";
echo "<head lang=\"en\">\n";
echo "    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\n";
echo "    <meta charset=\"UTF-8\">\n";
echo "    <title>bro2pro - NA</title>\n";
echo "    <script src=\"js/jquery.js\"></script>\n";
echo "    <script src=\"js/chart.js\"></script>\n";
echo "    <script src=\"js/js.js\"></script>\n";
echo "</head>\n";
echo "<body>\n";
echo "<div id=\"banner\">\n";
echo "    <div id=\"bannerContainer\">\n";
echo "        <div id=\"logoContainer\"></div>\n";
echo "        <div id=\"btnContainer\">\n";
echo "            <div id=\"btn_algorithm\"></div>\n";
echo "            <div id=\"btn_contact\"></div>\n";
echo "            <div id=\"btn_patch\"></div>\n";
echo "        </div>\n";
echo "    </div>\n";
echo "</div>\n";
echo "    <div id=\"gridLimits\">\n";
echo "        <input type=\"text\" id=\"nameInput\" autocomplete=\"off\" placeholder=\"enter summoner name\"/>\n";
echo "        <div id=\"placeHolderDiv\">\n";
echo "            <span class=\"returnInfoText\"><strong>Your performance over 10 ranked games (5v5)</strong></span>\n";
echo "            <div id=\"graphContainer\">\n";
echo "                <canvas id=\"canvas\"></canvas>\n";
echo "            </div>\n";
echo "        </div>\n";
echo "        <div id=\"scoreContainer\">\n";
echo "            <div id=\"scoreHeader\"></div>\n";
echo "            <div id=\"p2bScoreContainer\">\n";
echo "                <span id=\"end_score\" class=\"bigScore\">0.00</span>\n";
echo "            </div>\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <div class=\"infoHolder\">\n";
echo "                <span class=\"infoText\">league tier</span> <br/>\n";
echo "                <span id=\"span_infoTier\" class=\"returnInfoText\">N/A</span>\n";
echo "            </div>\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <div class=\"infoHolder\">\n";
echo "                <span class=\"infoText\">league division</span> <br/>\n";
echo "                <span id=\"span_infoDivision\" class=\"returnInfoText\">N/A</span>\n";
echo "            </div>\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <div class=\"infoHolder\">\n";
echo "                <span class=\"infoText\">league points</span> <br/>\n";
echo "                <span id=\"span_infoPoints\" class=\"returnInfoText\">N/A</span>\n";
echo "            </div>\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <div class=\"infoHolder\">\n";
echo "                <span class=\"infoText\">win / loss ratio</span> <br/>\n";
echo "                <span id=\"span_infoRatio\" class=\"returnInfoText\">N/A</span>\n";
echo "            </div>\n";
echo "        </div>\n";
echo "    </div>\n";
echo "    <div id=\"breakdownContainer\">\n";
echo "        <div id=\"championBoxContainer\">\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_0\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_0\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_0\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_0\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_0\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_1\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_1\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_1\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_1\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_1\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_2\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_2\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_2\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_2\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_2\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_3\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_3\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_3\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_3\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_3\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_4\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_4\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_4\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_4\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_4\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_5\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_5\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_5\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_5\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_5\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_6\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_6\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_6\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_6\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_6\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_7\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_7\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_7\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_7\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_7\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_8\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_8\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_8\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_8\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_8\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "            <div class=\"gameContainer\">\n";
echo "                <div id=\"a_9\" class=\"championBox\"></div>\n";
echo "                <div class=\"breakdownPullout\">\n";
echo "                    <br/>\n";
echo "                    <span class=\"infoText\">pvp factor</span><br/>\n";
echo "                    <span id=\"pvp_9\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">pve factor</span><br/>\n";
echo "                    <span id=\"pve_9\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">aux factor</span><br/>\n";
echo "                    <span id=\"aux_9\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                    <span class=\"infoText\">b2p score</span><br/>\n";
echo "                    <span id=\"total_9\" class=\"returnInfoText\">N/A</span> <br/><br/>\n";
echo "                </div>\n";
echo "            </div>\n";
echo "        </div>\n";
echo "        <div id=\"projectionContainer\">\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <div id=\"projectionHeader\"></div>\n";
echo "            <div id=\"projectionContent\">\n";
echo "                <br/>\n";
echo "                <span class=\"infoText\">division advancement projection:</span><br/>\n";
echo "                <span id=\"projectionText\" class=\"returnInfoText\">UNAVAILABLE</span>\n";
echo "            </div>\n";
echo "            <div class=\"scoreDivider\"></div>\n";
echo "            <form id=\"bugReport\">\n";
echo "                <textarea placeholder=\"Bug report / suggestion box\"></textarea>\n";
echo "                <br/>\n";
echo "                <button class=\"sendButton\" type=\"submit\">send</button>\n";
echo "            </form>\n";
echo "        </div>\n";
echo "    </div>\n";
echo "<div class=\"popupContainer\" id=\"contactDiv\">\n";
echo "    <br/>\n";
echo "    <span class=\"returnInfoText\">General Inquiries:</span><br/>\n";
echo "    <span class=\"infoText\">swive@bro2pro.net</span><br/><br/>\n";
echo "    <span class=\"returnInfoText\">Bug reports:</span><br/>\n";
echo "    <span class=\"infoText\">vranvs@bro2pro.net</span>\n";
echo "</div>\n";
echo "<div class=\"popupContainer\" id=\"patchDiv\">\n";
echo "    <br/>\n";
echo "    <span class=\"returnInfoText\">Patch Notes (v2.0.1)</span><br/>\n";
echo "    <span class=\"infoText\">-Updated UI<br/>-Introduced Patch Notes (lol)<br/>-Secured Backend</span>\n";
echo "</div>\n";
echo "<div id=\"fadeDiv\"></div>\n";
echo "<div class=\"popupContainer\" id=\"noSummoner\">\n";
echo "    <span class=\"returnInfoText\">!SUMMONER COULD NOT BE FOUND!</span><br/>\n";
echo "    <span class=\"infoText\">Click outside of this dialogue to close.</span>\n";
echo "</div>\n";
echo "<div class=\"popupContainer\" id=\"noGamesDiv\">\n";
echo "    <span class=\"returnInfoText\">!SUMMONER HAS NOT PLAYED AT LEAST 10 RANKED 5v5 GAMES!</span><br/>\n";
echo "    <span class=\"infoText\">b2p is a tool that is used to meter, gauge, and improve your playstyle. Therefore we only use ranked games which provide the most reliable statistics which reflect when a player is truly \"trying\".</span>\n";
echo "</div>\n";
echo "</body>\n";
echo "</html>\n";
?>