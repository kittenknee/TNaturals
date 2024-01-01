<?php
session_start();


$con = mysqli_connect('localhost', 'root', '','db_thanenaturals');


$txtUID = substr(md5(rand()), 0, 10);
$txtName = $_POST['name'];
$txtContact = $_POST['contact'];
$txtRadio = $_POST['user'];
$txtUname = $_POST['uname'];
$txtPass = $_POST['pass'];
$txtPass1 = $_POST['pass1'];


$_SESSION['SUID'] = $txtUID;
$_SESSION['Sname'] = $txtName;
$_SESSION['Scontact'] = $txtContact;
$_SESSION['Suname'] = $txtUname;
$_SESSION['Spass'] = $txtPass;


$sql = "INSERT INTO `tbl_creds` (`ID`, `fld_userID`, `fld_name`, `fld_contact`, `fld_radio`, `fld_uname`, `fld_pass`, `fld_pass1`) VALUES ('', '$txtUID', '$txtName', '$txtContact', '$txtRadio', '$txtUname', '$txtPass', '$txtPass1')";


$rs = mysqli_query($con, $sql);

if($rs && $txtRadio === "cust"){
    header("Location: custaccdetail.php");
}
else if($rs && $txtRadio === "supp"){
    header("Location: suppaccdetail.php");
}
else{
    echo '<script>alert("Something went wrong!")</script>';
    header("Location: signinpg.php");
}
?>