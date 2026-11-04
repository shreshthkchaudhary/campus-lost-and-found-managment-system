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

if(
    !empty($data->type) &&
    !empty($data->name) &&
    !empty($data->category) &&
    !empty($data->location) &&
    !empty($data->date) &&
    !empty($data->description) &&
    !empty($data->contact)
) {
    $query = "INSERT INTO items SET 
                type=:type, name=:name, category=:category, 
                location=:location, date=:date, description=:description, 
                contact_name=:contact_name, contact_email=:contact_email";

    $stmt = $db->prepare($query);

    // Sanitize
    $type = htmlspecialchars(strip_tags($data->type));
    $name = htmlspecialchars(strip_tags($data->name));
    $category = htmlspecialchars(strip_tags($data->category));
    $location = htmlspecialchars(strip_tags($data->location));
    $date = htmlspecialchars(strip_tags($data->date));
    $description = htmlspecialchars(strip_tags($data->description));
    $contact_email = htmlspecialchars(strip_tags($data->contact));
    $contact_name = isset($data->contactName) ? htmlspecialchars(strip_tags($data->contactName)) : 'Student / Staff';

    // Bind data
    $stmt->bindParam(":type", $type);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":category", $category);
    $stmt->bindParam(":location", $location);
    $stmt->bindParam(":date", $date);
    $stmt->bindParam(":description", $description);
    $stmt->bindParam(":contact_name", $contact_name);
    $stmt->bindParam(":contact_email", $contact_email);

    if($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("message" => "Item was created successfully.", "id" => $db->lastInsertId()));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create item. Data is incomplete."));
}
?>
