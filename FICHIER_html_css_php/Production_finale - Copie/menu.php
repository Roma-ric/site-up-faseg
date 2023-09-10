<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Menu </title>
</head>
<body>
        <nav>
            <ul class="ul">
                <a href="acceuil.html" id="lien1" ><li class="li" id="li1"><br><i class="material-icons">home </i>ACCEUIL  </li></a>
                        <!-- <script>
                            var back_g1 = document.getElementById("li1");
                            var lien1 = document.getElementById("lien1");
                                lien1.onclick = function () {
                                    back_g1.style.borderBottom= "10px solid rgba(0, 255, 123, 0.575)";
                                    back_g1.style.color= "white";
                                };
                        </script> -->
                <a href="formation.html" ><li class="li" id="li2"><br><i class="material-icons">work </i> FORMATIONS </li></a>
                <a href="matiere.html" ><li class="li" id="li3"><br><i class="material-icons">storage </i>  UE&ECUE </li></a>
                <a href="infos.html" ><li class="li" id="li4" ><br><i class="material-icons">sms </i> INFOS</li></a> 
                <a href="resultats.html" ><li class="li" id="li5" onclick="alert('Pas de nouveau résultat disponible.');"><br><i class="material-icons">description </i>  RÉSULTATS </li></a>
                <!-- onclick="alert('Résultats indisponibles.');" -->
                <a href="admin.html" ><li class="li" id="li6"><br><i class="material-icons">people </i> ADMINISTRATION </li></a>
                <a href="aides.html" ><li class="li" id="li7"><br><i class="material-icons">help </i> AIDES  </li></a>
            </ul> 
        </nav>
</body>
</html>