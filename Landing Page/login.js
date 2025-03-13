// Function to handle login action
function loginUser(userType) {
    if (userType === "consumer") {
        window.location.href = "consumer-dashboard.html"; // Redirect to consumer page
    } else if (userType === "farmer") {
        window.location.href = "farmer-dashboard.html"; // Redirect to farmer page
    }
}
