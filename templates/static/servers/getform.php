<html>
    <body>
        <?php
        $userfile = fopen("users.csv", "w") or die("unable to access user data at the current moment");
        $name = $_POST["name"]
        fwrite($userfile, $name)
        ?>
        <p>form accepted</p>
    </body>
</html>