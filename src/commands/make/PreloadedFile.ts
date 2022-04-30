import BaseCommand from '../BaseCommand'

/**
 * Handle make:prldfile command
 */
export class PreloadedFile extends BaseCommand {
  public static async run() {
    /**
     * Get the preloaded file name
     */
    let prldName = await this.getInput('Preloaded file name')
    if (!prldName) {
      this.showError('Preloaded file name is required.')
      return
    }

    /**
     * Prompt the user to select the environment in which
     * the preloaded file will be loaded
     *
     * TODO: Send PR -> Pass the environment as an argument doesn't work :
     * https://github.com/adonisjs/assembler/blob/28000dfc9a2a597e93699a4996f44e09bb0edd77/commands/Make/PreloadFile.ts#L73
     */
    let environment = await this.getListInput('Environment', ['console', 'web', 'repl'], true)
    if (!environment) {
      this.showError('Environment is required.')
      return
    }

    /**
     * Execute the command
     */
    return this.handleExecCmd({
      command: `make:prldfile ${prldName} --environment=${environment.join(',')}`,
      fileType: 'preloaded file',
      openCreatedFile: true,
    })
  }
}
