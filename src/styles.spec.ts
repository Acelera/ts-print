import { GetStyle } from './toStyles';
import { StyleOpt } from './index.ds';

describe('TO-STYLE', function() {
  it('toStyle', async () => {
    expect(typeof GetStyle).toBe('function');
  });

  it('GetStyle', async () => {
    expect(typeof GetStyle).toBe('function');
    expect(typeof GetStyle(StyleOpt.reset).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bold).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.dim).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.italic).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.underline).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.inverse).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.hidden).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.strikethrough).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.black).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.red).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.green).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.yellow).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.blue).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.magenta).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.cyan).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.white).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.gray).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.grey).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightRed).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightGreen).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightYellow).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightBlue).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightMagenta).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightCyan).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.brightWhite).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgBlack).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgRed).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgGreen).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgYellow).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgBlue).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgMagenta).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgCyan).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgWhite).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgGray).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgGrey).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgBrightRed).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgBrightGreen).open).toBe('string');
    expect(typeof GetStyle(StyleOpt.bgBrightYellow).open).toBe('string');
  });
});

// function a(s, code) {
//   return '\x1B[' + code.toString() + 'm' + s + '\x1B[39m';
// }
//
// function aE(s, color, code) {
//   assert.equal(colors[color](s), a(s, code));
//   assert.equal(colors.strip(s), s);
// }
//
// var stylesColors = ['white', 'black', 'blue', 'cyan', 'green', 'magenta',
//                     'red', 'yellow', 'brightYellow', 'brightRed',
//                     'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan',
//                     'brightMagenta'];
// // eslint-disable-next-line
// var stylesAll = stylesColors.concat(['bold', 'italic', 'underline', 'inverse',
//   'rainbow']);
//
// colors.mode = 'console';
// assert.equal(colors.bold(s), '\x1B[1m' + s + '\x1B[22m');
// assert.equal(colors.italic(s), '\x1B[3m' + s + '\x1B[23m');
// assert.equal(colors.underline(s), '\x1B[4m' + s + '\x1B[24m');
// assert.equal(colors.strikethrough(s), '\x1B[9m' + s + '\x1B[29m');
// assert.equal(colors.inverse(s), '\x1B[7m' + s + '\x1B[27m');
//
// assert.ok(colors.rainbow);
//
// aE(s, 'white', 37);
// aE(s, 'grey', 90);
// aE(s, 'black', 30);
// aE(s, 'blue', 34);
// aE(s, 'cyan', 36);
// aE(s, 'green', 32);
// aE(s, 'magenta', 35);
// aE(s, 'red', 31);
// aE(s, 'yellow', 33);
//
// aE(s, 'brightWhite', 97);
// aE(s, 'brightBlue', 94);
// aE(s, 'brightCyan', 96);
// aE(s, 'brightGreen', 92);
// aE(s, 'brightMagenta', 95);
// aE(s, 'brightRed', 91);
// aE(s, 'brightYellow', 93);
//
// assert.equal(s, 'string');
//
// var testStringWithNewLines = s + '\n' + s;
//
// // single style
// assert.equal(colors.red(testStringWithNewLines),
//     '\x1b[31m' + s + '\x1b[39m' + '\n' + '\x1b[31m' + s + '\x1b[39m');
//
// var testStringWithNewLinesStyled = colors.underline(s) + '\n' + colors.bold(s);
//
// // nested styles
// assert.equal(colors.red(testStringWithNewLinesStyled),
//     '\x1b[31m' + '\x1b[4m' + s + '\x1b[24m' + '\x1b[39m' + '\n' + '\x1b[31m' +
//   '\x1b[1m' + s + '\x1b[22m' + '\x1b[39m');
//
// colors.setTheme({error: 'red'});
//
// assert.equal(typeof (colors.red('astring')), 'string');
// assert.equal(typeof (colors.error('astring')), 'string');
//
// colors.setTheme({custom: ['blue', 'bold', 'underline']});
// assert.equal(colors.custom(s),
//     '\x1b[4m' + '\x1b[1m' + '\x1b[34m' + s +
//   '\x1b[39m' + '\x1b[22m' + '\x1b[24m' );
//
// colors.setTheme({custom: ['red', 'italic', 'inverse']});
// assert.equal(colors.custom(s),
//     '\x1b[7m' + '\x1b[3m' + '\x1b[31m' + s +
//   '\x1b[39m' + '\x1b[23m' + '\x1b[27m' );
//
// // should not throw error on null or undefined values
// var undef;
// assert.equal(colors.yellow(undef), '\x1b[33mundefined\x1b[39m');
//
// // was failing:
// assert.equal(colors.red(null), '\x1b[31mnull\x1b[39m');
