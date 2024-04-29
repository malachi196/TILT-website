<html>
    <body>
        <?php
        $userfile = fopen("users.csv", "w") or die("unable to access user data at the current moment");
        $name = $_POST["name"]
        $qu = $_POST["qu"]
        fwrite($userfile, [$name, $qu])
        ?>
        <p>form accepted</p>
    </body>
</html>