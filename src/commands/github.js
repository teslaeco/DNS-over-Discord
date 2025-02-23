import { InteractionResponseType, ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/payloads';

import { createEmbed } from '../utils/embed.js';

export default {
    name: 'github',
    description: 'Get a link to the open-source GitHub repository for DNS over Discord',
    contexts: {
        installation: [
            ApplicationIntegrationType.GuildInstall,
            ApplicationIntegrationType.UserInstall,
        ],
        interaction: [
            InteractionContextType.Guild,
            InteractionContextType.BotDM,
            InteractionContextType.PrivateChannel,
        ],
    },
    execute: ({ response }) => response({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            embeds: [
                createEmbed(
                    'GitHub',
                    'View the DNS over Discord source code on GitHub at https://dns-over-discord.v4.wtf/github',
                ),
            ],
        },
    }),
};
