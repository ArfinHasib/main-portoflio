
// Function to generate a magic link
const generateMagicLink = async (user) => {
    const apiUrl = "https://watch.viralprofits.yt/wp-json/magic-login/v1/token";
    const authUsername = "apiuser";
    const authPassword = "nuL4dy!qSEpubgVzF0XLxYhx";

    const body = JSON.stringify({
        user: user,
        send: false,
    });

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(`${authUsername}:${authPassword}`)}`,
            },
            body: body,
        });

        if (!response.ok) {
            console.error(`API error: HTTP ${response.status}`);
            return null;
        }

        const responseData = await response.json();
        return responseData.link || null;
    } catch (error) {
        console.error("Request error:", error);
        return null;
    }
}

// Function to handle the countdown
const startCountdown = async (magicLinkPromise) => {
    const linkElement = document.getElementById("link");
    const secondsElement = document.querySelector('.seconds');
    let countdown = parseInt(secondsElement.textContent, 10);

    while (countdown > 0) {
        secondsElement.textContent = --countdown;
        await new Promise((x) => setTimeout(x, 1000)); // Wait 1 second
    }

    // Wait for the magic link if it's not yet ready
    const link = await magicLinkPromise;
    if (link) {
        linkElement.href = link;
        window.location.href = link;
    } else {
        console.error("Magic link generation failed.");
    }
};

// Run forest run!
document.addEventListener("DOMContentLoaded", () => {
    // Get the email from the HTML element template
    const emailElement = document.getElementById("user_email");
    const user = emailElement ? emailElement.textContent.trim() : "";

    // Start generating the magic link and the countdown
    const magicLinkPromise = generateMagicLink(user);
    startCountdown(magicLinkPromise);
});
