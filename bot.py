import discord
client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$666'):
        await message.channel.send('rad')

client.run('ODM5MjIxMjM2NDI4NzAxNzM2.YJGfrg.PV-2R6BV0lpC_rs3KZ8WfPDs2f0')
