<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

if (!$db) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit();
}

$query = "SELECT * FROM items ORDER BY created_at DESC";
$stmt = $db->prepare($query);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0) {
    $items_arr = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // Extract row to vars
        extract($row);
        $item_item = array(
            "id" => $id,
            "type" => $type,
            "name" => $name,
            "category" => $category,
            "location" => $location,
            "date" => $date,
            "description" => $description,
            "status" => $status,
            "contactName" => $contact_name,
            "contactEmail" => $contact_email,
            "createdAt" => $created_at
        );
        array_push($items_arr, $item_item);
    }
    http_response_code(200);
    echo json_encode($items_arr);
} else {
    http_response_code(200);
    echo json_encode(array()); // Return empty array if no items found
}
?>
