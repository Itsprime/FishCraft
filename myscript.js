// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function submitForm() {
    const getAge = document.getElementsByName('Age')[0].value
    const getMinecraftName = document.getElementsByName('minecraft-name')[0].value
    const getDiscordtName = document.getElementsByName('discord-name')[0].value
    const getFitForCommunity = document.getElementsByName('fit-for-community')[0].value
    const getIdealMinecraftCommunity = document.getElementsByName('ideal-minecraft-community')[0].value
    const getRules = document.getElementsByName('rules')[0].value
    const getAboutYourSelf = document.getElementsByName('about-yourself')[0].value
    fetch("https://discord.com/api/webhooks/1119486707826446438/TFa7Hn1kATFkNpe8aUQLZZhFuPVvk-KxG5X16waLV8xeMPS6WiOh59mhawZGeRoIWtvI", {
        method: "POST",
        body: JSON.stringify({
            "content": "",
            "embeds": [
                {
                    "color": 7140608,
                    "fields": [
                        {
                            "name": "Age:",
                            "value": `${getAge}`
                        },
                        {
                            "name": "Minecraft Name:",
                            "value": `${getMinecraftName}`
                        },
                        {
                            "name": "Discord Name:",
                            "value": `${getDiscordtName}`
                        },
                        {
                            "name": "Why do you think you're a good fit for this community?:",
                            "value": `${getFitForCommunity}`
                        },
                        {
                            "name": "What do you look for in an ideal minecraft community?:",
                            "value": `${getIdealMinecraftCommunity}`
                        },
                        {
                            "name": "What do you think about our server rules?:",
                            "value": `${getRules}`
                        },
                        {
                            "name": "Tell us little about yourself!:",
                            "value": `${getAboutYourSelf}`
                        }
                    ]
                }
            ],
            "username": "NEW APPLICATION",
            "avatar_url": `https://mc-heads.net/head/${getMinecraftName}`,
            "attachments": []
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    alert("Thank you for applying, next step is for you to join our discord and wait for a response from staff\nPlease join https://discord.gg/Qr6eNDguFy");
    return false
}