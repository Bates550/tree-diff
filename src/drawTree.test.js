const drawTree = require('./drawTree');

test('', () => {
  const input = {
    '/': {
      childrenDirs: {},
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const expected = '\
  /\n\
M └── abc.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
M └── abc.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [
            { path: 'ghi.txt', status: 'M' },
            { path: 'jkl.txt', status: 'M' },
          ],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   ├── ghi.txt\n\
M │   └── jkl.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
        dir1: {
          childrenDirs: {},
          childrenFiles: [{ path: 'jkl.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
  ├── dir1\n\
M │   └── jkl.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [{ path: 'jkl.txt', status: 'M' }],
            },
          },
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
  │   ├── dirAlpha\n\
M │   │   └── jkl.txt\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [
                { path: 'jkl.txt', status: 'M' },
                { path: 'mno.txt', status: 'M' },
              ],
            },
          },
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
  │   ├── dirAlpha\n\
M │   │   ├── jkl.txt\n\
M │   │   └── mno.txt\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
        dir1: {
          childrenDirs: {
            dirOmega: {
              childrenDirs: {},
              childrenFiles: [{ path: 'apple.txt', status: 'A' }],
            },
          },
          childrenFiles: [{ path: 'wvu.txt', status: 'A' }],
        },
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
  └── dir1\n\
      ├── dirOmega\n\
A     │   └── apple.txt\n\
A     └── wvu.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});
