const assert = require('assert');

const parseObjects = args => {
  return { fileName: args[0], content: args[1], encoding: args[2] };
};

const writeData = (writeFile, ...args) => {
  const { fileName, content, encoding } = parseObjects(args);
  try {
    writeFile(fileName, content, encoding);
  } catch (error) {
    throw {
      name: 'WriteFileError',
      message: `Unable to write in ${fileName}`,
      fileName,
    };
  }
};

const mockWriteFile = (fileNameWeWant, contentWeWant, encodingWeWant) => {
  return (fileName, content, encoding) => {
    assert.equal(fileName, fileNameWeWant);
    assert.equal(content, contentWeWant);
    assert.equal(encoding, encodingWeWant);
    return undefined;
  };
};

describe('writeData', () => {
  const mockWriteData = mockWriteFile('./a.txt', 'hello', 'utf8');
  it('Should write content to given file', () => {
    assert.deepStrictEqual(
      mockWriteData('./a.txt', 'hello', 'utf8'), undefined
    );
  });

  it('Should not write content with wrong encoding', () => {
    const mockWriteData = mockWriteFile('./a.txt', 'hello', 'utf8');
    assert.throws(() =>
      writeData(mockWriteData, './a.txt', 'hello', 'utf10'), {
      name: 'WriteFileError',
      message: 'Unable to write in ./a.txt',
      fileName: './a.txt',
    });
  });
});
