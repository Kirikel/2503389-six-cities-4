import { ICommand } from './command.interface';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';


export class ImportCommand implements ICommand {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if(!(err instanceof Error)){
        throw err;
      }
      console.error(`Can't import data from file: ${filename}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
