export const commandTemplate = (name: string) => `import { IContext } from '../interfaces/IContext';

export default {
  name: '${name.toLowerCase()}',
  description: 'Command ${name} created via Salts CLI',
  alias: [],
  async execute(ctx: IContext): Promise<void> {
    await ctx.reply('Salts Framework: ${name} is active!')
  }
}`;