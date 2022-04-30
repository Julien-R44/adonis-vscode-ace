import BaseCommand from '../BaseCommand'

/**
 * Handle make:validator command
 */
export class Validator extends BaseCommand {
  public static async run() {
    /**
     * Get the validator name
     */
    let seederName = await this.getInput('Validator name')
    if (!seederName) {
      this.showError('Validator name is required.')
      return
    }

    /**
     * Execute the command
     */
    return this.handleExecCmd({
      command: `make:validator ${seederName}`,
      fileType: 'validator',
      openCreatedFile: true,
    })
  }
}
