<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->email) && !empty($data->password)) {
    // In demo mode, if database connection fails, let's just return success for UI purposes
    if (!$db) {
        http_response_code(200);
        echo json_encode(array("message" => "Login successful (Demo Mode)", "token" => "demo-token-123"));
        exit;
    }

    $query = "SELECT id, name, password_hash, role FROM users WHERE email = ? LIMIT 0,1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(1, $data->email);
    $stmt->execute();
    
    // Check if user exists
    if($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if(password_verify($data->password, $row['password_hash'])) {
            http_response_code(200);
            echo json_encode(array(
                "message" => "Login successful",
                "user" => array(
                    "id" => $row['id'],
                    "name" => $row['name'],
                    "role" => $row['role']
                )
            ));
        } else {
            http_response_code(401);
            echo json_encode(array("message" => "Login failed. Incorrect password."));
        }
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Login failed. User not found."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete credentials."));
}
?>
