const { Client, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(
  "MTEyOTc2ODQyMTI5OTYwNTU0NA.GID84Z.VEVRpXmQxSCo5RqPfHRrbC_gJBSmPMM8VnPgt8"
);
