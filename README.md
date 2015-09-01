# b2p
LoL API Challenge 2.0 bro2pro Application

1. The app can be run by simply setting up a local server and opening index.php in a web browser.

2. I just applied for a production API key, and the app can be viewed on www.bro2pro.net

3. CSS folder contains styling information.

4. Fonts folder contains some fonts.

5. IMG folder contains images of champions and images required for the UI layout.

6. js contains all of the scripts used for the app to run.

7. Db updater folder is the script used to update the database for the pros. 
  When the game is patched and static values change, etc, it is important to have new scores for the pros.
  
  get_score and get_info -.php are files used to proxy the AJAX calls and hide my API key (contained in apikey.php).
  I wasnt sure if I should have included it or not, but I did anyways so that you had a working product upon opening!
  


8. My app still has some known bugs since I pushed it to you guys before it was 100% ready, i.e. I want to provide percentage scores
as opposed to raw numbers for the PVE, PVP, and AUX factors, but that can come later.
