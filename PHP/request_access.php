<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Access</title>
</head>
<body>
    <h1>Request Access</h1>
    <?php echo $_POST['firstname'] ?><br/>
    <?php echo $_POST['lastname'] ?><br/>
    <?php echo $_POST['fac_or_student'] ?><br/>
    
    <?php 
    $myarray = $_POST['involvement'];
    foreach ($myarray as $selection) {
        echo $selection;
    }
    ?><br/>

    <?php echo $_POST['email'] ?><br/>
    <?php echo $_POST['birthday'] ?><br/>
    <?php echo $_POST['details'] ?><br/>
    <?php echo $_POST['driver'] ?><br/>
</body>
</html>