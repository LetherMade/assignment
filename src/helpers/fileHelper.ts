import fs from 'fs'

export function* readFile(fileName: string): Generator<string> {
    const fileContent = fs.readFileSync(`${process.cwd()}/${fileName}`, 'utf-8')
    for (const line of fileContent.split(/\r?\n/)) {
        yield line
    }
}
